<template>
    <h2>旅行航线图</h2>
    <div id="container" style="width: 100%; height: 500px;"></div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { mapAirportsByAbbrZH } from '../../data/trip/airports';
import { FLIGHT_DATA } from '../../data/trip/flight';
import { Point } from "../../type";


interface Edge {
    fromName: string,
    toName: string,
    coords: number[][],
    date: Date,
}

interface infoMark {
    name: string,
    airport: string,
    coord: number[],
}

let arrInfo: infoMark[] = []
let countAirport = new Map();
let yearFlight: Map<number, number> = new Map();
const myEdge: Edge[] = FLIGHT_DATA.reduce((res: Edge[], item) => {

    if (!item.departure || !item.arrival) { return res; }

    const itemDepAirport = item.departure.airport;
    const itemArrAirport = item.arrival.airport;

    const depAirport = mapAirportsByAbbrZH[itemDepAirport];
    const arrAirport = mapAirportsByAbbrZH[itemArrAirport];

    countAirport.set(itemDepAirport, (countAirport.get(itemDepAirport) || 0) + 1);
    countAirport.set(itemArrAirport, (countAirport.get(itemArrAirport) || 0) + 1);

    const depCoord: number[] = [depAirport.longitude, depAirport.latitude]
    const arrCoord: number[] = [arrAirport.longitude, arrAirport.latitude]

    const year = item.date.getFullYear();
    yearFlight.set(year, (yearFlight.get(year) || 0) + 1)

    res.push({
        fromName: depAirport.city,
        toName: arrAirport.city,
        coords: [depCoord, arrCoord],
        date: item.date,
    })

    arrInfo.push({
        name: arrAirport.city,
        airport: itemArrAirport,
        coord: arrCoord
    })
    arrInfo.push({
        name: depAirport.city,
        airport: itemDepAirport,
        coord: depCoord
    })

    return res
}, [] as Edge[])

// console.log(myEdge)
// console.log(countAirport)
// console.log(arrInfo)
// console.log(yearFlight)
arrInfo.forEach((v, i) => {
    if (v.airport) {
        let c = countAirport.get(v.airport)
        v.coord.push(parseInt(c) * 10)
    }
})
// console.log(arrInfo)
let newArrInfo: any[] = []
arrInfo.forEach((v, i) => {
    let obj = {
        name: v.name,
        value: v.coord
    }
    newArrInfo.push(obj)
})

let color = [
    '#a6c84c',
    '#ffa022',
    '#46bee9'
];

let polyline: any = null;
let map: any = null;
const aMapLoader: any = ref(null);
let animatedPath: number[][] = []
let animationDuration = 5000 // 动画总时长（毫秒）
let animationInterval = 50  // 动画帧间隔（毫秒）
let animationFrame: any = null
// 示例航线数据（请替换为你的实际数据）
const path = [
    [116.397428, 39.90923], // 北京
    [121.473701, 31.230416], // 上海
    [113.280637, 23.125178], // 广州
];

function animatePolyline(polyline, path, duration) {
    const length = path.length;
    let currentIndex = 0;
    const animateStep = () => {
        if (currentIndex < length - 1) {
            polyline.setPath(path.slice(0, currentIndex + 1));
            currentIndex++;
            setTimeout(animateStep, duration / (length - 1));
        } else {
            polyline.setPath(path);
        }
    };
    animateStep();
}
function generateCurvePath() {
    // 这里使用简单的二次贝塞尔曲线插值作为示例
    // 实际应用中，你可能需要使用更复杂的曲线算法，如三次贝塞尔曲线或Catmull-Rom曲线
    const curvePath: number[][] = [];
    for (let i = 0; i < path.length - 1; i++) {
        const p0 = path[i];
        const p1 = path[i + 1];
        const controlPoint = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2]; // 控制点取中点
        // 使用t从0到1进行插值，生成曲线上的点
        for (let t = 0; t <= 1; t += 0.01) {
            const x = Math.pow(1 - t, 2) * p0[0] + 2 * (1 - t) * t * controlPoint[0] + Math.pow(t, 2) * p1[0];
            const y = Math.pow(1 - t, 2) * p0[1] + 2 * (1 - t) * t * controlPoint[1] + Math.pow(t, 2) * p1[1];
            curvePath.push([x, y]);
        }
    }
    // 添加终点
    curvePath.push(path[path.length - 1]);
    animatedPath = curvePath;
}
function startAnimation() {
    let currentIndex = 0;
    animationFrame = setInterval(() => {
        if (currentIndex < animatedPath.length) {
            polyline.setPath(animatedPath.slice(0, currentIndex + 1));
            currentIndex++;
        } else {
            clearInterval(animationFrame);
            polyline.setPath(animatedPath); // 设置最终路径
        }
    }, animationInterval);
}

function arr2point(arr: number[]): Point {
    return { x: arr[0], y: arr[1] }
}

function point2arr(point: Point): number[] {
    return [point.x, point.y]
}

// 计算AB两点构成的圆弧(短弧)是否为顺时针方向
function isShortArcClockwise(pointA: Point, pointB: Point) {
    // 计算向量 AB
    const vectorAB = {
        x: pointB.x - pointA.x,
        y: pointB.y - pointA.y
    };

    // 计算 AB 的中点 M
    const midPointM = {
        x: (pointA.x + pointB.x) / 2,
        y: (pointA.y + pointB.y) / 2
    };

    // 垂直于 AB 的单位向量
    const perpendicularVector = {
        x: -vectorAB.y,
        y: vectorAB.x
    };
    const length = Math.sqrt(perpendicularVector.x * perpendicularVector.x + perpendicularVector.y * perpendicularVector.y);
    const unitPerpendicularVector = {
        x: perpendicularVector.x / length,
        y: perpendicularVector.y / length
    };

    // 微小偏移量
    const offset = 0.001;

    // 得到两个候选点 P1 和 P2
    const candidatePoint1 = {
        x: midPointM.x + offset * unitPerpendicularVector.x,
        y: midPointM.y + offset * unitPerpendicularVector.y
    };
    const candidatePoint2 = {
        x: midPointM.x - offset * unitPerpendicularVector.x,
        y: midPointM.y - offset * unitPerpendicularVector.y
    };

    // 计算点 A、B 到候选点的距离
    const distA1 = Math.sqrt(Math.pow(pointA.x - candidatePoint1.x, 2) + Math.pow(pointA.y - candidatePoint1.y, 2));
    const distB1 = Math.sqrt(Math.pow(pointB.x - candidatePoint1.x, 2) + Math.pow(pointB.y - candidatePoint1.y, 2));
    const distA2 = Math.sqrt(Math.pow(pointA.x - candidatePoint2.x, 2) + Math.pow(pointA.y - candidatePoint2.y, 2));
    const distB2 = Math.sqrt(Math.pow(pointB.x - candidatePoint2.x, 2) + Math.pow(pointB.y - candidatePoint2.y, 2));

    // 选择更合适的候选点作为圆心
    let center;
    if (Math.abs(distA1 - distB1) < Math.abs(distA2 - distB2)) {
        center = candidatePoint1;
    } else {
        center = candidatePoint2;
    }

    // 计算从圆心到点 A 和点 B 的向量
    const vectorOA = {
        x: pointA.x - center.x,
        y: pointA.y - center.y
    };
    const vectorOB = {
        x: pointB.x - center.x,
        y: pointB.y - center.y
    };

    // 计算向量叉积
    const crossProduct = vectorOA.x * vectorOB.y - vectorOA.y * vectorOB.x;

    // 根据叉积的正负判断方向
    return crossProduct < 0;
}

function calculateCenterPoint(pointA: Point, pointB: Point) {
    const isClockwise = isShortArcClockwise(pointA, pointB);

    // 计算线段 AB 的中点 D 的坐标
    const midpointD = {
        x: (pointA.x + pointB.x) / 2,
        y: (pointA.y + pointB.y) / 2
    };

    // 计算线段 AB 的长度
    const lengthAB = Math.sqrt(Math.pow(pointB.x - pointA.x, 2) + Math.pow(pointB.y - pointA.y, 2));

    // 计算线段 CD 的长度
    const lengthCD = lengthAB / 6;

    // 计算线段 AB 的斜率
    let slopeAB;
    if (pointB.x - pointA.x === 0) {
        // 处理线段 AB 垂直于 x 轴的情况
        slopeAB = Infinity;
    } else {
        slopeAB = (pointB.y - pointA.y) / (pointB.x - pointA.x);
    }

    // 计算线段 AB 垂直平分线的斜率
    let slopePerpendicular;
    if (slopeAB === Infinity) {
        slopePerpendicular = 0;
    } else if (slopeAB === 0) {
        slopePerpendicular = Infinity;
    } else {
        slopePerpendicular = -1 / slopeAB;
    }

    // 计算垂直平分线与 x 轴正方向的夹角
    let angle;
    if (slopePerpendicular === Infinity) {
        angle = Math.PI / 2;
    } else {
        angle = Math.atan(slopePerpendicular);
    }

    // 根据圆弧方向确定点 C 的位置
    let sign = isClockwise ? -1 : 1;
    const pointC = {
        x: midpointD.x + sign * lengthCD * Math.cos(angle),
        y: midpointD.y + sign * lengthCD * Math.sin(angle)
    };

    // 设圆心 O 的坐标为 (x, y)
    // 根据圆心到点 A 和点 C 的距离相等，即 (x - xA)^2 + (y - yA)^2 = (x - xC)^2 + (y - yC)^2
    // 展开可得：x^2 - 2xA*x + xA^2 + y^2 - 2yA*y + yA^2 = x^2 - 2xC*x + xC^2 + y^2 - 2yC*y + yC^2
    // 化简得：2(xC - xA)x + 2(yC - yA)y = xC^2 - xA^2 + yC^2 - yA^2

    const A = 2 * (pointC.x - pointA.x);
    const B = 2 * (pointC.y - pointA.y);
    const C = Math.pow(pointC.x, 2) - Math.pow(pointA.x, 2) + Math.pow(pointC.y, 2) - Math.pow(pointA.y, 2);

    // 再结合垂直平分线方程 y - yD = slopePerpendicular * (x - xD)，即 y = slopePerpendicular * (x - xD) + yD
    // 代入上式求解 x
    let x, y;
    if (slopePerpendicular === Infinity) {
        x = midpointD.x;
        y = (C - A * x) / B;
    } else {
        x = (C - B * (midpointD.y - slopePerpendicular * midpointD.x)) / (A + B * slopePerpendicular);
        y = slopePerpendicular * (x - midpointD.x) + midpointD.y;
    }
    let res: Point = { x, y };
    return res;
}

// 地球半径，单位：米
const EARTH_RADIUS = 6378137;

function mercatorProjection(lon: number, lat: number) {
    // 将经纬度转换为弧度
    const lonRad = lon * (Math.PI / 180);
    const latRad = lat * (Math.PI / 180);

    // 计算 x 坐标
    const x = EARTH_RADIUS * lonRad;

    // 计算 y 坐标
    const y = EARTH_RADIUS * Math.log(Math.tan(Math.PI / 4 + latRad / 2));

    return { x, y } as Point;
}

// const pointA = { x: 0, y: 0 };
// const pointB = { x: 6, y: 0 };
// const centerPoint = calculateCenterPoint(pointA, pointB);
// console.log(`圆心 O 的坐标为: (${centerPoint.x}, ${centerPoint.y})`);

onMounted(async () => {
    // 检查 window 对象是否存在  
    if (typeof window !== 'undefined') {
        try {
            // 动态导入 AMapLoader  
            const { default: AMapLoader } = await import('@amap/amap-jsapi-loader');
            aMapLoader.value = AMapLoader;
            // 使用 aMapLoader.value 来初始化地图等  
            aMapLoader.value.load({
                key: "86d5b3834c7e9dd95ac4517948ce435c", // 申请好的Web端开发者Key，首次调用 load 时必填
                version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
                plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
            })
                .then((AMap) => {
                    map = new AMap.Map("container", {
                        zoom: 4.5,
                        center: [109.610747, 35.15261],
                        viewMode: '3D',
                        // pitch: 60,
                        // showIndoorMap: false,
                        // showLabel: false,
                        // mapStyle: 'amap://styles/whitesmoke',
                        // mapStyle: 'amap://styles/dark',
                        mapStyle: 'amap://styles/fresh',
                    });


                    // generateCurvePath();
                    // // 创建航线飞线
                    // polyline = new AMap.Polyline({
                    //     path: path,
                    //     strokeColor: "#FF33FF",    //线颜色
                    //     strokeOpacity: 1,          //线透明度
                    //     strokeWeight: 3,           //线宽
                    //     strokeStyle: "solid",      //线样式
                    //     strokeDasharray: [10, 5],  //虚线样式
                    //     lineJoin: 'round',         //折线拐点连接处样式
                    //     isOutline: false           //是否描边
                    // });

                    // map.add(polyline);

                    // // 航线动画
                    // // animatePolyline(polyline, path, 1000);
                    // startAnimation();

                    myEdge.forEach(path => {
                        // 使用AMap.Polyline绘制航线
                        new AMap.Polyline({
                            path: path.coords, // 设置航线起点和终点
                            strokeColor: "#FF33FF", // 航线颜色
                            strokeOpacity: 1,
                            strokeWeight: 2,
                            strokeStyle: "solid",
                            map: map, // 将航线添加到地图上
                            lineCap: 'round', // 线端点样式
                            lineJoin: 'round', // 线拐点样式
                        });

                        // let depCoord = path.coords[0];
                        // let arrCoord = path.coords[1];
                        // let center = calculateCenterPoint(
                        //     mercatorProjection(depCoord[0], depCoord[1]),
                        //     mercatorProjection(arrCoord[0], arrCoord[1]),
                        // );
                        // let centerCoord = point2arr(center);
                        // console.log(centerCoord);

                        // var bezierCurve = new AMap.BezierCurve({
                        //     path: [depCoord, centerCoord, arrCoord],
                        //     isOutline: true,
                        //     outlineColor: '#ffeeff',
                        //     borderWeight: 3,
                        //     strokeColor: "#3366FF",
                        //     strokeOpacity: 1,
                        //     strokeWeight: 6,
                        //     // 线样式还支持 'dashed'
                        //     strokeStyle: "solid",
                        //     // strokeStyle是dashed时有效
                        //     strokeDasharray: [10, 10],
                        //     lineJoin: 'round',
                        //     lineCap: 'round',
                        //     zIndex: 50,
                        // })

                        // map.add(bezierCurve);
                    });


                })
                .catch((e) => {
                    console.log(e);
                });
        } catch (error) {
            console.error('Failed to load AMapLoader:', error);
        }
    } else {
        console.log('Window object is not available, skipping AMapLoader import.');
    }

});

onUnmounted(() => {
    map?.destroy();
});


</script>

<style scoped>
#mapContainer {
    width: 100%;
    height: 500px;
}
</style>
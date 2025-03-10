<template>
    <h2>旅行航线图</h2>
    <div id="container" style="width: 100%; height: 500px;"></div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { mapAirportsByAbbrZH } from '../../data/trip/airports';
import { FLIGHT_DATA } from '../../data/trip/flight';
import { Airport, Point } from "../../type";


interface Edge {
    depAirport: Airport,
    arrAirport: Airport,
    date: Date,
    distance: number,
}

interface infoMark {
    name: string,
    airport: string,
    coord: number[],
}

let arrInfo: infoMark[] = []
let yearFlight: Map<number, number> = new Map();
let newData = FLIGHT_DATA.slice(0)
// newData = newData.filter(item => item.departure.airport === '杭州萧山' && item.arrival.airport === '桂林两江')
const myEdge: Edge[] = newData.reduce((res: Edge[], item) => {

    if (!item.departure || !item.arrival) { return res; }

    const itemDepAirport = item.departure.airport;
    const itemArrAirport = item.arrival.airport;

    const depAirport = mapAirportsByAbbrZH[itemDepAirport];
    const arrAirport = mapAirportsByAbbrZH[itemArrAirport];

    if (!depAirport || !arrAirport) { return res; }

    // const year = item.date.getFullYear();
    // yearFlight.set(year, (yearFlight.get(year) || 0) + 1)

    res.push({
        depAirport: depAirport,
        arrAirport: arrAirport,
        date: item.date,
        distance: item.distance,
    })

    // arrInfo.push({
    //     name: arrAirport.city,
    //     airport: itemArrAirport,
    //     coord: arrCoord
    // })
    // arrInfo.push({
    //     name: depAirport.city,
    //     airport: itemDepAirport,
    //     coord: depCoord
    // })

    return res
}, [] as Edge[])

console.log('myEdge', myEdge);
console.log('myEdge len', myEdge.length);
// console.log(arrInfo)
// console.log(yearFlight)

// // console.log(arrInfo)
// let newArrInfo: any[] = []
// arrInfo.forEach((v, i) => {
//     let obj = {
//         name: v.name,
//         value: v.coord
//     }
//     newArrInfo.push(obj)
// })

function calAirportCount() {
    let countAirport = new Map();
    FLIGHT_DATA.forEach(item => {
        const itemDepAirport = item.departure.airport;
        const itemArrAirport = item.arrival.airport;
        countAirport.set(itemDepAirport, (countAirport.get(itemDepAirport) || 0) + 1);
        countAirport.set(itemArrAirport, (countAirport.get(itemArrAirport) || 0) + 1);
    })
    return countAirport;
}
const countAirport = calAirportCount();

interface AirportDA {
    depAirport: string,
    arrAirport: string,
}

function calFlightCount(): Map<string, number> {
    const routeCountMap = new Map<string, number>();
    FLIGHT_DATA.forEach(item => {
        const routeKey: AirportDA = {
            depAirport: item.departure.airport,
            arrAirport: item.arrival.airport,
        }
        const routeKey2: AirportDA = {
            depAirport: item.arrival.airport,
            arrAirport: item.departure.airport,
        }
        const stringifyKey = JSON.stringify(routeKey);
        const stringifyKey2 = JSON.stringify(routeKey2);

        if (routeCountMap.has(stringifyKey)) {
            routeCountMap.set(stringifyKey, (routeCountMap.get(stringifyKey) || 0) + 1);
        } else if (routeCountMap.has(stringifyKey2)) {
            routeCountMap.set(stringifyKey2, (routeCountMap.get(stringifyKey2) || 0) + 1);
        } else {
            routeCountMap.set(stringifyKey, 1);
        }
    })
    return routeCountMap;
}
let mapCountFlight = calFlightCount();
// console.log(mapCountFlight);


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

// 计算二维平面上两点间的距离
function calculateDistance(pointA: Point, pointB: Point): number {
    const dx = pointB.x - pointA.x;
    const dy = pointB.y - pointA.y;
    return Math.sqrt(dx * dx + dy * dy);
}

// 判断从点A到点B是顺时针还是逆时针方向
function isClockwise(A: Point, B: Point): boolean {
    const crossProduct = A.x * B.y - A.y * B.x;
    return crossProduct < 0;
}

// 计算两点间的中点
function getMidpoint(A: Point, B: Point): Point {
    return {
        x: (A.x + B.x) / 2,
        y: (A.y + B.y) / 2
    };
}

// 计算线段 AB 的垂直平分线上距离 AB 线段 offset 长度的两个点
function getPerpendicularPoints(A: Point, B: Point, offset: number): Point {
    console.log('getPerpendicularPoints', A, B, offset);
    // 先计算中点
    const midpoint = getMidpoint(A, B);

    // 计算线段 AB 的斜率
    const dx = B.x - A.x;
    const dy = B.y - A.y;
    const slopeAB = dy / dx;

    // 计算垂直平分线的斜率
    let slopePerpendicular: number;
    if (slopeAB === 0) {
        // 当 AB 线段水平时，垂直平分线垂直于 x 轴
        slopePerpendicular = Infinity;
    } else if (!isFinite(slopeAB)) {
        // 当 AB 线段垂直时，垂直平分线平行于 x 轴
        slopePerpendicular = 0;
    } else {
        slopePerpendicular = -1 / slopeAB;
    }

    // 计算垂直平分线上距离 AB 线段 offset 长度的两个点
    let point1: Point;
    let point2: Point;
    if (slopePerpendicular === Infinity) {
        // 垂直平分线垂直于 x 轴
        point1 = { x: midpoint.x, y: midpoint.y + offset };
        // point2 = { x: midpoint.x, y: midpoint.y - offset };
    } else if (slopePerpendicular === 0) {
        // 垂直平分线平行于 x 轴
        point1 = { x: midpoint.x + offset, y: midpoint.y };
        // point2 = { x: midpoint.x - offset, y: midpoint.y };
    } else {
        // 一般情况
        const angle = Math.atan(slopePerpendicular);
        point1 = {
            x: midpoint.x + offset * Math.cos(angle),
            y: midpoint.y + offset * Math.sin(angle)
        };
        // point2 = {
        //     x: midpoint.x - offset * Math.cos(angle),
        //     y: midpoint.y - offset * Math.sin(angle)
        // };
    }

    return point1;
}

const OFFSET = 1
// 每次遍历 map -1，仅在循环中调用此函数
function calControlPoint(edge: Edge) {
    let pointA = {
        x: edge.depAirport.longitude,
        y: edge.depAirport.latitude,
    }
    let pointB = {
        x: edge.arrAirport.longitude,
        y: edge.arrAirport.latitude,
    }

    const flight1: AirportDA = { depAirport: edge.depAirport.abbrZH, arrAirport: edge.arrAirport.abbrZH };
    const flight2: AirportDA = { depAirport: edge.arrAirport.abbrZH, arrAirport: edge.depAirport.abbrZH };

    const flight1stringify = JSON.stringify(flight1);
    const flight2stringify = JSON.stringify(flight2);

    // 每次遍历 -1
    const count1 = mapCountFlight.get(flight1stringify);
    const count2 = mapCountFlight.get(flight2stringify);
    if (count1) {
        mapCountFlight.set(flight1stringify, count1 - 1);
    }
    if (count2) {
        mapCountFlight.set(flight2stringify, count2 - 1);
    }

    let multi = OFFSET;
    const count = count1 || count2;
    if (count === undefined) {
        multi = OFFSET;
    } else {
        // 偶数为负
        multi = (count % 2) ? count / 2 * OFFSET : - count / 2 * OFFSET;
    }

    let ret = getPerpendicularPoints(pointA, pointB, edge.distance / 500 * multi);
    console.log(ret)

    let res = point2arr(ret)

    return res;
}

function calCircleMarkerRadius(count: number) {
    let ret = 0;
    if (count < 5) {
        ret = 3;
    } else if (count < 10) {
        ret = 5;
    } else if (count < 20) {
        ret = 8;
    } else if (count < 50) {
        ret = 10;
    } else {
        ret = 12;
    }
    return ret;
}

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

                        // // 使用AMap.Polyline绘制航线
                        // new AMap.Polyline({
                        //     path: path.coords, // 设置航线起点和终点
                        //     strokeColor: "#FF33FF", // 航线颜色
                        //     strokeOpacity: 1,
                        //     strokeWeight: 2,
                        //     strokeStyle: "solid",
                        //     map: map, // 将航线添加到地图上
                        //     lineCap: 'round', // 线端点样式
                        //     lineJoin: 'round', // 线拐点样式
                        // });

                        let depCoord = [path.depAirport.longitude, path.depAirport.latitude];
                        let arrCoord = [path.arrAirport.longitude, path.arrAirport.latitude];
                        let controlPoint = calControlPoint(path);

                        let bezierCurve = new AMap.BezierCurve({
                            path: [
                                depCoord,
                                controlPoint.concat(arrCoord)
                            ],
                            // isOutline: true,
                            // outlineColor: '#ffeeff',
                            borderWeight: 1,
                            strokeColor: "#f08080",
                            // showDir: true,
                            lineCap: 'round',
                            zIndex: 50,
                        })

                        map.add(bezierCurve);

                        // //引入贝塞尔曲线编辑器插件
                        // map.plugin(["AMap.BezierCurveEditor"], function () {
                        //     //实例化贝塞尔曲线编辑器，传入地图实例和要进行编辑的贝塞尔曲线实例
                        //     let bezierCurveEditor = new AMap.BezierCurveEditor(map, bezierCurve);
                        //     //开启编辑模式
                        //     bezierCurveEditor.open();
                        //     //绑定 adjust 事件，调整曲线上某个点时触发此事件
                        //     bezierCurveEditor.on("adjust", function (event) {
                        //         console.log("触发事件：adjust");
                        //     });
                        // });

                    });

                    // 圆点标记
                    countAirport.forEach((count, airport) => {
                        const airportObj = mapAirportsByAbbrZH[airport];
                        //创建圆形点标记 CircleMarker 实例
                        var circleMarker = new AMap.CircleMarker({
                            center: [airportObj.longitude, airportObj.latitude], //圆心
                            radius: calCircleMarkerRadius(count), //半径
                            // strokeColor: "white", //轮廓线颜色
                            // strokeWeight: 2, //轮廓线宽度
                            strokeOpacity: 0, //轮廓线透明度
                            fillColor: "#f08080", //圆点填充颜色
                            fillOpacity: 1, //圆点填充透明度
                            zIndex: 70, //圆点覆盖物的叠加顺序
                            // cursor: "pointer", //鼠标悬停时的鼠标样式
                        });

                        map.add(circleMarker);
                        // //将覆盖物调整到合适视野
                        // map.setFitView([circleMarker]);
                    })
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
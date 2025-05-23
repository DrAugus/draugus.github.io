<template>
    <DrawAMap title="驾车路线绘制" :func="tr" :height=600 />
</template>

<script setup lang="ts">
import { DRIVE_INFO } from '../../data/trip/drive';
import type { GeoCoordinates } from '../../type';
import DrawAMap from './DrawAMap.vue';

// HSL 转 RGB 辅助函数
function hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number } {
    s /= 100;
    l /= 100;

    let c = (1 - Math.abs(2 * l - 1)) * s;
    let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    let m = l - c / 2;
    let r = 0, g = 0, b = 0;

    if (0 <= h && h < 60) {
        [r, g, b] = [c, x, 0];
    } else if (60 <= h && h < 120) {
        [r, g, b] = [x, c, 0];
    } else if (120 <= h && h < 180) {
        [r, g, b] = [0, c, x];
    } else if (180 <= h && h < 240) {
        [r, g, b] = [0, x, c];
    } else if (240 <= h && h < 300) {
        [r, g, b] = [x, 0, c];
    } else if (300 <= h && h < 360) {
        [r, g, b] = [c, 0, x];
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return { r, g, b };
}

// RGB 转 HEX 辅助函数
function rgbToHex(r: number, g: number, b: number): string {
    return `#${[r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('')}`;
}

// 根据索引生成 HEX 颜色
function getHexColorByIndex(index: number, total: number): string {
    const hue = (index * (360 / total)) % 360;
    const saturation = 80;
    const lightness = 60;

    const { r, g, b } = hslToRgb(hue, saturation, lightness);
    return rgbToHex(r, g, b);
}

const tr = async (AMap, map) => {
    let drivingOption = {
        policy: AMap.DrivingPolicy.LEAST_TIME, // 其它policy参数请参考 https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingPolicy
        ferry: 1, // 是否可以使用轮渡
        province: '京', // 车牌省份的汉字缩写  
    }

    // 构造路线导航类
    let driving = new AMap.Driving(drivingOption);

    const coord2aMapLngLat = (coord: GeoCoordinates) => new AMap.LngLat(coord.longitude, coord.latitude);

    const drawDrive = (coordDep: GeoCoordinates, coordArr: GeoCoordinates, color: string, coordWaypoint?: GeoCoordinates[]) => {
        if (coordWaypoint) {
            driving.search(coord2aMapLngLat(coordDep), coord2aMapLngLat(coordArr), {
                waypoints: coordWaypoint.map(coord => coord2aMapLngLat(coord))
            }, function (status, result) {
                // result即是对应的驾车导航信息，相关数据结构文档请参考 https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
                if (status === 'complete') {
                    if (result.routes && result.routes.length) {
                        // 绘制第一条路线，也可以按需求绘制其它几条路线
                        drawRoute(result.routes[0], color, result.waypoints)
                        // console.log('绘制驾车路线完成')
                    }
                } else {
                    console.error('获取驾车数据失败：' + result)
                }
            });
        } else {
            // 根据起终点经纬度规划驾车导航路线
            driving.search(coord2aMapLngLat(coordDep), coord2aMapLngLat(coordArr), function (status, result) {
                // result即是对应的驾车导航信息，相关数据结构文档请参考 https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
                if (status === 'complete') {
                    if (result.routes && result.routes.length) {
                        // 绘制第一条路线，也可以按需求绘制其它几条路线
                        drawRoute(result.routes[0], color)
                        // console.log('绘制驾车路线完成')
                    }
                } else {
                    console.error('获取驾车数据失败：' + result)
                }
            });
        }
    }

    DRIVE_INFO.forEach((di, index) => {
        const coordDep = di.departure.coordinates;
        const coordArr = di.arrival.coordinates;
        const waypoint = di.waypoint;

        const color = getHexColorByIndex(index, DRIVE_INFO.length);

        if (waypoint) {
            let coordWaypoint: GeoCoordinates[] = []
            if (Array.isArray(waypoint)) {
                coordWaypoint = waypoint.map(w => w.coordinates);
            } else {
                coordWaypoint = [waypoint.coordinates];
            }
            drawDrive(coordDep, coordArr, color, coordWaypoint);
        } else {
            drawDrive(coordDep, coordArr, color);
        }
    })

    function drawRoute(route, color: string, waypoints?: any[]) {
        let path = parseRouteToPath(route);

        let startMarker = new AMap.Marker({
            position: path[0],
            icon: 'https://webapi.amap.com/theme/v1.3/markers/n/start.png',
            // 高德地图Marker缩放位置变化
            // https://www.cnblogs.com/hanshuai/p/14927181.html
            offset: new AMap.Pixel(-10, -31),
            map: map
        })

        let endMarker = new AMap.Marker({
            position: path[path.length - 1],
            icon: 'https://webapi.amap.com/theme/v1.3/markers/n/end.png',
            offset: new AMap.Pixel(-10, -31),
            map: map
        })

        waypoints?.forEach(item => {
            let midMarker = new AMap.Marker({
                position: item.location,
                icon: 'https://webapi.amap.com/theme/v1.3/markers/n/mid.png',
                offset: new AMap.Pixel(-10, -31),
                map: map
            })
        })

        let routeLine = new AMap.Polyline({
            path: path,
            isOutline: true,
            outlineColor: '#ffeeee',
            borderWeight: 2,
            strokeWeight: 5,
            strokeOpacity: 0.9,
            strokeColor: color,
            lineJoin: 'round'
        })

        map.add(routeLine);

        // 调整视野达到最佳显示区域
        // map.setFitView([startMarker, endMarker, routeLine])
    }

    // 解析DrivingRoute对象，构造成AMap.Polyline的path参数需要的格式
    // DrivingResult对象结构参考文档 https://lbs.amap.com/api/javascript-api/reference/route-search#m_DriveRoute
    function parseRouteToPath(route) {
        let path: any[] = []

        for (let i = 0, l = route.steps.length; i < l; i++) {
            let step = route.steps[i]

            for (let j = 0, n = step.path.length; j < n; j++) {
                path.push(step.path[j])
            }
        }

        return path
    }
}

</script>

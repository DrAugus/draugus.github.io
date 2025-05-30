<template>
    <DrawAMap title="驾车路线绘制" :func="tr" :height=600 />
</template>

<script setup lang="ts">
import { DRIVE_INFO } from '../../data/trip/drive';
import type { GeoCoordinates } from '../../type';
import { hslToRgb, rgbToHex } from '../../utils';
import DrawAMap from './DrawAMap.vue';

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

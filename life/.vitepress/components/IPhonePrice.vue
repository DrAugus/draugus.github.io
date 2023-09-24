<template>
    <EChartsModel :option="option" />

    <table>
        <tr>
            <th></th>
            <th class="table-text-center" v-for="(item, index) in capacityName" :key="index">{{ item }}</th>
        </tr>

        <tr v-for="(item, index) in iphoneModel" :key="index">
            <td> {{ 'iPhone ' + item }} </td>
            <td class="table-text-center" v-for="(vv, ii) in capacity" :key="ii">
                {{ iphonePrice[index][vv] ? '￥' + iphonePrice[index][vv] : '-' }}
            </td>
        </tr>
    </table>
</template>
  
<script>
import EChartsModel from "./EChartsModel.vue"

import iphoneObj from '../data/iphone.json'

// console.log(iphoneObj)

const iphoneCapacity = iphoneObj.capacity
const year = iphoneObj.year

let iphoneModel = [];
let iphonePrice = []


let keys = Object.keys(year);

keys.forEach(key => {
    let subKeys = Object.keys(year[key]);
    subKeys.forEach(subKey => {
        iphoneModel.push(year[key][subKey].name);
        iphonePrice.push(year[key][subKey].price)
    });
});

// console.log("iphoneModel", iphoneModel);
// console.log("iphonePrice", iphonePrice);


const iphonePriceByModel = {};
for (let cap of iphoneCapacity) {
    if (!iphonePriceByModel[cap]) {
        iphonePriceByModel[cap] = []
    }
    for (let objPrice of iphonePrice) {
        iphonePriceByModel[cap].push(!objPrice[cap] ? 0 : objPrice[cap])
    }
}

// console.log("iphonePriceByModel", iphonePriceByModel);


const getCapacityName = (num) => {
    const powers = ['GB', 'TB', 'PB'];
    const exponent = Math.log2(num) + 1;
    let unitIndex = Math.floor(exponent / 10);


    let result = 2 ** num
    if (result === 1024) {
        result = 1;
        unitIndex++;
    }
    const unit = powers[unitIndex];
    return `${result}${unit}`;
}

const convertedCapacityName = iphoneCapacity.map(number => getCapacityName(number));

// console.log("convertedCapacityName", convertedCapacityName);


var app = {};

var option;

const posList = [
    'left',
    'right',
    'top',
    'bottom',
    'inside',
    'insideTop',
    'insideLeft',
    'insideRight',
    'insideBottom',
    'insideTopLeft',
    'insideTopRight',
    'insideBottomLeft',
    'insideBottomRight'
];
app.configParameters = {
    rotate: {
        min: -90,
        max: 90
    },
    align: {
        options: {
            left: 'left',
            center: 'center',
            right: 'right'
        }
    },
    verticalAlign: {
        options: {
            top: 'top',
            middle: 'middle',
            bottom: 'bottom'
        }
    },
    position: {
        options: posList.reduce(function (map, pos) {
            map[pos] = pos;
            return map;
        }, {})
    },
    distance: {
        min: 0,
        max: 100
    }
};
app.config = {
    rotate: 0,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 15,
    onChange: function () {
        const labelOption = {
            rotate: app.config.rotate,
            align: app.config.align,
            verticalAlign: app.config.verticalAlign,
            position: app.config.position,
            distance: app.config.distance
        };
        // myChart.setOption({
        //   series: [
        //     {
        //       label: labelOption
        //     },
        //     {
        //       label: labelOption
        //     },
        //     {
        //       label: labelOption
        //     },
        //     {
        //       label: labelOption
        //     }
        //   ]
        // });
    }
};
const labelOption = {
    show: true,
    position: app.config.position,
    distance: app.config.distance,
    align: app.config.align,
    verticalAlign: app.config.verticalAlign,
    rotate: app.config.rotate,
    formatter: '{c}  {name|{a}}',
    fontSize: 16,
    rich: {
        name: {}
    }
};

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['Forest', 'Steppe', 'Desert', 'Wetland']
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar', 'stack'] },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    yAxis: [
        {
            type: 'category',
            axisTick: { show: false },
            data: iphoneModel
        }
    ],
    xAxis: [
        {
            type: 'value'
        }
    ],

    series: [
        {
            name: convertedCapacityName[0],
            type: 'bar',
            barGap: 0,
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: iphonePriceByModel[iphoneCapacity[0]]
        },
        {
            name: convertedCapacityName[1],
            type: 'bar',
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: iphonePriceByModel[iphoneCapacity[1]]
        },
        {
            name: convertedCapacityName[2],
            type: 'bar',
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: iphonePriceByModel[iphoneCapacity[2]]
        },
        {
            name: convertedCapacityName[3],
            type: 'bar',
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: iphonePriceByModel[iphoneCapacity[3]]
        },
        {
            name: convertedCapacityName[4],
            type: 'bar',
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: iphonePriceByModel[iphoneCapacity[4]]
        },
    ]
};


export default {
    name: "Airfare",
    components: {
        EChartsModel,
    },
    data() {
        return {
            option: option,
            capacity: iphoneCapacity,
            capacityName: convertedCapacityName,
            iphoneModel: iphoneModel,
            iphonePrice: iphonePrice,
        };
    },
};
</script>

<style scoped>
.table-text-center {
    text-align: center;
}
</style>
  

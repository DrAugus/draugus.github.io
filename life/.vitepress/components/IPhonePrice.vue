<template>
    <div>
        <span>
            {{ " " }}
            <button class="custom-button all-button" @click="filterModel(-1)">
                全部型号
            </button>
        </span>
        <span v-for="(v, i) in iphoneModelName">
            {{ " " }}
            <button class="custom-button" @click="filterModel(i)">
                {{ v }}
            </button>
        </span>
    </div>

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

    <EChartsModel :option="option" />
</template>
  
<script>
import EChartsModel from "./EChartsModel.vue"

import iphoneObj from '../data/iphone.json'



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


const iphonePriceByModel = {};
for (let cap of iphoneCapacity) {
    if (!iphonePriceByModel[cap]) {
        iphonePriceByModel[cap] = []
    }
    for (let objPrice of iphonePrice) {
        iphonePriceByModel[cap].push(!objPrice[cap] ? 0 : objPrice[cap])
    }
}


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
        data: convertedCapacityName
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

// console.log(iphoneObj)

// console.log("iphoneModel", iphoneModel);
// console.log("iphonePrice", iphonePrice);
// console.log("iphoneCapacity", iphoneCapacity);

// console.log("iphonePriceByModel", iphonePriceByModel);
// console.log("convertedCapacityName", convertedCapacityName);



// const numberValues = iphoneModel.filter(item => !isNaN(Number(item)));
// console.log(numberValues);
// const numberIndices = iphoneModel.map((item, index) => {
//     if (!isNaN(Number(item))) {
//         return index;
//     }
// }).filter(index => index !== undefined);
// console.log(numberIndices);

const miniModels = [];
const numModels = [];
const plusModels = [];
const proModels = [];
const proMaxModels = [];


for (let i = 0; i < iphoneModel.length; i++) {
    if (iphoneModel[i].includes("mini")) {
        miniModels.push({ value: iphoneModel[i], index: i });
    }
    if (!isNaN(iphoneModel[i])) {
        numModels.push({ value: iphoneModel[i], index: i });
    }
    if (iphoneModel[i].includes("Plus")) {
        plusModels.push({ value: iphoneModel[i], index: i });
    }
    if (iphoneModel[i].includes("Pro") && !iphoneModel[i].includes("Pro Max")) {
        proModels.push({ value: iphoneModel[i], index: i });
    }
    if (iphoneModel[i].includes("Pro Max")) {
        proMaxModels.push({ value: iphoneModel[i], index: i });
    }
}

const indices = (obj) => obj.map(item => item.index);
const extractedValues = (sourceArr, indexArr) => indexArr.map(index => sourceArr[index]);

// console.log("Models with 'mini':", miniModels);
// console.log("Models only number:", numModels);
// console.log("Models with 'Plus':", plusModels);
// console.log("Models with 'Pro':", proModels);
// console.log("Models with 'Pro Max':", proMaxModels);


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
            iphoneModelName: ['mini', '数字版', 'Plus', 'Pro', 'Pro Max'],
        };
    },
    methods: {
        // 0 mini 1 number 2 plus 3 pro 4 pm
        filterModel(model) {
            if (model === -1) {
                this.iphoneModel = iphoneModel
                this.iphonePrice = iphonePrice
                return
            }

            const models = [miniModels, numModels, plusModels, proModels, proMaxModels]
            const indexModels = models.map(obj => indices(obj));

            // console.log("indexModels", indexModels)
            // console.log("extracted iphoneModel", extractedValues(iphoneModel, indexModels[model]))
            // console.log("extracted iphonePrice", extractedValues(iphonePrice, indexModels[model]))


            this.iphoneModel = extractedValues(iphoneModel, indexModels[model])
            this.iphonePrice = extractedValues(iphonePrice, indexModels[model])

            const result = {};
            for (const key in iphonePriceByModel) {
                result[key] = indexModels[model].map(index => iphonePriceByModel[key][index]);
            }

            for (let i in 4) {
                option.series[i].data = result[iphoneCapacity[i]]
            }
            this.option = option

        },
    },
};
</script>

<style scoped>
.table-text-center {
    text-align: center;
}

.custom-button {
    background-color: #ff6633;
    color: white;
    border: none;
    padding: 5px 10px;
    font-size: 16px;
    border-radius: 20px;
    cursor: pointer;
}

.custom-button:hover {
    background-color: #ff9966;
}

.all-button {
    background-color: #3374ff;
}

.all-button:hover {
    background-color: #33d6ff;
}
</style>
  

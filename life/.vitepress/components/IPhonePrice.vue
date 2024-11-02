<template>


    <TitleFormat :title="'价格'" :number="2"></TitleFormat>

    <div>
        <span>
            {{ " " }}
            <button class="custom-button all-button" @click="filterModel('')">
                全部型号
            </button>
        </span>
        <span v-for="(v, i) in iPhoneModelName">
            {{ " " }}
            <button class="custom-button" @click="filterModel(v)">
                {{ v }}
            </button>
        </span>
    </div>

    <table>
        <tbody>
            <tr>
                <th>iPhone 型号</th>
                <!-- <th>发售日</th> -->
                <th class="table-text-center" v-for="(item, index) in capacityName" :key="index">{{ item }}</th>
            </tr>
        </tbody>

        <tr v-for="(item, index) in iPhoneModelRef" :key="index"
            :style="{ backgroundColor: getModelBgColor('iPhone ' + item) }">
            <td class="no-wrap"> {{ item }}
                <span class="VPBadge warning">{{ getModelYear('iPhone ' + item) }}</span>
            </td>
            <!-- <td class="no-wrap"> {{ getModelDate('iPhone ' + item) }}</td> -->
            <td class="table-text-center no-wrap" v-for="(vv, ii) in capacity" :key="ii">
                {{ iPhonePriceRef[index][vv] ? '￥' + iPhonePriceRef[index][vv] : '-' }}
            </td>
        </tr>
    </table>


    <details class="details custom-block">
        <summary>图表</summary>
        <EChartsModel :option="option" />
    </details>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import EChartsModel from "./EChartsModel.vue";
import TitleFormat from './TitleFormat.vue';
import { IPHONE_MODELS } from '../data/iPhoneModels';

import iPhoneObj from '../data/iPhone.json';
import { ColorScheme, extractNumbers, getColorScheme, isStringNumeric, modifyDate } from "../utils";

const iPhoneCapacity = iPhoneObj.capacity;
const year = iPhoneObj.year;

let iPhoneModel: string[] = [];
let iPhonePrice: number[] = [];


let keys = Object.keys(year);

keys.forEach(key => {
    let subKeys = Object.keys(year[key]);
    subKeys.forEach(subKey => {
        iPhoneModel.push(year[key][subKey].name);
        iPhonePrice.push(year[key][subKey].price);
    });
});


const iPhonePriceByModel = {};
for (let cap of iPhoneCapacity) {
    if (!iPhonePriceByModel[cap]) {
        iPhonePriceByModel[cap] = [];
    }
    for (let objPrice of iPhonePrice) {
        iPhonePriceByModel[cap].push(!objPrice[cap] ? 0 : objPrice[cap]);
    }
}


const getCapacityName = (num: number) => {
    const powers = ['GB', 'TB', 'PB'];
    const exponent = Math.log2(num) + 1;
    let unitIndex = Math.floor(exponent / 10);


    let result = 2 ** num;
    if (result === 1024) {
        result = 1;
        unitIndex++;
    }
    const unit = powers[unitIndex];
    return `${result}${unit}`;
};

function convertCapacityName(capacity: number[]) {
    return capacity.map(number => getCapacityName(number));
}

const convertedCapacityName = convertCapacityName(iPhoneCapacity);

var app: any = {};

var option: any;

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

const setSeries = (obj: any) => {
    let series: any[] = [];
    for (let i = 0; i < iPhoneCapacity.length; ++i) {
        let tmp = {
            name: convertedCapacityName[i],
            type: 'bar',
            // barGap: 0,   
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: obj[iPhoneCapacity[i]]
        };
        series.push(tmp);
    }
    return series;
}

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
            data: iPhoneModel
        }
    ],
    xAxis: [
        {
            type: 'value'
        }
    ],

    series: setSeries(iPhonePriceByModel)
};

// console.log(iPhoneObj)

// console.log("iPhoneModel", iPhoneModel);
// console.log("iPhonePrice", iPhonePrice);
// console.log("iPhoneCapacity", iPhoneCapacity);

// console.log("iPhonePriceByModel", iPhonePriceByModel);
// console.log("convertedCapacityName", convertedCapacityName);



// const numberValues = iPhoneModel.filter(item => !isNaN(Number(item)));
// console.log(numberValues);
// const numberIndices = iPhoneModel.map((item, index) => {
//     if (!isNaN(Number(item))) {
//         return index;
//     }
// }).filter(index => index !== undefined);
// console.log(numberIndices);

type ModelInfo = {
    value: string,
    index: number,
};

// key num value {model, index}
let allModels: Map<string, ModelInfo[]> = new Map();

let iPhoneModelName = ['Mini', '数字版', 'Plus', 'Pro', 'Pro Max'];
iPhoneModel.forEach(value => {
    let numbers = value.match(/\d+/g);
    if (numbers) {
        const key = numbers[0];
        if (iPhoneModelName.indexOf(key) == -1) {
            iPhoneModelName.push(key);
        }
    }
});


function pushToModel(name: string, value: string, i: number) {
    let curValue = allModels.get(name);
    if (!curValue) {
        curValue = [];
    }
    curValue.push({ value, index: i });
    allModels.set(name, curValue);
}


for (let i = 0; i < iPhoneModel.length; i++) {
    const value = iPhoneModel[i];
    iPhoneModelName.forEach(name => {

        if (name === '数字版') {
            if (isStringNumeric(value)) {
                pushToModel(name, value, i);
            }
        } else if (name === 'Pro') {
            if (value.includes(name) && !value.includes("Pro Max")) {
                pushToModel(name, value, i);
            }
        } else {
            if (value.includes(name)) {
                pushToModel(name, value, i);
            }
        }

    });
}

const indices = (obj) => obj.map(item => item.index);
function extractedValues<T>(sourceArr: T[], indexArr: number[]) {
    return indexArr.map(index => sourceArr[index]);
}

// console.log("Models:", allModels);


let capacity = ref(iPhoneCapacity);
let capacityName = ref(convertedCapacityName);
// console.log("capacityName:", capacityName);

let iPhoneModelRef = ref(iPhoneModel);
let iPhonePriceRef = ref(iPhonePrice);

function hasCapacity(arr) {
    const uniqueKeys: number[] = [];
    const keysSet = new Set<number>();

    arr.forEach(obj => {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                keysSet.add(key);
            }
        }
    });

    uniqueKeys.push(...keysSet);
    return uniqueKeys;
}

const filterModel = (model: string) => {
    if (model === '') {
        iPhoneModelRef.value = iPhoneModel;
        iPhonePriceRef.value = iPhonePrice;
        capacityName.value = convertedCapacityName;
        capacity.value = iPhoneCapacity;
        return;
    }

    const itModelsInfo = allModels.get(model)?.values();
    let indexModels: number[] = [];
    if (itModelsInfo) {
        indexModels = [...itModelsInfo].map(item => item.index);
    }
    // console.log("indexModels", indexModels);

    const filterPrice = extractedValues(iPhonePrice, indexModels);
    // console.log("filterPrice", filterPrice);
    const indexCapacity = hasCapacity(filterPrice);
    capacityName.value = convertCapacityName(indexCapacity);
    capacity.value = indexCapacity;
    iPhonePriceRef.value = filterPrice;
    iPhoneModelRef.value = extractedValues(iPhoneModel, indexModels);
    // console.log("iPhoneModelRef", iPhoneModelRef);
    // console.log("iPhonePriceRef", iPhonePriceRef);

    const result = {};
    for (const key in iPhonePriceByModel) {
        result[key] = indexModels.map(index => iPhonePriceByModel[key][index]);
    }

    // console.log(iPhonePriceByModel, result);

    option.series = setSeries(result);
    option = option;
};


const model2map = () => {
    let map: Map<string, { announced: Date, gen: number, }> = new Map();
    IPHONE_MODELS.forEach(v => {
        const model = v.model;
        const announced = v.announced;
        const gen = v.generation;
        if (typeof model === 'string') {
            map.set(model, { announced, gen, });
        } else {
            model.forEach(vv => {
                map.set(vv, { announced, gen, });
            });
        }
    });
    return map;
};
const mapModels = model2map();
// console.log(mapModels)

const getModelDate = (model: string) => {
    const value = mapModels.get(model);
    if (value === undefined) {
        return '';
    }
    return modifyDate(value.announced);
};

const getModelYear = (model: string) => {
    const value = mapModels.get(model);
    if (value === undefined) {
        return '';
    }
    return value.announced.getFullYear() + "年";
};

const getModelBgColor = (model: string): string => {
    const value = mapModels.get(model);
    if (value === undefined) {
        return '';
    }
    const gen = value.gen;
    const color = getColorScheme(ColorScheme.ElegantSky);
    const key = gen % color.length;
    return color[key];
}

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

.no-wrap {
    white-space: nowrap;
    overflow: hidden;
    /* 可选，防止内容溢出表格单元格 */
    text-overflow: ellipsis;
    /* 可选，用省略号表示被截断的内容 */
}
</style>

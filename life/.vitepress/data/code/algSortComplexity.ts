import { Complexity } from "../../type";

export const ALG_COMPLEXITY: Complexity[] = [
    {
        type: "插入排序",
        method: "直接插入",
        time: {
            best: "n^2",
            average: "n",
            worst: "n^2",
        },
        space: "1",
        stable: true,
    }, {
        type: "插入排序",
        method: "Shell 排序",
        time: {
            best: "n^1.3",
            average: "n",
            worst: "n^2",
        },
        space: "1",
        stable: false,
    }, {
        type: "选择排序",
        method: "直接选择",
        time: {
            best: "n^2",
            average: "n^2",
            worst: "n^2",
        },
        space: "1",
        stable: false,
    }, {
        type: "选择排序",
        method: "堆排序",
        time: {
            best: "nlog2n",
            average: "nlog2n",
            worst: "nlog2n",
        },
        space: "1",
        stable: false,
    }, {
        type: "交换排序",
        method: "冒泡排序",
        time: {
            best: "n^2",
            average: "n",
            worst: "n^2",
        },
        space: "1",
        stable: true,
    }, {
        type: "交换排序",
        method: "快速排序",
        time: {
            best: "nlog2n",
            average: "nlog2n",
            worst: "n^2",
        },
        space: "nlog2n",
        stable: false,
    }, {
        type: "归并排序",
        method: "归并排序",
        time: {
            best: "nlog2n",
            average: "nlog2n",
            worst: "nlog2n",
        },
        space: "n",
        stable: true,
    }, {
        type: "基数排序",
        method: "基数排序",
        time: {
            best: "d(r+n)",
            average: "d(n+rd)",
            worst: "d(r+n)",
        },
        space: "rd+n",
        stable: true,
    },
];
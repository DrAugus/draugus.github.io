import { FoodRecord } from "../../type";

const sampleRecord: FoodRecord = {
    name: "美味小馆",
    city: "北京",
    location: "朝阳区某街道123号",
    businessHours: "周一至周日 10:00 - 22:00",
    pricePerPerson: 80,
    restaurantType: "川菜",
    recommendation: true,
    // description 是可选的，所以这里可以省略
};


const foodRecords: FoodRecord[] = [
    {
        name: "长发餐饮(五环大楼店)",
        city: "上海",
        location: "长宁区延安西路955号",
        businessHours: "09:00-21:00",
        pricePerPerson: 20,
        restaurantType: "中餐",
        recommendation: true,
    }, {
        name: "多多关照",
        city: "上海",
        location: "徐汇区东湖路3号",
        businessHours: "11:00-22:00",
        pricePerPerson: 70,
        restaurantType: "日料",
        recommendation: true,
    }, {
        name: "手擀菠菜面",
        city: "上海",
        location: "普陀区西康路1370-3号",
        businessHours: "24小时营业",
        pricePerPerson: 30,
        restaurantType: "面食",
        recommendation: true,
    }, {
        name: "晓平饭店(嘉善路店)",
        city: "上海",
        location: "徐汇区嘉善路202号",
        businessHours: "11:00-14:00 17:00-21:00",
        pricePerPerson: 123,
        restaurantType: "本帮菜",
        recommendation: true,
    },
]

export const filterFoodByCity = (city: string) => foodRecords.filter((record) => record.city === city);

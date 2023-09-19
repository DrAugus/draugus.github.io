import type { EatRestaurant } from '../type'



const EatType = {
    lobster_bbq: { id: "Lobster BBQ", name: "龙虾烧烤" },
    fried_chicken_snacks: { id: "Fried Chicken Snacks", name: "炸鸡卤味" },
    fast_food_bento: { id: "Fast Food Bento", name: "快餐便当" },
    milk_tea_coffee: { id: "Milk Tea Coffee", name: "奶茶咖啡" },
    rice_noodle_restaurant: { id: "Rice Noodle Restaurant", name: "米粉面馆" },
    congee_and_dumplings: { id: "Congee and Dumplings", name: "粥食面点" },
    spicy_hot_pot: { id: "Spicy Hot Pot", name: "麻辣烫香锅" },
    skewers_hot_pot: { id: "Skewers Hot Pot", name: "火锅串串" },
    burger_bakery: { id: "Burger Bakery", name: "汉堡烘焙" },
    japanese_korean_cuisine: { id: "Japanese and Korean cuisine", name: "日韩料理" },
    light_salad: { id: "Light Salad", name: "轻食沙拉" },
    nourishing_stew: { id: "Nourishing Stew", name: "滋补炖汤" },
    dumplings_wontons: { id: "Dumplings and Wontons", name: "饺子馄饨" },
    pasta_pizza: { id: "Pasta Pizza", name: "意面披萨" },
    sichuan_hunan_cuisine: { id: "Sichuan and Hunan cuisine", name: "川湘菜" },
    local_cuisine: { id: "Local cuisine", name: "地方菜" }
}


export const EAT_DATA: EatRestaurant[] = [
    {
        name: "",
        type: EatType.burger_bakery,
        lv: 0,
        item: [
            {
                name: "",
                info: "",
                judge: "",
                price: 0,
                lv: 0
            }
        ]
    }
]
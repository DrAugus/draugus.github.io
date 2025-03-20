import { MileageRedemption } from "../../type";

// 东方航空里程兑换
export const CEAIR_MILES_REDEMPTION: MileageRedemption[] = [
    {
        bank: "浦发银行",
        coBrandedCardName: "东航-浦发联名信用卡",
        coBrandedCardBenefits: [
            {
                cardLevel: "白金卡",
                redemptionRatio: ["10:1", "$1:1"],
                redemptionCap: "年度上限20万里程",
                annualFeeReduction: "1500元/年刚性年费，终身白金钻可免",
            }, {
                cardLevel: "钛金卡",
                redemptionRatio: ["14:1", "$1:1"],
                redemptionCap: "年度上限10万里程",
                annualFeeReduction: "360元/年刚性年费，账单日金钻可免",
            }, {
                cardLevel: "金卡",
                redemptionRatio: ["15:1", "$2:1"],
                redemptionCap: "年度上限6万里程",
                annualFeeReduction: "卡片有效期内免年费",
            },
        ]
    }, {
        bank: "兴业银行",
        coBrandedCardName: "东航-兴业联名信用卡",
        coBrandedCardBenefits: [
            {
                cardLevel: "标准白金卡",
                redemptionRatio: "6:1",
                redemptionCap: "年度上限10万里程",
                annualFeeReduction: "2600元/年刚性年费",
            }, {
                cardLevel: "精英白金卡",
                redemptionRatio: "10:1",
                redemptionCap: "年度上限6万里程",
                annualFeeReduction: "首年免年费。核卡成功后的一年内有积分交易满人民币30000元或等值外币，免次年年费",
            }, {
                cardLevel: "钛金卡",
                redemptionRatio: "10:1",
                redemptionCap: "年度上限6万里程",
                annualFeeReduction: "首年免年费。核卡成功后的一年内有积分交易满人民币30000元或等值外币，免次年年费",
            }, {
                cardLevel: "金卡",
                redemptionRatio: "15:1",
                redemptionCap: "年度上限4万里程",
                annualFeeReduction: "首年免年费。核卡成功后的一年内刷卡或取现满5次，不限金额，即免次年年费",
            },
        ]
    }, {
        bank: "交通银行",
        coBrandedCardName: "东航-交通联名信用卡",
        coBrandedCardBenefits: [
            {
                cardLevel: "白金卡",
                redemptionRatio: "10:1",
                redemptionCap: "月度上限为10万交行积分，年上限100万交行积分",
                annualFeeReduction: "首年年费可通过新客户卡片核发日起45天内消费满3笔(每笔满168元人民币)减免。次年起无常规减免政策,收取刚性年费1000元/年",
            }, {
                cardLevel: "金卡",
                redemptionRatio: "12:1",
                redemptionCap: "月度上限为10万交行积分，年上限100万交行积分",
                annualFeeReduction: "首年免年费，当年刷卡消费满6次可免次年年费",
            }, {
                cardLevel: "普卡",
                redemptionRatio: "15:1",
                redemptionCap: "月度上限为10万交行积分，年上限100万交行积分",
                annualFeeReduction: "首年免年费，当年刷卡消费满6次可免次年年费",
            },
        ]
    }, {
        bank: "中信银行",
        coBrandedCardName: "东航-中信联名信用卡",
        coBrandedCardBenefits: [
            {
                cardLevel: "白金卡",
                redemptionRatio: ["10:1", "$1:1"],
                redemptionCap: "月度上限为1万里程;年度上限12万里程",
                annualFeeReduction: "精英白金卡480元/年刚性年费;尊贵白金卡2000元/年刚性年费;万事达联名白金卡2600元/年刚性年费",
            }, {
                cardLevel: "钛金卡",
                redemptionRatio: ["18:1", "$2:1"],
                redemptionCap: "月度上限为0.5万里程;年度上限6万里程",
                annualFeeReduction: "首年免年费，每年消费5笔即可免次年年费",
            }, {
                cardLevel: "金卡",
                redemptionRatio: ["18:1", "$2:1"],
                redemptionCap: "月度上限为0.5万里程;年度上限6万里程",
                annualFeeReduction: "首年免年费，每年消费5笔即可免次年年费",
            },
        ]
    }, {
        bank: "建设银行",
        coBrandedCardName: "东航-建行联名信用卡",
        coBrandedCardBenefits: [
            {
                cardLevel: "标准白金卡",
                redemptionRatio: "12:1",
                redemptionCap: "无明确上限",
                annualFeeReduction: "每个持卡年度刷卡消费、取现累计满10笔(金额不限)免当年年费",
            }, {
                cardLevel: "金卡",
                redemptionRatio: "15:1",
                redemptionCap: "无明确上限",
                annualFeeReduction: "每个持卡年度刷卡消费、取现累计满3笔(金额不限)免当年年费",
            },
        ]
    }, {
        bank: "中国银行",
        coBrandedCardName: "东航-中银联名信用卡",
        coBrandedCardBenefits: [
            {
                cardLevel: "白金卡",
                redemptionRatio: "15:1",
                redemptionCap: "月度上限5000里程",
                annualFeeReduction: "首年免年费，消费12笔且满2万元免次年年费",
            }, {
                cardLevel: "金卡",
                redemptionRatio: "18:1",
                redemptionCap: "月度上限5000里程",
                annualFeeReduction: "首年免年费，刷卡5次免次年年费",
            },
        ]
    }, {
        bank: "工商银行",
        coBrandedCardName: "东航-工行联名信用卡",
        coBrandedCardBenefits: [
            {
                cardLevel: "白金卡",
                redemptionRatio: "18:1",
                redemptionCap: "无明确上限",
                annualFeeReduction: "首年免年费，消费满20万元可减免(2000元/年)次年年费",
            }, {
                cardLevel: "金卡",
                redemptionRatio: "18:1",
                redemptionCap: "无明确上限",
                annualFeeReduction: "首年免年费，消费满5笔或累计消费5000元人民币可减免(200元/年)次年年费",
            }, {
                cardLevel: "普卡",
                redemptionRatio: "18:1",
                redemptionCap: "无明确上限",
                annualFeeReduction: "首年免年费，消费满5笔或累计消费5000元人民币可减免(100元/年)次年年费",
            },
        ]
    }, {
        bank: "招商银行",
        coBrandedCardName: "东航-招商联名信用卡",
        coBrandedCardBenefits: [
            {
                cardLevel: "金卡",
                redemptionRatio: ["18:1", "$2:1"],
                redemptionCap: "无明确上限程",
                annualFeeReduction: "金卡首年免年费，当年消费6次免次年年费",
            },
        ]
    }, {
        bank: "民生银行",
        coBrandedCardName: "东航-民生联名信用卡",
        coBrandedCardBenefits: [
            {
                cardLevel: "豪华白金卡",
                redemptionRatio: ["10:1(1万里程内)", "18:1(超过1万里程)"],
                redemptionCap: "年度上限为10万里程",
                annualFeeReduction: "3600元/年刚性年费",
            }, {
                cardLevel: "标准白金卡",
                redemptionRatio: ["15:1(1万里程内)", "36:1(超过1万里程)"],
                redemptionCap: "年度上限为5万里程",
                annualFeeReduction: "首年免年费，当年刷卡消费18笔或5万人民币(或等值外币)，减免次年年费。",
            }, {
                cardLevel: "金普卡",
                redemptionRatio: ["18:1(1万里程内)", "36:1(超过1万里程)"],
                redemptionCap: "无明确上限程",
                annualFeeReduction: "免首年年费;当年刷卡消费5笔免次年年费",
            },
        ]
    }, {
        bank: "农业银行",
        coBrandedCardName: "东航-农行联名信用卡",
        coBrandedCardBenefits: [
            {
                cardLevel: "白金卡",
                redemptionRatio: "12:1",
                redemptionCap: "无明确上限",
                annualFeeReduction: "首年880元/卡/年刚性年费，刷卡满30次免次年年费。",
            }, {
                cardLevel: "金卡",
                redemptionRatio: "15:1",
                redemptionCap: "无明确上限",
                annualFeeReduction: "首年免年费，刷卡满5次免次年年费",
            },
        ]
    }, {
        bank: "浙商银行",
        coBrandedCardName: "东航-浙商联名信用卡",
        coBrandedCardBenefits: [
            {
                cardLevel: "白金卡",
                redemptionRatio: "12:1",
                redemptionCap: "无明确上限",
                annualFeeReduction: "首年免年费，消费或取现合计6次免次年年费",
            },
        ]
    }, {
        bank: "广发银行",
        coBrandedCardName: "东航-广发联名信用卡",
        coBrandedCardBenefits: [
            {
                cardLevel: "增值白金卡",
                redemptionRatio: ["7:1", "$1:1"],
                redemptionCap: "年度上限为8.57万里程",
                annualFeeReduction: "2500元/年刚性年费",
            }, {
                cardLevel: "臻享白金卡",
                redemptionRatio: ["10:1", "$1:1"],
                redemptionCap: "年度上限为6万里程",
                annualFeeReduction: "800元/年刚性年费,主卡可用8万积分兑换400元年费",
            }, {
                cardLevel: "金普卡",
                redemptionRatio: "18:1",
                redemptionCap: "年度上限为2万里程",
                annualFeeReduction: "首年免年费，消费满6次免次年年费",
            }, {
                cardLevel: "精英白金卡",
                redemptionRatio: "18:1",
                redemptionCap: "年度上限为2万里程",
                annualFeeReduction: "发卡90天内刷卡满3笔日每笔满88元免首年年费;刷卡满12次或绑定第三方支付(如微信、支付宝)连续12个月免次年年费",
            },
        ]
    }, {
        bank: "广发银行",
        coBrandedCardName: "东航-广发洲际联名信用卡",
        coBrandedCardBenefits: [
            {
                cardLevel: "白金卡",
                redemptionRatio: ["18:1", "指定渠道6:1"],
                redemptionCap: "年度上限为2.22万里程",
                annualFeeReduction: "银联版:核卡90天内消费满88元的3笔，可免首年年费。当年年费周期内累计消费或提现(不限金额)满12次，可免次年年费;VISA版:首年免年费，当年年费周期内刷卡满3次，或名下所有广发信用卡主卡合计消费满15次，可免次年年费",
            },
        ]
    },
];

// 南方航空里程兑换
export const CSAIR_MILES_REDEMPTION: MileageRedemption[] = [];

import type { ExploreRecord } from '../../../type';

export const LinkChinaPrefix = '/trip/china';

export const VISITED_CHINA: ExploreRecord[] = [
    {
        id: '北京', info: [
            {
                date: {
                    start: new Date('2019/02/10'),
                    end: new Date('2019/02/27')
                },
                intro: "求职"
            },
            {
                date: {
                    start: new Date('2019/03/08'),
                    end: new Date('2019/03/09'),
                },
                intro: "游玩"
            },
            {
                date: {
                    start: new Date('2020/02/15'),
                },
                intro: "北京西站-北京站转车"
            }
        ]
    },
    { id: '重庆' },
    {
        id: '香港', info: [
            {
                date: {
                    start: new Date('2023/05/02'),
                },
                intro: "游玩"
            },
            {
                date: {
                    start: new Date('2023/06/28'),
                    end: new Date('2023/06/29'),
                },
                intro: "游玩"
            },
            {
                date: {
                    start: new Date('2023/07/20'),
                },
                intro: "转机"
            },
            {
                date: {
                    start: new Date('2023/07/27'),
                },
                intro: "转机"
            }, {
                date: {
                    start: new Date('2024/04/05'),
                },
                intro: "办事"
            }
        ]
    },
    {
        id: '澳门', info: [
            {
                date: {
                    start: new Date('2023/05/01'),
                },
                intro: "游玩"
            },
            {
                date: {
                    start: new Date('2023/06/29'),
                },
                intro: "坐船/巴士往返香港"
            },
        ]
    },
    {
        id: '上海', info: [
            {
                date: {
                    start: new Date('2021/10/02'),
                },
                intro: "游玩"
            },
            {
                date: {
                    start: new Date('2022/09/07'),
                },
                intro: "高铁转车，苏州-杭州"
            }, {
                date: {
                    start: new Date('2023/03/11'),
                    end: new Date('2023/03/12'),
                },
                intro: "游玩"
            }, {
                date: {
                    start: new Date('2023/06/22'),
                },
                intro: "浦东坐飞机"
            }, {
                date: {
                    start: new Date('2023/06/26'),
                },
                intro: "浦东坐飞机"
            }, {
                date: {
                    start: new Date('2023/10/06'),
                },
                intro: "高铁转车"
            }, {
                date: {
                    start: new Date('2024/05/02'),
                },
                intro: "游玩"
            }, {
                date: {
                    start: new Date('2025/02/18'),
                },
                intro: "游玩"
            },
        ]
    },
    { id: '天津' },
    {
        id: '福建',
        items: [
            {
                id: '福州', info: [
                    {
                        date: {
                            start: new Date('2022/03/18'),
                            end: new Date('2022/03/20'),
                        },
                        intro: "游玩"
                    }
                ]
            },
            {
                id: '厦门', info: [
                    {
                        date: {
                            start: new Date('2022/06/02'),
                            end: new Date('2022/06/05'),
                        },
                        intro: "游玩"
                    }
                ]
            },
        ]
    }, {
        id: '内蒙古', items: [
            {
                id: '鄂尔多斯', info: [
                    {
                        date: {
                            start: new Date('2020/07/27'),
                            end: new Date('2020/07/28'),
                        },
                        intro: "转机"
                    }, {
                        date: {
                            start: new Date('2020/11/06'),
                        },
                        intro: "转机"
                    }
                ]
            }
        ]
    },
    {
        id: '陕西', items: [
            {
                id: '西安', info: [
                    {
                        date: {
                            start: new Date('2018/03/30'),
                            end: new Date('2018/04/11'),
                        },
                        intro: "游玩"
                    }
                ]
            }
        ]
    },
    { id: '甘肃' }, {
        id: '海南', items: [
            {
                id: '海口', info: [
                    {
                        date: {
                            start: new Date('2024/04/15'),
                            end: new Date('2024/04/18'),
                        },
                        intro: "游玩"
                    }, {
                        date: {
                            start: new Date('2025/01/26'),
                        },
                        intro: "转机"
                    }
                ]
            }
        ]
    },
    {
        id: '广东',
        items: [
            {
                id: '广州', info: [
                    {
                        date: {
                            start: new Date('2023/04/29'),
                            end: new Date('2023/05/01'),
                        },
                        intro: "游玩"
                    }, {
                        date: {
                            start: new Date('2023/06/30'),
                        },
                        intro: "高铁转车"
                    }, {
                        date: {
                            start: new Date('2024/04/04'),
                            end: new Date('2024/04/05'),
                        },
                        intro: "飞机落地，高铁去hk"
                    }, {
                        date: {
                            start: new Date('2025/03/14'),
                            end: new Date('2025/03/16'),
                        },
                        intro: "办事"
                    },
                ]
            },
            {
                id: '深圳', info: [{
                    date: {
                        start: new Date('2023/05/01'),
                        end: new Date('2023/05/03'),
                    },
                    intro: "游玩"
                }, {
                    date: {
                        start: new Date('2023/06/28'),
                    },
                    intro: "转车去香港"
                }, {
                    date: {
                        start: new Date('2024/04/05'),
                    },
                    intro: "转车来回香港"
                }]
            }, {
                id: '汕头', info: [{
                    date: {
                        start: new Date('2024/04/05'),
                        end: new Date('2023/04/08'),
                    },
                    intro: "游玩"
                }]
            }, {
                id: '潮州', info: [{
                    date: {
                        start: new Date('2024/04/08'),
                        end: new Date('2024/04/10'),
                    },
                    intro: "游玩"
                }]
            }, {
                id: '揭阳', info: [{
                    date: {
                        start: new Date('2024/04/10'),
                    },
                    intro: "飞机"
                }]
            }, {
                id: '珠海', info: [{
                    date: {
                        start: new Date('2024/04/18'),
                    },
                    intro: "飞机转高铁"
                }, {
                    date: {
                        start: new Date('2023/06/28'),
                        end: new Date('2023/06/30'),
                    },
                    intro: "香港临时落脚"
                }, {
                    date: {
                        start: new Date('2023/04/30'),
                        end: new Date('2023/05/01'),
                    },
                    intro: "澳门临时落脚"
                }]
            },
        ]
    },
    {
        id: '广西',
        items: [
            {
                id: '柳州', resident: true, info: [{
                    date: {
                        start: new Date('2023/06/30'),
                        end: new Date('2023/07/02'),
                    },
                    intro: "游玩"
                }, {
                    date: {
                        start: new Date('2023/10/20'),
                        end: new Date('2023/10/22'),
                    },
                    intro: "游玩"
                }, {
                    date: {
                        start: new Date('2024/03/29'),
                        end: new Date('2024/03/31'),
                    },
                    intro: "游玩"
                }, {
                    date: {
                        start: new Date('2024/08/17'),
                    },
                    intro: "游玩"
                }, {
                    date: {
                        start: new Date('2024/11/15'),
                        end: new Date('2024/11/17'),
                    },
                    intro: "游玩"
                }, {
                    date: {
                        start: new Date('2024/12/14'),
                    },
                    intro: "游玩"
                }, {
                    date: {
                        start: new Date('2025/01/23'),
                    },
                    intro: "游玩"
                }, {
                    date: {
                        start: new Date('2025/02/08'),
                    },
                    intro: "游玩"
                },]
            },
            {
                id: '南宁', info: [{
                    date: {
                        start: new Date('2022/05/27'),
                        end: new Date('2022/05/29'),
                    },
                    intro: "游玩"
                }, {
                    date: {
                        start: new Date('2023/06/10'),
                        end: new Date('2023/06/12'),
                    },
                    intro: "游玩"
                },]
            }, {
                id: '桂林', resident: true, info: [{
                    date: {
                        start: new Date('2024/04/18'),
                        end: new Date('2024/04/22'),
                    },
                    intro: "游玩"
                }, {
                    date: {
                        start: new Date('2023/09/02'),
                        end: new Date('2023/09/06'),
                    },
                    intro: "游玩"
                }, {
                    date: {
                        start: new Date('2024/03/29'),
                    },
                    intro: "转车"
                }, {
                    date: {
                        start: new Date('2024/03/31'),
                    },
                    intro: "转车"
                },]
            },
        ]
    },
    {
        id: '贵州',
        items: [
            {
                id: '贵阳', info: [{
                    date: {
                        start: new Date('2024/04/22'),
                    },
                    intro: "高铁转飞机"
                }, {
                    date: {
                        start: new Date('2024/04/26'),
                        end: new Date('2024/05/01'),
                    },
                    intro: "游玩"
                },]
            },
        ]
    },
    {
        id: '江苏',
        items: [
            {
                id: '南京', info: [{
                    date: {
                        start: new Date('2023/02/25'),
                        end: new Date('2023/02/26'),
                    },
                    intro: "游玩"
                }, {
                    date: {
                        start: new Date('2023/08/09'),
                    },
                    intro: "游玩"
                }, {
                    date: {
                        start: new Date('2024/01/01'),
                    },
                    intro: "送机"
                }, {
                    date: {
                        start: new Date('2025/05/05'),
                        end: new Date('2025/05/06'),
                    },
                    intro: "自驾"
                },
                ]
            },
            {
                id: '苏州', info: [{
                    date: {
                        start: new Date('2016/08/02'),
                        end: new Date('2016/08/05'),
                    },
                    intro: "游玩"
                }, {
                    date: {
                        start: new Date('2022/09/06'),
                        end: new Date('2022/09/07'),
                    },
                    intro: "游玩"
                },]
            },
        ]
    },
    {
        id: '四川',
        items: [
            {
                id: '成都',
                info: [{
                    date: {
                        start: new Date('2020/07/28'),
                        end: new Date('2021/04/28'),
                    },
                    intro: "工作"
                },],
                resident: true
            },
        ]
    }, {
        id: '吉林',
        items: [
            {
                id: '长春',
                info: [{
                    date: {
                        start: new Date('2023/05/27'),
                        end: new Date('2023/05/28'),
                    },
                    intro: "游玩"
                }]
            }
        ]
    }, {
        id: '辽宁',
        items: [
            {
                id: '沈阳',
                info: [{
                    date: {
                        start: new Date('2014/09/01'),
                        end: new Date('2020/07/28'),
                    },
                    intro: "学习，工作"
                },],
                resident: true
            }, {
                id: '大连',
                info: [{
                    date: {
                        start: new Date('2016/06/10'),
                        end: new Date('2016/06/12'),
                    },
                    intro: "游玩"
                }]
            }
        ]
    },
    {
        id: '云南',
        items: [
            {
                id: '大理白族自治州', info: [{
                    date: {
                        start: new Date('2022/08/14'),
                        end: new Date('2022/08/15'),
                    },
                    intro: "游玩"
                },]
            },
            {
                id: '昆明', info: [{
                    date: {
                        start: new Date('2022/08/13'),
                        end: new Date('2022/08/15'),
                    },
                    intro: "游玩"
                },]
            },
            { id: '丽江', info: [] },
            {
                id: '西双版纳傣族自治州', info: [{
                    date: {
                        start: new Date('2022/08/12'),
                        end: new Date('2022/08/13'),
                    },
                    intro: "游玩"
                },]
            },
        ]
    },
    {
        id: '浙江',
        items: [
            {
                id: '杭州',
                resident: true,
                info: [{
                    date: {
                        start: new Date('2021/04/03'),
                        end: new Date('2021/04/05'),
                    },
                    intro: "游玩"
                }, {
                    date: {
                        start: new Date('2021/04/28'),
                    },
                    intro: "工作"
                },]
            },
            {
                id: '绍兴', info: [{
                    date: {
                        start: new Date('2021/10/03'),
                    },
                    intro: "游玩"
                }, {
                    date: {
                        start: new Date('2023/04/22'),
                    },
                    intro: "游玩"
                }, {
                    date: {
                        start: new Date('2024/12/08'),
                    },
                    intro: "办事"
                },]
            }, {
                id: '舟山', info: [{
                    date: {
                        start: new Date('2023/04/15'),
                    },
                    intro: "游玩"
                },]
            }, {
                id: '湖州', info: [{
                    date: {
                        start: new Date('2021/05/30'),
                    },
                    intro: "游玩"
                }, {
                    date: {
                        start: new Date('2022/03/05'),
                        end: new Date('2022/03/06'),
                    },
                    intro: "团建"
                }, {
                    date: {
                        start: new Date('2025/04/02'),
                    },
                    intro: "游玩"
                },]
            }, {
                id: '嘉兴', info: [{
                    date: {
                        start: new Date('2025/04/04'),
                    },
                    intro: "游玩"
                },]
            },
        ]
    },
    {
        id: '河南',
        items: [
            {
                id: '郑州',
                info: [
                    {
                        date: {
                            start: new Date('2017/02/22'),
                        },
                        intro: "飞机"
                    }, {
                        date: {
                            start: new Date('2019/01/03'),
                            end: new Date('2019/01/04'),
                        },
                        intro: "游玩"
                    }, {
                        date: {
                            start: new Date('2020/10/04'),
                        },
                        intro: "飞机"
                    }, {
                        date: {
                            start: new Date('2020/10/07'),
                        },
                        intro: "飞机"
                    }, {
                        date: {
                            start: new Date('2022/02/12'),
                        },
                        intro: "飞机"
                    }, {
                        date: {
                            start: new Date('2022/02/16'),
                        },
                        intro: "飞机"
                    }, {
                        date: {
                            start: new Date('2024/01/26'),
                        },
                        intro: "高铁"
                    }, {
                        date: {
                            start: new Date('2025/01/26'),
                        },
                        intro: "转机"
                    }, {
                        date: {
                            start: new Date('2025/02/02'),
                        },
                        intro: "飞机"
                    },
                ],
            }, {
                id: '信阳', info: [{
                    date: {
                        start: new Date('2024/10/02'),
                    },
                    intro: "转车"
                }]
            },
        ]
    },
    {
        id: '湖南',
        items: [
            {
                id: '长沙',
                info: [{
                    date: {
                        start: new Date('2022/08/10'),
                        end: new Date('2022/08/12'),
                    },
                    intro: "游玩"
                }],
            },
        ]
    }, {
        id: '江西',
        items: [
            {
                id: '吉安',
                info: [{
                    date: {
                        start: new Date('2025/02/09'),
                        end: new Date('2025/02/10'),
                    },
                    intro: "自驾"
                }],
            }, {
                id: '鹰潭',
                info: [{
                    date: {
                        start: new Date('2025/02/10'),
                        end: new Date('2025/02/11'),
                    },
                    intro: "自驾"
                }],
            }, {
                id: '景德镇',
                info: [{
                    date: {
                        start: new Date('2025/05/03'),
                        end: new Date('2025/05/05'),
                    },
                    intro: "游玩"
                }],
            },
        ]
    },
    {
        id: '湖北',
        items: [
            {
                id: '武汉',
                info: [{
                    date: {
                        start: new Date('2024/05/08'),
                        end: new Date('2024/05/11'),
                    },
                    intro: "游玩"
                }],
            },
        ]
    },
    {
        id: '山东',
        items: [
            {
                id: '淄博',
                info: [{
                    date: {
                        start: new Date('2023/08/04'),
                        end: new Date('2023/08/05'),
                    },
                    intro: "游玩"
                }],
            }, {
                id: '济宁',
                info: [{
                    date: {
                        start: new Date('2023/08/05'),
                        end: new Date('2023/08/06'),
                    },
                    intro: "游玩"
                }],
            }, {
                id: '青岛',
                info: [{
                    date: {
                        start: new Date('2023/08/03'),
                        end: new Date('2023/08/04'),
                    },
                    intro: "游玩"
                }],
            },
        ]
    },
];

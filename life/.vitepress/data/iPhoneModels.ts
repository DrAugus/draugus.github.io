import type { AppleModels } from '../type';

// DATA from https://en.wikipedia.org/wiki/List_of_iPhone_models

// https://www.apple.com.cn/newsroom/2016/09/07Apple-Introduces-iPhone-7-iPhone-7-Plus-The-Best-Most-Advanced-iPhone-Ever/

export const IPHONE_MODELS: AppleModels[] = [
  { generation: 1.0, model: 'iPhone', announced: new Date('2007/01/09') },
  { generation: 2.0, model: 'iPhone 3G', announced: new Date('2008/06/09') },
  { generation: 3.0, model: 'iPhone 3GS', announced: new Date('2009/06/08') },
  { generation: 4.0, model: 'iPhone 4', announced: new Date('2010/06/07') },
  { generation: 5.0, model: 'iPhone 4s', announced: new Date('2011/10/04') },
  { generation: 6.0, model: 'iPhone 5', announced: new Date('2012/09/12') },
  { generation: 6.0, model: 'iPhone 5c', announced: new Date('2013/09/10') },
  { generation: 7.0, model: 'iPhone 5s', announced: new Date('2013/09/10') },
  { generation: 8.0, model: ['iPhone 6', 'iPhone 6 Plus'], announced: new Date('2014/09/09') },
  { generation: 9.0, model: ['iPhone 6s', 'iPhone 6s Plus'], announced: new Date('2015/09/09') },
  { generation: 9.0, model: 'iPhone SE(1st generation)', announced: new Date('2016/03/21') },
  { generation: 10.0, model: ['iPhone 7', 'iPhone 7 Plus'], announced: new Date('2016/09/07') },
  { generation: 11.0, model: ['iPhone 8', 'iPhone 8 Plus', 'iPhone X'], announced: new Date('2017/09/12') },
  { generation: 12.0, model: ['iPhone XR', 'iPhone XS', 'iPhone XS Max'], announced: new Date('2018/09/12') },
  { generation: 13.0, model: ['iPhone 11', 'iPhone 11 Pro', 'iPhone 11 Pro Max'], announced: new Date('2019/09/10') },
  { generation: 13.0, model: 'iPhone SE(2nd generation)', announced: new Date('2020/04/15') },
  { generation: 14.0, model: ['iPhone 12', 'iPhone 12 Mini', 'iPhone 12 Pro', 'iPhone 12 Pro Max'], announced: new Date('2020/10/13') },
  { generation: 15.0, model: ['iPhone 13', 'iPhone 13 Mini', 'iPhone 13 Pro', 'iPhone 13 Pro Max'], announced: new Date('2021/09/14') },
  { generation: 15.0, model: 'iPhone SE(3rd generation)', announced: new Date('2022/03/08') },
  { generation: 16.0, model: ['iPhone 14', 'iPhone 14 Plus', 'iPhone 14 Pro', 'iPhone 14 Pro Max'], announced: new Date('2022/09/07') },
  { generation: 17.0, model: ['iPhone 15', 'iPhone 15 Plus', 'iPhone 15 Pro', 'iPhone 15 Pro Max'], announced: new Date('2023/09/12') },
  { generation: 18.0, model: ['iPhone 16', 'iPhone 16 Plus', 'iPhone 16 Pro', 'iPhone 16 Pro Max'], announced: new Date('2024/09/10') },
  { generation: 18.0, model: ['iPhone 16e'], announced: new Date('2025/02/19') },
]


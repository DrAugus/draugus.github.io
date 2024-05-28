// path life/code, ls

import type { CardData } from '../type';

export const navItem = [{
  text: '基础', items: [
    { text: 'C++', link: '/code/cpp/', activeMatch: '/code/cpp/' },
    { text: '操作系统', link: '/code/os/', activeMatch: '/code/os/' },
    { text: 'DSA', link: '/code/dsa/', activeMatch: '/code/dsa/' },
    { text: '数据库', link: '/code/db/', activeMatch: '/code/db/' },
    { text: '前端', link: '/code/front-end/', activeMatch: '/code/front-end/' },
    { text: '编译器/开发环境', link: '/code/dev-env/', activeMatch: '/code/dev-env/' },
    { text: '构建/持续集成', link: '/code/build/', activeMatch: '/code/build/' },
    { text: '版本控制', link: '/code/version-ctrl/', activeMatch: '/code/version-ctrl/' },
    { text: '八股文', link: '/code/interview/', activeMatch: '/code/interview/' },
    { text: '编程语言', link: '/code/program/', activeMatch: '/code/program/' },
  ]
}, {
  text: '进阶', items: [
    { text: 'API', link: '/code/api/', activeMatch: '/code/api/' },
    { text: '框架', link: '/code/framework/', activeMatch: '/code/framework/' },
    { text: '协议', link: '/code/protocol/', activeMatch: '/code/protocol/' },
    { text: '内核', link: '/code/kernel/', activeMatch: '/code/kernel/' },
    { text: '库', link: '/code/libs/', activeMatch: '/code/libs/' },
    { text: '系统设计', link: '/code/sys-design/', activeMatch: '/code/sys-design/' },
  ]
},]

const getDirCode = (): CardData[] => {
  let cds: CardData[] = []
  navItem.forEach(obj => {
    let cd: CardData = {
      title: obj.text,
      items: []
    }
    obj.items.forEach(items => {
      cd.items.push({
        title: items.text,
        link: items.link
      })
    })
    cds.push(cd)
  })
  return cds
}

export const DIR_CODE: CardData[] = getDirCode()

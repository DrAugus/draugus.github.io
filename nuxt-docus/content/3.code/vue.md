---  
title: vue
icon: logos:vue
date: 2022-07-14 18:11:11
category:

- 编程

tag:

- vue
- 前端

---


# Vue

## vue组件之间相互传值的方式

[refer]

**综述：**

- 父子通信： 父向子传递数据是通过 `props`，子向父是通过 `$emit`；通过 `$parent / $children` 通信；`$ref` 也可以访问组件实例；`provide / inject`
  ；[$attrs / $listeners]
- 兄弟通信： `Bus`；`Vuex`
- 跨级通信： `Bus`；`Vuex`；`provide / inject` ; [$attrs / $listeners]

### 父组件向子组件传值

### 子组件向父组件传值

### 兄弟组件之间传值

### 多层父子组件通信

[refer]: https://segmentfault.com/a/1190000022700216

[$attrs / $listeners]: https://segmentfault.com/a/1190000022708579

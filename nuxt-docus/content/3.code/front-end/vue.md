---
icon: logos:vue
---

# Vue

## vue组件之间相互传值的方式

> [refer][props refer]

**综述：**

- 父子通信： 父向子传递数据是通过 `props`，子向父是通过 `$emit`；通过 `$parent / $children` 通信；`$ref` 也可以访问组件实例；`provide / inject`
  ；[$attrs / $listeners][attrs listeners]
- 兄弟通信： `Bus`；`Vuex`
- 跨级通信： `Bus`；`Vuex`；`provide / inject` ; [$attrs / $listeners][attrs listeners]

### 父组件向子组件传值

### 子组件向父组件传值

### 兄弟组件之间传值

### 多层父子组件通信

## slot

> [refer][slot]

```vue
<BaseLayout>
  <template v-slot:header>
    <!-- header 插槽的内容放这里 -->
  </template>
</BaseLayout>
```

```vue
<MyComponent>
  <template #header="headerProps">
    {{ headerProps }}
  </template>

  <template #default="defaultProps">
    {{ defaultProps }}
  </template>

  <template #footer="footerProps">
    {{ footerProps }}
  </template>
</MyComponent>
```

## frameworks

### Vue UI frameworks

> [refer][vuejs-frameworks]

::list

- [Vuetify](https://vuetifyjs.com/) :icon{name="logos:vuetifyjs"}
- [Bootstrap Vue](https://bootstrap-vue.org/)
- [Quasar Framework](https://quasar.dev/)
- [Vue Material](https://vuematerial.io/)
::

> Comparing the popularity of the 4 Vue frameworks on [npm trends](https://npmtrends.com/)

![vue-ui-frame-npm-trends](/vue-ui-frame-npm-trends.png)
![vue-ui-frame-npm-stats](/vue-ui-frame-npm-stats.png)

### Static Site frameworks

::list

- [vuepress](./vuepress)
- vitepress
::

### SSR frameworks

Server-Side Rendering
::list

- nuxtjs
::

## about `<script>`

`<script lang="ts">` 与 `<script>` 与 `<script setup lang="ts">` 的区别

[props refer]: https://segmentfault.com/a/1190000022700216
[attrs listeners]: https://segmentfault.com/a/1190000022708579
[slot]: https://cn.vuejs.org/guide/components/slots.html#scoped-slots
[vuejs-frameworks]: https://www.monocubed.com/blog/vuejs-frameworks/

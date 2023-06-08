
# Vue

## tick

tick 是 Vue.js 中的一个异步更新机制，用于在下一次 DOM 更新后运行一段代码。在使用 Vue.js 时，所有的 DOM 更新操作实际上都是异步的，Vue.js 会将它们放到一个队列里，然后在下一个 tick 中统一更新。这样可以提高性能和用户体验，避免出现大量的 DOM 重绘和回流。使用 `$nextTick()` 方法可以让我们在下一个 tick 中获得 DOM 更新后最新的状态。

## vue 组件之间相互传值的方式

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

## Fetch API

```vue
<template>
  <div>
    <h1>Wikipedia Page: {{ pageTitle }}</h1>
    <div v-html="pageContent"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: '',
      pageContent: ''
    };
  },
  mounted() {
    const endpoint =
      'https://en.wikipedia.org/w/api.php?action=parse&page=Template:IPhone_models_minimal&prop=text&format=json';

    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        this.pageTitle = data.parse.title;
        this.pageContent = data.parse.text['*'];
      })
      .catch(error => console.error(error));
  }
};
</script>
```

## Frameworks

### Vue UI frameworks

> [refer][vuejs-frameworks]

- [Vuetify](https://vuetifyjs.com/) :icon{name="logos:vuetifyjs"}
- [Bootstrap Vue](https://bootstrap-vue.org/)
- [Quasar Framework](https://quasar.dev/)
- [Vue Material](https://vuematerial.io/)

> Comparing the popularity of the 4 Vue frameworks on [npm trends](https://npmtrends.com/)

![vue-ui-frame-npm-trends](/img/code/vue-ui-frame-npm-trends.png)
![vue-ui-frame-npm-stats](/img/code/vue-ui-frame-npm-stats.png)

### Static Site frameworks

- [vuepress](./vuepress)
- [vitepress](./vitepress)

### SSR frameworks

Server-Side Rendering

- nuxtjs

## About `<script>`

`<script lang="ts">` 与 `<script>` 与 `<script setup lang="ts">` 的区别

[props refer]: https://segmentfault.com/a/1190000022700216
[attrs listeners]: https://segmentfault.com/a/1190000022708579
[slot]: https://cn.vuejs.org/guide/components/slots.html#scoped-slots
[vuejs-frameworks]: https://www.monocubed.com/blog/vuejs-frameworks/

## QA

### event

在 Vue 中，`@input` 绑定的方法中的 `event` 对象是指原生的事件对象，而 `$event` 则是 Vue 包装过的事件对象。当我们在绑定 `@input` 时，使用 `$event` 可以保证我们在方法内部可以正确地获取到 input 元素的值，从而进行一些校验或其他操作。

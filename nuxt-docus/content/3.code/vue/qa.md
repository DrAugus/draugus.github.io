# QA

## `[Vue warn]: Data property "option" is already defined in Props.`

```vue
data () {
  return {
    // Rename the "option" property in the data option
    // to avoid the conflict with the "option" prop
    dataOption: undefined
  }
},
props: {
  option: {
    type: Object,
    required: true
  }
}
```

## `xAxis "0" not found`

> refer: <https://github.com/apache/echarts/issues/14071#issuecomment-762582442>

```vue
import 'echarts/lib/component/grid';
```

## 使用 `asyncData` 方法在组件中获取 `JSON` 数据

asyncData 方法会在服务端渲染和客户端挂载之前被调用，并且它可以访问上下文对象 (context)。

例如，假设你有一个组件，它需要在渲染之前获取 JSON 数据。你可以使用 asyncData 方法来获取数据，然后在服务端或客户端渲染之前将数据传递给组件。

下面是一个示例：

```vue
<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  async asyncData ({ app, error }) {
    try {
      const response = await app.$axios.$get('/data.json')
      return {
        title: response.title,
        items: response.items
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Data not found' })
    }
  }
}
</script>
```

在这个例子中，我们使用 asyncData 方法获取了来自 '/data.json' 的 JSON 数据。然后，我们使用返回值将数据传递给组件。

::alert
注意：asyncData 方法只能在服务端或客户端渲染期间被调用，所以你不能在挂载之后调用它。如果你需要在挂载之后获取数据，你可以使用 created 或 mounted 生命周期钩子来调用 asyncData 方法。
::

## nuxt use json

> [refer][nuxt use json]

`import json from "~/static/json/sample.json";` By prepending `~/static`

[nuxt use json]: https://stackoverflow.com/a/55124822/17744936

# Sol

## Vue

### `[Vue warn]: Data property "option" is already defined in Props.`

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

### `xAxis "0" not found`

> refer: <https://github.com/apache/echarts/issues/14071#issuecomment-762582442>

```vue
import 'echarts/lib/component/grid';
```

### 使用 `asyncData` 方法在组件中获取 `JSON` 数据

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

在这个例子中，我们使用 asyncData 方法获取了来自 `/data.json` 的 JSON 数据。然后，我们使用返回值将数据传递给组件。

::alert
注意：asyncData 方法只能在服务端或客户端渲染期间被调用，所以你不能在挂载之后调用它。如果你需要在挂载之后获取数据，你可以使用 created 或 mounted 生命周期钩子来调用 asyncData 方法。
::

## nuxt

### nuxt use json

> [refer][nuxt use json]

`import json from "~/static/json/sample.json";` By prepending `~/static`

[nuxt use json]: https://stackoverflow.com/a/55124822/17744936

### JavaScript heap out of memory

```log
<--- Last few GCs --->

[18465:0x118040000]    98714 ms: Mark-sweep 2008.7 (2084.7) -> 1993.7 (2085.6) MB, 1529.6 / 0.0 ms  (average mu = 0.159, current mu = 0.066) allocation failure; scavenge might not succeed
[18465:0x118040000]   100665 ms: Mark-sweep 2010.1 (2085.8) -> 1994.9 (2086.8) MB, 1893.5 / 0.0 ms  (average mu = 0.091, current mu = 0.030) allocation failure; scavenge might not succeed


<--- JS stacktrace --->

FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
 1: 0x100626c88 node::Abort() [/opt/homebrew/Cellar/node/19.1.0/bin/node]
 2: 0x100627f54 node::ModifyCodeGenerationFromStrings(v8::Local<v8::Context>, v8::Local<v8::Value>, bool) [/opt/homebrew/Cellar/node/19.1.0/bin/node]
```

[refer](https://stackoverflow.com/questions/53230823/fatal-error-ineffective-mark-compacts-near-heap-limit-allocation-failed-javas)  

```shell
export NODE_OPTIONS="--max-old-space-size=5120" # Increase to 5 GB
export NODE_OPTIONS="--max-old-space-size=6144" # Increase to 6 GB
export NODE_OPTIONS="--max-old-space-size=7168" # Increase to 7 GB
export NODE_OPTIONS="--max-old-space-size=8192" # Increase to 8 GB

# and so on...

# formula:
export NODE_OPTIONS="--max-old-space-size=(X * 1024)" # Increase to X GB

# Note: it doesn't have to be multiples of 1024.
# max-old-space-size can be any number of memory megabytes (MB) you have available.
```

如果还是出现这个错误，可能就是代码写错了。之前是 `nuxt.config.ts` 这个脚本配置写错了。

### nuxt page 500 `This page is temporarily unavailable.`

![e](/code/nuxt-err1.png)

~~check commit info, found release 1.2.5 upgrade some deps, while this project's deps didn't upgrade. Essential reason is the deps version are inconsistent.~~

但好像不是这样的，并不能修复  
目前看到的是[仓库](https://github.com/nuxt-themes/docus) 在 v1.2.5 发布时，自动出包，抛出500错误。而之前的都是正常的

## js ts

### TypeError: replace is not a function

[refer](https://github.com/DrAugus/draugus.github.io/commit/b206c6559b326add98f7773b637abddd18092577#diff-1d790b86c76035cd166c812c35ce19682c15e5ab353eeb8ab75b8bd91156f1c1)

We used the `toString()` method to convert the number to a string before calling `replace()`.

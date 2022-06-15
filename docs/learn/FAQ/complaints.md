# 吐槽

> 说点什么吧？

## dayjs 真的无语

```typescript
import * as dayjs from 'dayjs'
```

debug模式可以正常启动。build时，抛出异常 `Cannot call a namespace ('dayjs')`, `TypeError: dayjs__namespace is not a function`

改为

```typescript
const dayjs = require('dayjs')
```

build正常，debug模式直接报错，`ReferenceError: require is not defined`

**最终解决方案换成js** [c0f38f8](https://github.com/DrAugus/Augus/commit/c0f38f802693f358570c78730b5a4848d81609d8)

## 遗留问题

safari 浏览器判定
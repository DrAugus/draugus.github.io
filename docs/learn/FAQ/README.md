# FAQ

## dayjs: what can I say

```typescript
import * as dayjs from 'dayjs'
```

- debug success
- build `Cannot call a namespace ('dayjs')`, `TypeError: dayjs__namespace is not a function`

try another

```typescript
const dayjs = require('dayjs')
```

- build success
- debug `ReferenceError: require is not defined`

**finally use js** c0f38f802693f358570c78730b5a4848d81609d8


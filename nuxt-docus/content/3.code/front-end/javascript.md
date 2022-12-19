---
title: Javascript
icon: logos:javascript
---

## Convert an Array of Objects to a Map

```js
const arr = [
  { key: 'name', value: 'Tom' },
  { key: 'country', value: 'Chile' },
]

const map1 = new Map(
  arr.map((object) => {
    return [object.key, object.value]
  }),
)

// ️👇️ {'name' => 'Tom', 'country' => 'Chile'}
console.log(map1)
```

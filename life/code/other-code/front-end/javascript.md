---
icon: logos:javascript
---

# Javascript

## basin

### async func

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

// 赋值给变量的异步函数表达式
const add = async function (x) {
  const a = await resolveAfter2Seconds(20);
  const b = await resolveAfter2Seconds(30);
  return x + a + b;
};

add(10).then((v) => {
  console.log(v); // 4 秒后打印 60
});

// 用作 IIFE 的异步函数表达式
(async function (x) {
  const p1 = resolveAfter2Seconds(20);
  const p2 = resolveAfter2Seconds(30);
  return x + (await p1) + (await p2);
})(10).then((v) => {
  console.log(v); // 2 秒后打印 60
});
```

### 解构赋值

```js
const [a, b] = array;
const [a, , b] = array;
const [a = aDefault, b] = array;
const [a, b, ...rest] = array;
const [a, , b, ...rest] = array;
const [a, b, ...{ pop, push }] = array;
const [a, b, ...[c, d]] = array;

const { a, b } = obj;
const { a: a1, b: b1 } = obj;
const { a: a1 = aDefault, b = bDefault } = obj;
const { a, b, ...rest } = obj;
const { a: a1, b: b1, ...rest } = obj;
const { [key]: a } = obj;

let a, b, a1, b1, c, d, rest, pop, push;
[a, b] = array;
[a, , b] = array;
[a = aDefault, b] = array;
[a, b, ...rest] = array;
[a, , b, ...rest] = array;
[a, b, ...{ pop, push }] = array;
[a, b, ...[c, d]] = array;

({ a, b } = obj); // brackets are required
({ a: a1, b: b1 } = obj);
({ a: a1 = aDefault, b = bDefault } = obj);
({ a, b, ...rest } = obj);
({ a: a1, b: b1, ...rest } = obj);
```

### op

- `~` 按位非
- `^` 按位异或
- `,` 逗号运算符，从左到右求值
- `**` 幂 `console.log(3 ** 4)`
- `in` 如果指定的属性在指定的对象或其原型链中 则返回 true
- `instanceof` 用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上, `arr instanceof Array`
- `??` 空值合并运算符(nullish coalescing operator)，当左侧的操作数为 `null` 或者 `undefined` 时，返回其右侧操作数，否则返回左侧操作数。注意，不能与 AND 或 OR 运算符共用。将 `??` 直接与 AND（`&&`）和 OR（`||`）运算符组合使用是不可取的。这种情况下会抛出 `SyntaxError` 。但是，如果使用括号来显式表明运算优先级，是没有问题的
- `?.` 可选链运算符(optional chaining)允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。`?.` 运算符的功能类似于 `.` 链式运算符，不同之处在于，在引用为空 (`nullish` ) (`null` 或者 `undefined`) 的情况下不会引起错误，该表达式短路返回值是 `undefined`。与函数调用一起使用时，如果给定的函数不存在，则返回 `undefined`。
- `<<` 左移(left shift)将第一个操作数向左移动指定位数，左边超出的位数将会被清除，右边将会补零。
- `>>` 右移(right shift)将一个操作数按指定移动的位数向右移动，右边移出位被丢弃，左边移出的空位补符号位（最左边那位）
- `>>>` 无符号右移运算符(unsigned right shift)（零填充右移）将左操作数计算为无符号数，并将该数字的二进制表示形式移位为右操作数指定的位数，取模 32。向右移动的多余位将被丢弃，零位从左移入。其符号位变为 0，因此结果始终为非负数。与其他按位运算符不同，零填充右移返回一个无符号 32 位整数。

```js
let x = 1;
x = (x++, x);
console.log(x);
// Expected output: 2
x = (2, 3);
console.log(x);
// Expected output: 3

const foo = null ?? 'default string';
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0
```

## sol

### Convert an Array of Objects to a Map

数组转map

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

## refer

[mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)

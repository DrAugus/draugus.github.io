//这个ts是测试项目语言显示

const obj2arr = (obj) => {
  const arr = [];
  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }
    const item = {};
    item[key] = obj[key];
    arr.push(item);
  }
  return arr;
};

const module1 = new Object({

  _count: 0, /// can be changed

  fun1: function () {
    //...
  },

  fun2: function () {
    //...
  }

});

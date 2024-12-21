<template>
  <div class="VPFeatures VPHomeFeatures">
    <div class="custom-select-wrapper">
      <div class="custom-select">
        <select v-model="selectedCategory">
          <option value="welfare">福彩刮刮乐</option>
          <option value="sports">体彩刮刮乐</option>
        </select>
      </div>
    </div>

    <div class="custom-input">
      <input type="text" v-model="inputValue" @input="filterMappings" maxlength="3">
      <ul v-if="filteredKeys">
        <li v-for="(value, key) in filteredKeys" :key="key"> {{ key }}: 中奖 {{ value }} 元 </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Lottery } from '../../type';
import { DATA_LOTTERY } from '../../data/lottery';

const findMapping = (category: keyof Lottery, key: string): number | undefined => {
  return DATA_LOTTERY[category][key];
};

const selectedCategory = ref('welfare');
const inputValue = ref('');
const filteredKeys = ref({});

const filterMappings = () => {
  if (inputValue.value) {
    console.log(inputValue.value);
    const regex = new RegExp(`^${inputValue.value}`, 'i');
    filteredKeys.value = Object.keys(DATA_LOTTERY[selectedCategory.value])
      .filter(key => regex.test(key))
      .reduce((obj, key) => {
        obj[key] = DATA_LOTTERY[selectedCategory.value][key];
        return obj;
      }, {});

    console.log(filteredKeys.value);
  } else {
    filteredKeys.value = {};
  }
};  
</script>

<style scoped>
/* 自定义样式 */
.custom-select-wrapper {
  height: 100%;
  margin: 30px;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
}

.custom-input {
  height: 100%;
  margin: 30px;
  padding: 30px;
  justify-content: center;
  align-items: center;
}

.custom-select {
  position: relative;
  display: block;
  width: 100%;
  cursor: pointer;
  outline: none;
}

/* 隐藏默认的select 样式 */
.custom-select select {
  width: 100%;
  cursor: pointer;
  text-indent: 0.01px;
  text-overflow: '';
  border: none;
  font-size: 20px;
  /* 清除默认边框 */
  outline: none;
  /* 清除轮廓样式 */
  background: #f6f6f6;
  color: #5e5e5e;
  border-radius: 5px;
  padding: 10px;
  -webkit-appearance: none;
  /* 针对WebKit浏览器移除默认样式 */
  -moz-appearance: none;
  /* 针对Mozilla浏览器移除默认样式 */
  appearance: none;
}

/* 为 select 创建一个自定义箭头 */
.custom-select::after {
  content: '▼';
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  color: #5e5e5e;
  pointer-events: none;
  /* 防止点击到伪元素 */
}

/* 当用户 hover 到 select 上时改变背景或者字体颜色 */
.custom-select:hover {
  background: #e8e8e8;
}

/* 添加焦点样式 */
.custom-select:focus {
  outline: 2px solid #f77d0a;
}

/* 可能需要的option的额外样式 */
option {
  padding: 10px;
}

input {
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: none;
  border-radius: 25px;
  background-color: #fff;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, .1);
  /* 增加阴影效果 */
  transition: transform .3s ease-in-out;
  /* 动画效果 */
  font-size: 16px;
  outline: none;
  /* 取消选中时的外边框 */
}

input:focus {
  transform: scale(1.05);
  /* 增加获取焦点放大效果 */
}

input::placeholder {
  color: #d3d3d3;
}
</style>
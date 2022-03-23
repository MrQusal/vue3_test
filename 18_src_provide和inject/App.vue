<template>
  <div class="app">
    <h3>我是App组件(父), {{ name }} -- {{ price }}</h3>
    <Son />
  </div>
</template>

<script>
import Son from './components/Son';
import { provide, reactive, toRefs } from "vue";
export default {
  name: "App",
  components: { Son },
  setup() {
    const car = reactive({ name: "奔驰", price: "40W" });
    // 父组件想提供数据给 后代组件用，使用 provide 函数。参数列表：数据的名字，数据对象
    provide("Car", car);
    return { ...toRefs(car) };
  },
};
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>

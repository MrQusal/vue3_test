<template>
  <div class="grandson">
    <h3>我是App组件(孙) {{ car.name }} -- {{ car.price }}</h3>
  </div>
</template>

<script>
import { reactive, toRefs, inject } from "vue";
export default {
  name: "Grand",
  setup() {
    //孙（后代）组件希望获取数据，使用 inject 函数（数据名）
    const car = inject("Car");
    return { car };
  },
};
</script>

<style>
.grandson {
  background-color: orange;
  padding: 10px;
}
</style>

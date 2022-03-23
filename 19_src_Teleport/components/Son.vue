<template>
  <div class="son">
    <h3>我是App组件(子)</h3>
    <Grandson />
  </div>
</template>

<script>
import Grandson from "./Grandson";
export default {
  name: "Son",
  components: { Grandson },
  setup() {
    // 子组件使用父组件的数据，使用 props 即可。但是 inject 也可用
  },
};
</script>

<style>
.son {
  background-color: #bfa;
  padding: 10px;
}
</style>

<template>
  <div class="app">
    <h3>我是App组件(父)</h3>
    <Son />
  </div>
</template>

<script>
import Son from "./components/Son";
export default {
  name: "App",
  components: { Son },
};
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>

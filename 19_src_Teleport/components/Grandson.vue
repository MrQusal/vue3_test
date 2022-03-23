<template>
  <div class="grandson">
    <h3>我是App组件(孙)</h3>
    <Dialog />
  </div>
</template>

<script>
import Dialog from "./Dialog.vue";
export default {
  name: "Grand",
  components: { Dialog },
};
</script>

<style>
.grandson {
  background-color: orange;
  padding: 10px;
}
</style>

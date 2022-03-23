<template>
  <div class="son">
    <h3>我是App组件(子)</h3>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Son",
  // 可以使用 async ，使 setup 返回 promise 对象。
  // 那么就要配合 Suspense 标签和 defineAsyncComponent 异步引入结合使用
  async setup() {
    let sum = ref(0);
    // setup 返回一个 promise 对象

    // 2. setup 返回一个 promise 对象
    const p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ sum });
      }, 3000);
    });

    return await p;
  },
};
</script>

<style>
.son {
  background-color: #bfa;
  padding: 10px;
}
</style>

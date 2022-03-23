<template>
  <div class="app">
    <h3>我是App组件(父)</h3>
    <!-- <Son /> -->
    <!-- 
      配合 suspense 标签
        1. 若因网速等问题，App 组件已渲染，然而 son 组件还未导入
        防止页面抖动。
        v-slot:default 写son组件
        v-slot:fallback 写 son 组件还没渲染时，默认展示什么
     -->
    <Suspense>
      <template v-slot:default>
        <Son></Son>
      </template>
      <template v-slot:fallback>
        稍等，加载中。。。
      </template>
    </Suspense>
  </div>
</template>

<script>
// import Son from "./components/Son"; // 静态引入
/*
  动态（异步）引入 借助 defineAsyncComponent 函数
    传入一个函数（函数体为：使用import函数返回组件）
*/
import { defineAsyncComponent } from "vue";
const Son = defineAsyncComponent(() => import("./components/Son"));
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

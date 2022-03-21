<template>
  <h1>App组件</h1>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我sum+1</button>
</template>

<script>
// 组合式API
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
export default {
  name: "Demo",
  setup() {
    let sum = ref(0);

    // 通过组合式API使用生命周期钩子（就是在配置项的前面加上 on ）
    // 当 使用组合式 和 配置项方式同时存在，组合式先输出，然后配置项再输出
    onBeforeMount(() => {
      console.log("---onBeforeMount---");
    }),
    onMounted(() => {
      console.log("---onMounted---");
    }),
    onBeforeUpdate(() => {
      console.log("---onBeforeUpdate---");
    }),
    onUpdated(() => {
      console.log("---onUpdated---");
    }),
    onBeforeUnmount(() => {
      console.log("---onBeforeUnmount---");
    }),
    onUnmounted(() => {
      console.log("---onUnmounted---");
    })
    return {
      sum,
    };
  },
  // 通过配置项的形式使用生命周期钩子
  beforeCreate() {
    console.log("--beforeCreate--");
  },
  created() {
    console.log("--created--");
  },
  beforeMount() {
    console.log("--beforeMount--");
  },
  mounted() {
    console.log("--mounted--");
  },
  beforeUpdate() {
    console.log("--beforeUpdate--");
  },
  updated() {
    console.log("--updated--");
  },
  // Vue3 中，没有 destroyed 和 beforedestroed钩子
  beforeUnmount() {
    console.log("--beforeUnmount--");
  },
  unmounted() {
    console.log("--unmounted--");
  },
};
</script>

<style>
</style>

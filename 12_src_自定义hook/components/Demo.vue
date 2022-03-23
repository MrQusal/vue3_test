<template>
  <h1>App组件</h1>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我sum+1</button>
  <hr />
  <h2>当前鼠标点击的坐标为 x：{{ point.x }}、y：{{ point.y }}</h2>
</template>

<script>
import usePoint from "../hooks/usePoint";
// 组合式API
import { onMounted, onBeforeUnmount, reactive, ref } from "vue";
export default {
  name: "Demo",
  setup() {
    let sum = ref(0);
    /* 
		// 1. 未使用 hooks
    // “打点”相关的数据
    const point = reactive({
      x: 0,
      y: 0,
    });
		// “打点”相关的方法
    function savePoint(e) {
      point.x = e.pageX;
      point.y = e.pageY;
			console.log(point.x, point.y);
    }
    // 挂载后绑定方法
    onMounted(() => {
      window.addEventListener("click", savePoint);
    });
		// 卸载前解绑方法
    onBeforeUnmount(() => {
      window.removeEventListener("click", savePoint);
    }); */
    // 2. 使用 hooks（将数据、方法、逻辑都封装到一个函数中，便于复用）
    const point = usePoint();
    return {
      sum,
      point,
    };
  },
  // 通过配置项的形式使用生命周期钩子
};
</script>

<style>
</style>
<template>
  <button @click="isShow = true">点我弹窗</button>
  <!-- 
    teleport 标签，意为传送。to属性：传送到哪里，属性值可为 html元素，也可以为css选择器
   -->
  <teleport to="body">
    <!-- 遮罩层 -->
    <div class="mask" v-if="isShow">
      <!-- 弹窗 -->
      <div class="dialog">
        <h4>我是一个弹窗</h4>
        <h3>一些内容</h3>
        <h3>一些内容</h3>
        <h3>一些内容</h3>
        <button @click="isShow = false">关闭弹窗</button>
      </div>
    </div>
  </teleport>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "Dialog",
  setup() {
    let isShow = ref(false);
    return { isShow };
  },
};
</script>
  
<style>
.mask {
  /* 遮罩层实现：开启定位，全部置0，完全撑开 */
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* 半透明 */
  background-color: rgb(0, 0, 0, 0.5);
}
.dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 300px;
  height: 300px;
  text-align: center;
  background-color: aqua;
}
</style>
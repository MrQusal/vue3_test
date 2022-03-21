<template>
  <!-- 传递参数，和Vue2一样 -->
  <Demo @hello="testHello" msg="你好呀" school="重邮">
    <!-- 定义插槽 -->
    <template v-slot:qwe>
      <span>上海</span>
    </template>
  </Demo>
</template>

<script>
import Demo from "./components/Demo.vue";
export default {
  name: "App",
  components: { Demo },
  setup() {

    function testHello(val) {
      alert(`触发了Hello事件，接收到了参数${ val}`)
    }
    return {
      testHello
    }
  }
};
</script>

<style>
</style>

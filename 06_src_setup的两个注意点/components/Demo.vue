<template>
  <h1>App组件</h1>
  <h2>一个人的信息</h2>
  <h3>姓名：{{ person.name }}</h3>
  <h3>年纪：{{ person.age }}</h3>
  <button @click="test">测试触发Demo组件的Hello事件</button>
  <!-- 使用插槽 -->
  <slot name="qwe"></slot>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Demo",
  // props配置项 声明接收参数
  props: ["msg", "school"],
  // emits配置项 声明绑定了hello事件
  emits: ["hello"],
  beforeCreate() {
    // setup 先于 beforeCreate 执行
    console.log("--beforeCreate--");
  },
  setup(props, context) {
    // setup 可以接收参数，第一个为 props 接收传递的参数
    console.log("--setup--", props);
    /*
      第二个参数为上下文对象，关注三个属性 attrs、emit、slots
      attrs：组件传递的参数，props只声明接收部分，其他部分在 attrs 中，（Vue2中的 $attrs）
      emit：用于触发自定义事件（Vue2中的 $emit）
      slots：插槽（Vue2中的 $slots）
    */
    console.log("--setup--", context);

    function test() {
      context.emit("hello", "重邮");
    }
    let person = reactive({
      name: "张三",
      age: 12,
    });

    return {
      person,
      test
    };
  },
};
</script>

<style>
</style>

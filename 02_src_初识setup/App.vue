<template>
  <h1>App组件</h1>
  <h2>一个人的信息</h2>
  <h3>姓名：{{ name }}</h3>
  <h3>年纪：{{ age }}</h3>
  <button @click="sayHello">点击欢迎</button>
  <br>
  <button @click="test1">Vue2的配置去读取Vue3的数据</button>
  <br>
  <button @click="test2">Vue3的配置去读取Vue2的数据</button>
</template>

<script>
import { h } from "vue";

export default {
  name: "App",
  data() {
    return {
      sex: '男',
    }
  },
  methods: {
    sayWel() {
      alert("你好呀")
    },
    test1() {
      console.log(this.sex);
      console.log(this.name);
      console.log(this.sayHello);
    }
  },

  // 此处只演示 setup 配置，没有涉及响应式
  setup() {
    // 组件中的数据、方法等，都要配置到setup中
    let name = "张三";
    let age = 12;

    function sayHello() {
      alert(`我叫${name},我今年${age}岁了，你好呀`);
    }

    function test2() {
      console.log(this.sex);
      console.log(this.sayWel);
    }
    // 1. 返回一个对象，则对象中的方法、属性在模板中可以直接使用
    return {
      name,
      age,
      sayHello,
      test2
    }

    // 2. 也可以返回一个渲染函数（其中就是 render 中的 h，需要先引入）了解
    // return () => h("h1", "尚硅谷");
  },
};
</script>

<style>
</style>

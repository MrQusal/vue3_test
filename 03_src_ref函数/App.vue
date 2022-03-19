<template>
  <h1>App组件</h1>
  <h2>一个人的信息</h2>
  <h3>姓名：{{ name }}</h3>
  <h3>年纪：{{ age }}</h3>
  <h3>工作类型：{{ job.type }}</h3>
  <h3>工作薪水：{{ job.salary }}</h3>
  <button @click="change">点我修改信息</button>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    // 组件中的数据、方法等，都要配置到setup中
    // let name = "张三";
    // let age = 12;

    // 使用 ref 函数，使 vue 可以监测到数据的变化
    let name = ref("张三");
    let age = ref(12);
    let job = ref({
      type: "前端工程师",
      salary: "30K",
    });

    function change() {
      /*
        此处的 name，age 被vue3封装成了 RefImpl 对象（引用实现对象）。其中有属性 value
        如果封装的基本数据，RefImpl 对象中的 value 就是 属性值
        如果封装的使对象，RefImpl 对象中的 value 则是 Proxy 代理对象
      */
      console.log(name, age, job);
      name.value = "李四";
      age.value = 30;
      // 对于对象来说，无需再 .value（job.value.type.value）
      job.value.type = "UI";
      job.value.salary = "40K";
    }

    return {
      name,
      age,
      job,
      change,
    };
  },
};
</script>

<style>
</style>

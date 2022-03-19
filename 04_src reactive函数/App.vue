<template>
  <h1>App组件</h1>
  <h2>一个人的信息</h2>
  <h3>姓名：{{ person.name }}</h3>
  <h3>年纪：{{ person.age }}</h3>
  <h3>工作类型：{{ person.job.type }}</h3>
  <h3>工作薪水：{{ person.job.salary }}</h3>
  <h3>爱好：{{ person.hobby }}</h3>
  <button @click="change">点我修改信息</button>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",
  setup() {
    // reactive 函数，才能将对象类型的数据封装为代理对象 Proxy。ref能使用也是求助了 reactive
    // 数据
    let person = reactive({
      name: "张三",
      age: 12,
      job: {
        type: "前端工程师",
        salary: "30K",
      },
      hobby: ["学习", "代码", "游戏"],
    });

    // 方法
    function change() {
      console.log(person);
      person.name = "李四";   
      person.age = 30;
      person.job.type = "UI";
      person.job.salary = "50K";
      // 可以通过下标修改数组，vue2中只能用方法
      person.hobby[0] = "上网";
    }

    // 返回对象
    return {
      person,
      change,
    };
  },
};
</script>

<style>
</style>

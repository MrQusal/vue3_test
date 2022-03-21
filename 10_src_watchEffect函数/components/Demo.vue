<template>
  <h1>App组件</h1>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我sum+1</button>
  <hr />
  <h2>当前信息为：{{ msg }}</h2>
  <button @click="msg += '!'">点我修改信息</button>
  <hr />
  <h2>姓名：{{ person.name }}</h2>
  <h2>年纪：{{ person.age }}</h2>
  <h2>薪资：{{ person.job.j1.salary }}K</h2>
  <button @click="person.name += '!'">点我修改姓名</button>
  <button @click="person.age++">点我修改年纪</button>
  <button @click="person.job.j1.salary++">点我修改薪资</button>
</template>

<script>
// 组合式API
import { reactive, ref, watchEffect } from "vue";
export default {
  name: "Demo",
  setup() {
    let sum = ref(0);
    let msg = ref("你好");
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // 使用 watchEffect 监视（特点：回调中用到谁，就去监视谁）
    watchEffect(() => {
      const x1 = sum.value;
      console.log('sum值发生改变');
    });

    return {
      sum,
      msg,
      person,
    };
  },
};
</script>

<style>
</style>

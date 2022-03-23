<template>
  <h2>姓名：{{ name }}</h2>
  <h2>年纪：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}K</h2>
  <button @click="name += '!'">点我修改姓名</button>
  <button @click="age++">点我修改年纪</button>
  <button @click="job.j1.salary++">点我修改薪资</button>
  <hr />
  <h2>当前 sum 的值：{{ sum }}</h2>
  <button @click="sum++">点我sum++</button>
  <hr>
</template>

<script>
// 组合式API
import { reactive, readonly, ref, toRefs } from "vue";
export default {
  name: "Demo",

  setup() {
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // readonly 只读，对数据进行保护。不能修改
    // shallowReadonly 浅层只读
    // 应用场景：其他组件定义的响应式数据，交给你展示，不允许修改

    person = readonly(person);
    let sum = ref(0);

    return {
      sum,
      person,
      ...toRefs(person),
    };
  },
};
</script>

<style>
</style>

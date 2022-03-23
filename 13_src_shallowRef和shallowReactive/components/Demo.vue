<template>
  <h4>{{ person }}</h4>
  <h2>姓名：{{ name }}</h2>
  <h2>年纪：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}K</h2>
  <button @click="name += '!'">点我修改姓名</button>
  <button @click="age++">点我修改年纪</button>
  <button @click="job.j1.salary++">点我修改薪资</button>
  <hr />
  <h2>当前 x.y 的值：{{ x.y }}</h2>
  <button @click="x = { y: 88 }">点我替换x</button>
  <button @click="x.y++">点我x.y++</button>
</template>

<script>
// 组合式API
import { shallowReactive, shallowRef, toRefs } from "vue";
export default {
  name: "Demo",

  setup() {
    // shallowReactive 浅层的响应式，即只考虑第一层的响应式
    let person = shallowReactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    /*
      shallowRef。
      传入基本数据类型，和 ref 一样，
      传入对象数据类型，ref 会求助 reactive，而shallowRef直接放入对象（无响应式，但是可以整个替换）
      
    */
    let x = shallowRef({
      y: 0,
    });

    return {
      x,
      person,
      ...toRefs(person),
    };
  },
};
</script>

<style>
</style>

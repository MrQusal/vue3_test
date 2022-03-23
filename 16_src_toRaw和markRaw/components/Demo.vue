<template>
  <h2>姓名：{{ name }}</h2>
  <h2>年纪：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}K</h2>
  <h2 v-if="person.car">汽车: {{ person.car }}</h2>
  <button @click="name += '!'">点我修改姓名</button>
  <button @click="age++">点我修改年纪</button>
  <button @click="job.j1.salary++">点我修改薪资</button>
  <hr />
  <h2>当前 sum 的值：{{ sum }}</h2>
  <button @click="sum++">点我sum++</button>
  <hr />
  <button @click="showRawPerson">点我展示最原始的person 对象</button>
  <button @click="addCar">添加一台车</button>
  <button @click="changeCarInfo">修改车的信息</button>
</template>

<script>
// 组合式API
import { markRaw, reactive, ref, toRaw, toRefs } from "vue";
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
    let sum = ref(0);

    function showRawPerson() {
      // 使用 toRaw 将 reactive 生成的响应式对象转为普通对象
      const p = toRaw(person);
      console.log(p);
    }

    function addCar() {
      let car = { name: "A8", price: 40 };
      // 需求：car 对象只展示，不需要响应式。使用 markRaw 标记对象无需响应式
      car = markRaw(car)
      person.car = car; // 给 Proxy 对象添加属性（对象），无论多少次都是响应式的
    }

    function changeCarInfo() {
      person.car.name += '~';
      person.car.price++;
    }

    return {
      sum,
      person,
      ...toRefs(person),
      showRawPerson,
      addCar,
      changeCarInfo
    };
  },
};
</script>

<style>
</style>

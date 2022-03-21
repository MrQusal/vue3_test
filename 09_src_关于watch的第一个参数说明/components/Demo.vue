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
import { reactive, ref, watch } from "vue";
export default {
  name: "Demo",
  setup() {
    let sum = ref(0);
    let msg = ref("你好");

    /*
      如果使用 reactive 生成，那么person 为 Proxy 对象，可以直接 wacth
      如果使用 ref 生成，那么person 为 RefImpl 对象，它的 value 才是 Proxy 对象
        此时，想要监视 person，可以写成 person.value，也可以开启深度监视（监视 value属性对应的Proxy对象）
    */
    let person = ref({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });
    // 关于 watch 第一个参数的说明
    watch(
      // 此处还可以写成 person.value。那么无需开启 deep
      person,
      () => {
        console.log("person值发生了改变");
      },
      { deep: true }
    );
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

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
  // Vue2 中的监视
  /*   watch: {
    sum: {
      immediate: true,
      deep: true,
      handler(newV, oldV) {
        console.log("sum值发生变化", newV, oldV);
      },
    },
  }, */

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

    /*
      watch 用法：参数依次为 要监视的对象（Proxy或RefImpl对象）、发生改变的回调、配置{}
      监视 ref 所定义的一个响应式数据
    */
    watch(
      sum,
      (newV, oldV) => {
        console.log("sum值发生变化", newV, oldV);
      },
      { immediate: true }
    );
    console.log(sum);
    /*
      情况二：监视 ref 所定义的多个响应式数据，用数组即可
      此时的 newV 和 oldV 对应数组，下标和监视的顺序相同
    */
    watch([sum, msg], (newV, oldV) => {
      console.log("sum值发生变化", newV, oldV);
    });
    /*
      情况三：监视 reactive 定义的响应式数据的全部属性
        1. 注意：此时无法获取 oldV
        2. 注意：此处强制开启了深度监视（deep配置无效）
    */
    /*     watch(
      person,
      (newV, oldV) => {
        console.log("person的值发生改变", newV, oldV);
      },
      {
        deep: false,
      }
    ); */
    /*
      情况四：监视 reactive 定义的响应式数据的某个属性（基本数据类型）
        eg：只监视 person 中的 age
          需要使用 箭头函数 返回要监视的 属性 
        1. 注意：对于基本数据类型，无需开启深度监视
    */
    /*     watch(
      () => person.age,
      (newV, oldV) => {
        console.log("person的age值发生改变", newV, oldV);
      }
    ); */
    /*
      情况五：监视 reactive 定义的响应式数据的某些属性（基本数据类型）
        eg：只监视 person 中的 age 和 name。
          使用数组包裹箭头函数即可
        1. 注意：对于基本数据类型，无需开启深度监视
    */
    /*     watch(
      [() => person.age, () => person.name],
      (newV, oldV) => {
        console.log("person的age值或name值发生改变", newV, oldV);
      }
    ); */
    /*
      特殊情况：监视 reactive 定义的响应式数据的某个属性（属性值是一个对象）
        此时，无法获取 oldV、但是可以开启深度监视
    */
    watch(
      () => person.job,
      (newV, oldV) => {
        console.log("person的job值发生改变", newV, oldV);
      },
      {
        deep: true,
      }
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

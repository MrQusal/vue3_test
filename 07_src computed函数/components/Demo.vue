<template>
  <h1>App组件</h1>
  <h2>一个人的信息</h2>
  <h3>
    姓：
    <input type="text" v-model="person.firstName" />
  </h3>
  <h3>
    名：
    <input type="text" v-model="person.lastName" />
  </h3>
  <h3>
    全名：
    <input type="text" v-model="person.fullName" />
  </h3>
</template>

<script>
// 组合式API
import { reactive, computed } from "vue";
export default {
  name: "Demo",
  // Vue2 中的计算属性
  /*   computed: {
    fullName() {
      return this.person.firstName + " - " + this.person.lastName;
    },
  }, */

  setup() {
    let person = reactive({
      firstName: "张",
      lastName: "三",
    });

    // 简写，只考虑读，没考虑写
    /*  person.fullName = computed(() => {
      return person.firstName + "-" + person.lastName;
    }); */
    // 完整写法，考虑独写。也可以使用 let fullName = ...，那么就需要暴露出去
    person.fullName = computed({
      get() {
        return person.firstName + "-" + person.lastName;
      },
      set(val) {
        const arr = val.split("-");
        person.firstName = arr[0];
        person.lastName = arr[1];
      },
    });

    return {
      person,
    };
  },
};
</script>

<style>
</style>

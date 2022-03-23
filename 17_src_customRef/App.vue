<template>
  <!-- 实现需求：输入框改变后，下面的h3隔一秒后再更新（页面防抖） -->
  <input type="text" v-model="value" />
  <h3>{{ value }}</h3>
</template>

<script>
import { customRef, ref } from "vue";
export default {
  name: "App",
  setup() {
    // 使用vue提供的 ref
    let value = myRef("hello");
    // 使用自定义的ref-名字为myRef
    function myRef(val) {
      /*
        借助 customRef，参数为一个函数，函数有两个形参 track、trigger
      */
      const x = customRef((track, trigger) => {
        let timer;
        return {
          get() {
            console.log(`有人从myRef容器中读取了数据，我把 ${val} 给他了`);
            track(); // 通知vue追踪val的变化（提前和get商量，让他认为val有用）
            return val;
          },
          set(newVal) {
            console.log(`有人把myRef容器中的数据修改为 ${val} `);
            clearTimeout(timer)
            timer = setTimeout(() => {
              val = newVal;
              trigger(); // 通知 vue 去重新解析模板
            }, 1000);
          },
        };
      });
      return x;
    }

    return { value };
  },
};
</script>

<style>
</style>

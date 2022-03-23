<template>
  <!-- 1. 需求：不希望写这么多 person、代码不简洁。希望直接写 name、age 等 -->
  <h4>{{ person }}</h4>
  <h2>姓名：{{ name }}</h2>
  <h2>年纪：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}K</h2>
  <button @click="name += '!'">点我修改姓名</button>
  <button @click="age++">点我修改年纪</button>
  <button @click="job.j1.salary++">点我修改薪资</button>
</template>

<script>
// 组合式API
import { reactive, toRef, toRefs } from "vue";
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


		const x = toRefs(person)
		console.log(x);

    return {
      /*
				- 自然而然想到 直接把属性交出去
				name: person.name
					此时，初次展示没问题，但是无响应式。点击按钮无法更改数据
					原因：此时等同于 name: '张三'
				
				- 必须交出 ref 对象或者 Proxy 对象，才能实现响应式
				name: ref(person.name)
					此时，初次展示没问题，也能实现响应式，但是此时数据已分离
					原因：真实修改的式 ref('张三') 返回的对象，与person无关了
				
				- 所以要使用 toRef 函数，将对象的某个属性单独交出去使用
				- 优化：使用 toRefs，将对象中的所有属性都处理一遍，返回一个对象
			*/
      person,
			...toRefs(person),
    };
  },
};
</script>

<style>
</style>

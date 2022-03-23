import { reactive, onMounted, onBeforeUnmount } from "vue"
export default function () {
  // 2. 使用 hooks。一般来说文件名为 useXXX
  // “打点”相关的数据
  const point = reactive({
    x: 0,
    y: 0,
  });
  // “打点”相关的方法
  function savePoint(e) {
    point.x = e.pageX;
    point.y = e.pageY;
    console.log(point.x, point.y);
  }

  // 挂载后绑定方法
  onMounted(() => {
    window.addEventListener("click", savePoint);
  });
  // 卸载前解绑方法
  onBeforeUnmount(() => {
    window.removeEventListener("click", savePoint);
  });

  // 最后暴露数据
  return point;
}
<template>
  <div>
     <!-- 1. 绑定键盘按下事件.enter-回车 -->
    <input type="text" @keyup.enter="enterFn" />
    <!-- 2. 绑定键盘按下事件.esc修饰符 - 取消键 -->
    <hr />
    <input type="text" @keyup.esc="escFn" />
  </div>
</template>

<script>
export default {
  methods: {
    enterFn() {
      alert("按下enter建了");
    },
    escFn() {
      alert("按下esc建了");
    },
  },
};
</script>

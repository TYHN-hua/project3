<template>
  <div>
    {{ msg }}
  </div>
</template>
<script>
// 插值表达式
// 语法 {{表达式}} 作用：将表达式的返回值直接插入到dom元素中
// 需求 将变量 msg='我是msg' 展示在div
export default {
  data() {
    return {
        msg: 'zs'
    };
  },
};
</script>
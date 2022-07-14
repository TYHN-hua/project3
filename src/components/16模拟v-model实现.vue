<template>
  <div>
     <h2>v-model指令的实现</h2>
     <input type="text" v-model="val">

_________________________________________________
    <!-- 模拟 -->

    <input type="text" @input="a" :value="message">
  </div>
   <!-- 思考改的值是什么 
   实现v-model
   数据到视图
   视图到数据
   1. value  v-bind
   2. 输入事件 输入过程中 实时拿到dom input 里的value
   -->
</template>

<script>
export default {
  data() {
    return {
        message:""
    }
  },
  methods: {
      a(e) {
          this.message = e.target.value
      }
  }
}
</script>

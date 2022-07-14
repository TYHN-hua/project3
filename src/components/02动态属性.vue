<template>
  <div>
    <!-- 2. 值 -> 标签原生属性上 -->
    <!-- 语法: v-bind:原生属性名="vue变量" -->
    <!-- 语法: :原生属性名="vue变量" --> 
    <a v-bind:href="str">点击去百度</a>
    <img :src="hlsrc" alt="">
  </div>
</template>

<script>
// http://yun.itheima.com/Upload/./Images/20210412/60741c11ab77b.jpg
export default {
  data(){
    return {
        str:"www.baidu.com",
        hlsrc:"http://yun.itheima.com/Upload/./Images/20210412/60741c11ab77b.jpg"
    }
  }
}
</script>
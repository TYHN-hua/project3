<template>
  <div>
    <div>
      <span>来自于: </span>
      <!-- 下拉菜单要绑定在select上 -->
      <select v-model="map">
        <option value="北京市" >北京</option>
        <option value="南京市">南京</option>
        <option value="天津市">天津</option>
      </select>
    </div>
    <div>
      <!-- (重要)
      遇到复选框, v-model的变量值
      非数组 - 关联的是复选框的checked属性
      数组   - 关联的是复选框的value属性
       -->
      <span>爱好: </span>
      <input type="checkbox" value="抽烟" v-model="hobby">抽烟
      <input type="checkbox" value="喝酒" v-model="hobby">喝酒
      <input type="checkbox" value="写代码" v-model="hobby">写代码
    </div>
    <div>
      <span>性别: </span>
      <input type="radio" value="男" name="sex" v-model="gender">男
      <input type="radio" value="女" name="sex" v-model="gender">女
    </div>
    <div>
      <span>自我介绍</span>
      <textarea v-model="info"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        map:"北京市",
        hobby:["抽烟","喝酒"],
        gender:"女",
        info:""
    }
  }
}
</script>
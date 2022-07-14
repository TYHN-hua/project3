//数组求和
let arr = [{a:100}, {a: 20}, {a:-10}]

const sum = arr.reduce((pre,curr) => {
  return pre+curr.a
},0)
console.log(sum) // 110

//统计出现次数
let str='asdasdasdasdasdasd'

const num = str.split("").reduce((pre,cur) => {
  if (cur in pre) {
    pre[cur]++
  } else {
    pre[cur] = 1
  }
  return pre
},{})

console.log(num);
//解析字符串
const process = (url)=>{
    const index1 = url.indexOf('?'),
          index2 = url.indexOf('#'),
          params = url.slice(index1+1,index2 ).split('&')
          // console.log(index1,index2,params);   ?索引号为20，从21位开始截取
    return params.reduce((pre,cur)=>{
      const [key,value] = cur.split('=')
      pre[key] = value
      return pre
    },{})
  }


  let str1 = "http://www.baidu.com?name=zhangsan&age=18&sex=nan#"
  console.log(process(str1));
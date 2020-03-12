// 声明的变量直接赋给对象
let name = "niit";
let skill = 'javascript';
var obj = { name, skill };
console.log(obj); 

// 使用键值对
let key = 'skill';
var obj = {
  [key]: 'web'
}
console.log(obj.skill);

// 自定义对象
/* jslint esversion: 6 */

// 数据的解构赋值
let [x, y, z] = [1, 2, 3];
console.log(x + ", " + y + ", " + z);


// 对象的解构赋值
let newPoint = {
  x:2,
  y:4,
  z:5
};
let {x, y, z} = newPoint;
console.log(Math.sqrt(x*x + y*y + z*z).toFixed(2));
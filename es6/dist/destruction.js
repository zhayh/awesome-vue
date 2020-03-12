"use strict";

// 数据的解构赋值
// let [x, y, z] = [1, 2, 3]
// console.log(x + ", " + y + ", " + z);


// 对象的解构赋值
var newPoint = {
  x: 2,
  y: 4,
  z: 5
};
var x = newPoint.x,
    y = newPoint.y,
    z = newPoint.z;

console.log(Math.sqrt(x * x + y * y + z * z).toFixed(2));
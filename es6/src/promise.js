/* jshint esversion: 6 */
let state = 1;

function step1 (resolve, reject) {
  console.log('1.开始-洗菜做饭');
  if (state == 1) {
    resolve('洗菜做饭--完成');
  } else {
    reject('洗菜做饭--出错');
  }
}

function step2 (resolve, reject) {
  console.log('2.开始-坐下来吃饭');
  if (state == 1) {
    resolve('坐下来吃饭--完成');
  } else {
    reject('坐下来吃饭--出错');
  }
}

function step3 (resolve, reject) {
  console.log('3.开始-收拾桌子洗完');
  if (state == 1) {
    resolve('收拾桌子洗完--完成');
  } else {
    reject('收拾桌子洗完--出错');
  }
}

new Promise(step1)
.then(function (val) {
  console.log(val);
  return new Promise(step2);
}).then(function (val) {
  console.log(val);
  return new Promise(step3);
}).then(function (val) {
  console.log(val);
  return val;
});

// function printAfterTimeout (string, timeout, done) {
//   setTimeout(function () {
//     done(string);
//   }, timeout);
// }
// printAfterTimeout('Hello ', 2e3, function (result) {
//   console.log(result);
//   // 内部嵌套回调
//   printAfterTimeout(result + 'Reader', 2e3, function (result) {
//     console.log(result);
//   });
// });
// function printAfterTimeout(string, timeout){
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       resolve(string);
//     }, timeout);
//   });
// }
// printAfterTimeout('Hello ', 2e3).then((result) => {
//   console.log(result);
//   return printAfterTimeout(result + 'Reader', 2e3);
// }).then((result) => {
//   console.log(result);
// });
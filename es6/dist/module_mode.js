'use strict';

// namespace模式
// let myModule = {
//   data: 'www.baidu.com',
//   foo () {
//     console.log(`foo() ${this.data}`)
//   },
//   bar () {
//     console.log(`bar() ${this.data}`)
//   }
// }
// // 能直接修改模块内部的数据
// myModule.data = 'other data' 
// myModule.foo() // foo() other data

// IIFE模式
(function (window) {
  var data = 'www.baidu.com';
  //操作数据的函数
  function foo() {
    //用于暴露有函数
    console.log('foo() ' + data);
  }
  function bar() {
    //用于暴露有函数
    console.log('bar() ' + data);
    otherFun(); //内部调用
  }
  function otherFun() {
    //内部私有的函数
    console.log('otherFun()');
  }
  //暴露行为
  window.myModule = { foo: foo, bar: bar //ES6写法
  };
})(window);

// IIFE模式增强，添加依赖
(function (window, $) {
  var data = 'www.baidu.com';
  //操作数据的函数
  function foo() {
    //用于暴露有函数
    console.log('foo() ' + data);
    $('body').css('background', 'red');
  }
  function bar() {
    //用于暴露有函数
    console.log('bar() ' + data);
    otherFun(); //内部调用
  }
  function otherFun() {
    //内部私有的函数
    console.log('otherFun()');
  }
  //暴露行为
  window.myModule = { foo: foo, bar: bar };
})(window, jQuery);
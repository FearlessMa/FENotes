# 闭包

[[toc]]

> [闭包MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)
>

1. 函数作用域 ：函数内部可以访问函数外部变量，函数外部无法访问函数内部变量

2. 闭包：内部函数引用外部函数的变量，全局变量引用内部函数。

3. 只有闭包函数可以提供访问外部函数变量的方法，或改变外部函数中的变量。

4. 闭包的作用：私有变量，模块化

5. 如果不是某些特定任务需要使用闭包，在其它函数中创建函数是不明智的，因为闭包在处理速度和内存消耗方面对脚本性能具有负面影响。

   ```js
   // 全局变量。非闭包  
   let i = 0;
     function outerFn() {
       function innerFn() {
         i++;
         console.log('i: ', i);
       }
       return innerFn;
     }
   
     const innerFn = outerFn();
     innerFn(); // i:1
     innerFn(); // i:2
     innerFn(); // i:3
     innerFn(); // i:4
   ```

   ```js
    // 闭包计数
     function outerFn() {
       let i = 0;
       function innerFn() {
         i++;
         console.log('i: ', i);
       }
       return innerFn;
     }
     const innerFn = outerFn();
     innerFn(); // i:1
     innerFn(); // i:2
     innerFn(); // i:3
     innerFn(); // i:4
     const innerFn2 = outerFn();
     innerFn2(); // i:1
     innerFn2(); // i:2
     innerFn2(); // i:3
     innerFn2(); // i:4
   ```

   




//var는 함수-범위(function-scoped)이고 let은 블록-범위(block-scoped)
//let과 const는 모두 블록-범위(block-scoped)

// const foo = "abc";
// let foo2 = "def";
//
// // console.log(foo, 111);
// document.getElementById('debug').innerHTML = foo2;


// const a = 0;
// a = 1;
// console.log(a);


// var x = "y";
// console.log(x);


// function hello(name) {
//   return `hello ${name}`; //템플릿문자열
// }
// console.log(hello('world'));


// function key(id){
//   return `key-${id}`;
// }
//
// const obj = {
//   id: 5,
//   [key('daum')]: true
// };
// console.log(obj);



// const atom = {
//   value: 1,
//   addValue(value) {
//     return atom.value + value;
//   },
// };
// console.log(atom);


// let nick = 'aji';
// const obj = {
//   nick,
// };
// console.log(nick);


// //copy array
// const arr = [1,2,3];
// const arrcopy = [...arr];
// arr[0] = 4;
// console.log(arr, arrcopy);


// const foo = document.querySelectorAll('div');
// const nodes = Array.from(foo);
// console.log(foo);


// // 즉시-호출(Immediately-Invoked) 함수 표현식(IIFE)
// (() => {
//   console.log('hi~ㅎㅎㅎ');
// })();


// const arr = [1, 2, 3, 4];
// const [first, second] = arr;
// console.log(first, second);




// function all(...args) {
//   return args.join('-');
// }
// console.log(all(1,2,3,4,5));


// function func(opts = {a:1}) {
//   return opts;
// }
// console.log(func());

// [1, 2, 3].map((x) => {
//   const y = x + 1;
//   console.log(x * y);
// });



// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// numbers.forEach((num) => sum += num);
// console.log(sum === 15);


// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((total, num) => total + num, 0);
// console.log(sum === 15);

// function foo() {
//   return () => {
//     console.log(this);
//   };
// }
// foo()();

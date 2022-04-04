//Q1.
// var x = 21;
// var girl = function () {
//   console.log(x);
//   var x = 20;
// };
// girl();

//Print output: Undefined

//Q2.
// var x = 21;
// girl();
// console.log(x);
// function girl() {
//   console.log(x);
//   var x = 20;
// }

//Print output:
//1]Undifined
//2]21

//Q3.
// var x = 21;
// a();
// b();
// console.log(a);
// function a() {
//   var x = 20;
//   console.log(x);
// }
// function b() {
//   var x = 40;
//   console.log(x);
// }
//Print output:
//1]20
//2]40
//3]function defination
// ƒ a() {
//   var x = 20;
//   console.log(x);
// }

//Q4.
// var x = 21;
// a();
// b();
// console.log(a);
// a = function () {
//   x = 20;
//   console.log(x);
// };
// b = function () {
//   x = 40;
//   console.log(x);
// };
//Print output: referance error:a is not define

//Q5.Create one function which takes two values as a parameter
//and print the sum of them as "Sum of 3, 4 is 7"
//Ans:-
function sum(a, b) {
    console.log(a + b);
  }
  sum(3, 4);
  
  //Q6.Write a function that accepts parameter n and returns factorial of n
  //Ans:-
  function factorial(n) {
    var res = 1,
      i;
    for (i = 2; i <= n; i++) res *= i;
    return res;
  }
  let res1 = factorial(10);
  console.log(res1);
  
  //Q7.Create one function with zero parameter having a console statement;
  //Ans:-
  function zero() {
    console.log("zero parameter fun");
  }
  zero();
  
  //Q.9.Create one function which takes three parameter as first name and last name and age and return the statement as "A is 99 years old"
  //Ans:-
  function para(fname, _lname, age) {
    console.log(fname + " " + "is" + " " + age + " " + "years" + " " + "old");
  }
  para("A", "B", 99);
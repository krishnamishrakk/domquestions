// // inherited and property


// //q1 Create 2 objects - parent and child.
// // Attach methods to parent and use those methods 
// //in child object using parents prototype

//  let parent={
//     cousre:"fullstack",
//     mode:"online"
// }
// let res;
// let child={
//     name:"krishna mishra",
//     lives:'satna'
// }
// child.__proto__=parent;
// console.log(child.mode);
// let keys=Object.keys(child)
// console.log(keys);
// console.log(child.hasOwnProperty('mode'));
// console.log(child.hasOwnProperty('name'));


// //  Add a method to calculate sum of all elements
// // in Array in array's protype, use that
// // method to calculate sum for multiple arrays





// // q4  Write a JavaScript function to retrieve 
// //all the names of object's own and inherited properties.

// let obj1={
//     music:'listen',
//     plays:function (){
//         console.log("i play vollytball")
//     }}
   

// let obj2={
//     names:'kk',
//     lives:'mp'
// }
// let obj3={
//     names:'harsh',
//     lives:'rewa'
// }

// obj2.__proto__=obj1

// for(let key in obj2){
//     if(obj2.hasOwnProperty(key)){
//         console.log(key,"own property");
//     }
//     else{
//         console.log(key,"inherited property");
//     }
// }
//

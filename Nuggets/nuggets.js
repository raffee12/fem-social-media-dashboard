// var myMethod = [1,2, 3, 4,5,6]

// for( var i =0; i< myMethod.length; i++) {
//   myMethod.push(i)
// }
// console.log(myMethod);
// arrays inside of an array //
// function multiplyAll(arr){
//   var product = 1;

//   for(var i =0; i<arr.length;  i++ ){
//     for(var j =0;  j < arr[i].length;  j++){
//       product *= arr[i][j]
//     }
//   }
//   return product
// }

// var product = multiplyAll([[1,2], [3,4], [5,6,7]])
// console.log(product);
// function myStore(workin) {
//   var stuff= 1;
//   for( var i=0;  i <workin.length;   i++){
//     for(var j= 0; j<   workin[i].length;  j++){
//       stuff *=workin[i][j]
//     }
//   } 
//   return stuff 
// }
// var stuff = myStore([[1,2], [3,4], [7,8,9]])

// console.log(stuff);
// function takeBack(better){
//   var songs = 1;
//   for(var i =0; i < better.length; i++){
//     for(var j= 0; j<better[i].length; j++){
//   songs *= better[i][j]
//     }
//   } return songs
// }
// var songs = takeBack([[1,2], [3,5], [7,8,9]])
// console.log(songs);

// do while loop
//  
// var react = [];
// var i = 10;
// while (i < 5) {
//   react.push(i);
//   i++;
// }
// console.log(react);

// var contacts = [
//     {
//         "firstName": "Zayn",
//         "lastName": "Malik",
//         "number": "05464562",
//         "likes": ["Pizza", "Coding", "Brownie"]
//     },
//     {
//         "firstName": "Harry",
//         "lastName": "Styles",
//         "number": "05464562",
//         "likes": ["Coke", "Cake", "Pannacotta"]
//     },
//     {
//         "firstName": "Ariana",
//         "lastName": "Grande",
//         "number": "05464562",
//         "likes": ["Lassagnae", "Sausage", "Mohito"]
//     },
//     {
//         "firstName": "Doja",
//         "lastName": "Cat",
//         "number": "05464562",
//         "likes": ["Mac & cheese", "Singing", "Americano"]
//     },
// ]
// function releaseOut(name, prop){
// for(var i =0; i < contacts.length; i++){
//     if(contacts[i].firstName ===name){
//         return contacts[i][prop] || "No such property"
//     }
// } return "No Such contact"
// }
// var data = releaseOut("Harry", "likes")
// console.log(data);
// generate random number

// function randomFraction(){

//     return Math.random()
// } 
// console.log(randomFraction());

// var randomNumberBetween0and19 = Math.floor(Math.random() *20)

// function randomWholeNum(){
//     return Math.floor(Math.random() *10)
// }
// console.log(randomWholeNum());
// function R(min, max){
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }
// console.log(R(1,9))
//nested conditional operator 

//  function nameingFunc(num){
//     return num >0 ? "positive": num < 0 ? "negative" : "Zero"
//  }
//  console.log(nameingFunc(-10));
 // let means locked in a block 
  
//  function checkScope(){
//     "use strict";
// var i = "butterScotch Ice Cream";
// if(true){
//  let i = "Pistachio Ice cream";
// console.log("My favourite:  ", i);

// } 
// console.log("Pistachio Ice Cream:" , i);
// return i;
// }
// checkScope()
//if you declare a varibale two times with const 
// function printingGame(K){
//     "use strict";
//     const sentence = K +  " is cool";


//     for(let i =0; i < K.length; i+= 2){
//         console.log(sentence);
        
//     }
//     // console.log(sentence)
// }
// printingGame("The boy ")
//Object.freeze
// function freezeObj(){
//     "use strict";
//     const MATH_CONSTANTS = {
//         PI: 3.14
//     }
//     Object.freeze(MATH_CONSTANTS)
//     try {
//         MATH_CONSTANTS.PI = 99;
//     } catch( ex){
//         console.log(ex);
        
//     } return MATH_CONSTANTS.PI
// }
// const PI = freezeObj()
// console.log(PI)

// var myCon  =  function(a, b){
//     return  a.concat(b)
// } 
// console.log(myCon([1,2], [3,4,5]));
//covert that myCon varble set to function into arrow function

// var myCon =(a,b)=>  a.concat(b)
// console.log(myCon([1,2], [3,4,5]));

//arrow functions for high order



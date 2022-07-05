/* Data types :
1.unsefined, 
2.null means nothing, 
3.boolean  is true or false
4.string starts with quotation marks
5.symbol is primitives
6. number is number
7. objects are key value pair restores

*/
/* variables  acts like boxes 3 ways to declare a variable by using let var const keywords*/

/* creating variable using var keyword ..var keuword works as  a globally the cool part is one can redifend or reassign them */

  var myName = 'Beauty'; 
myName = 8;

/* let is another way to declare a variable but it works locally not run through out the programs like ''var'' does*/
let ourName = 'freeCodeCamp'
/* you can declare the variabls by using const keyword but you can chang this it will go for a result of ''error''*/

const pi = 3.14;

var a; // we r declaring a variable 

var b = 2; // declaring and assgning at the same time 
/* = assignment operator */
a= 7;
b = a;
console.log(a);

/* Adding numbers, substracting , multipication,quotient uses (/ this symbol) : pretty staright forword so not gonna wasting my time here*/

// Incrementing numbers: basically increments number by adding 1 //

 var myVar = 10;
 myVar++;
 console.log(myVar);
// Decrementing numbers: basically increments number by  substracting 1 //


var  mySub = 10;
 mySub--;
console.log(mySub);
// % known as reminder operator//
  // += does  

  var a = 12 // suppose we have that we want to add 6 with that  genius or shortcut way to that is by using += sign

 a += 6;
 console.log(a)
 a -= 5;
 console.log(a)
 a *= 3;
 console.log(a)
 a /= 2;
 console.log(a)

  // strings in javascript : Everything inside single or double quotation mark or in back tics known as string//

  // escape a quotation we will gonna have some situation where in strings  we want some words kept in strings this  is where escape strings things come 
//  adding back slash  for escaping a character
//   var myStr = "I'm a\"string\" of  a string"

// another way to escape character s is just wrapping around with single quotes

var myStr =   '<a href = "https://www.youtube.com/" target = "_blank" </a>'
console.log(myStr);
// one more additional way is using backtiks around //


var myStarting =   `<a href = "https://www.youtube.com/" target = "_blank" </a>`
 console.log(myStarting);
 var myStr =  ` '<a href = "https://www.youtube.com/" target = "_blank" </a>'`
console.log(myStarting);


// escape sequences

/*******
 *  \`    single quote 
 *  \ "   double quote
 * \\ backslash
 * \   newline
 * \r carriage return
 *  \t tab 
 * \b backspave
 * \f   form feed
 * ******* */

var myStrs  = "why You\`r gotta \nbe so\t \\ rude"
 console.log(myStrs)

// Concatenating strings with plus operator//


var rude = 'Why you\'r gotta be so rude  '  + 'I\'m gonna marry you anyway'
console.log(rude)

var myStraw = "This is the start. " +"This is the second.  " +"This is the third."
 console.log(myStraw)


var myString = "This is the starting point.   "
myString += "This is the second sentence.  "
console.log(myString)

var myName = "Linkin Park"

var songName = "Heavy"

var Detail = "Song name is  " + songName+  " sung by  "  +myName+ "";
// literal //
var literal = `Song name  ${songName} sung by ${myName}`
 console.log(Detail)

// apprnding variable 

var anAdjective = "Cool"

 var whoWeAre = "One";

whoWeAre   += anAdjective;

 console.log(whoWeAre)


var firstLegth =0
var rightNow = "LinkinPark"
firstLegth = rightNow.length
firstLegth = rightNow[2]
console.log(firstLegth )
 var jellyFish = "Clow"
getTheFirstTwoLetter =jellyFish[jellyFish.length- 2]
 console.log(getTheFirstTwoLetter)

function randomWord(noun, adjective, verb, adverb){

var result = `${noun} is ${adjective}. He ${verb} very ${adverb}`;
  return  result
}
console.log(randomWord("Zayn", "singer", "sings", "romantically"))

//arrays hepl us create several piece  of data at one's place
//nested array or multie dimensional array

var myArr = [['tightrope', 'heave'], ['zayn', 'linkin park', 34]]
var ourArray = [50, 60, 70]
   ourData = ourArray[0]
//modifying data

ourArray[0] = 6
  console.log(ourArray);
 
console.log(ourData)

// three layer array 
var myArray = [[1,2,3], [4,5,6], [7,8,9] [10, 11, 12], 13, 14]

var myData = myArray[1][2]

console.log(myData)
// append data of an array to an array


var theArray = ["Johny", "J", 'Burger']
 theArray.push(["Coke", "fries"])


console.log(theArray)
// removing items from an array

var songs = ["tightrope", "gone", "better", "hawaii"]
// songs.pop()
// if we want remove something from the beginning of the array
songs.shift()
// adding in the begining of the array
 songs.unshift('Two of us')
console.log(songs);

var restaurantDate = [["Burger", "Soda", "Nachos"], ["pizza", "sauce"], ["red vevet cake", "panacotta"], ["Virgin Mohito", "water"]]

console.log(restaurantDate)

//creating function passing the values

function my(a,b){
  return (a-b)
}
console.log(my(20, 10))


// global scoped fun

var myGlobal = 10;

 function fun1(){
 oopsGlobal = 5;
 }

 function fun2(){
  var output = "";
 if (typeof myGlobal != "undefined"){    output += "myGlobal: " + myGlobal   }
   if(typeof oopsGlobal != undefined){
   output += 'oopsGlobal: ' +oopsGlobal;

 }
   console.log(output)
 fun1()
 fun2()
// difference between global or local scoped fun .. local scoped function takes over the president it is more powerful 

var outerWear = "T-Shirt"
 function myOutfit(){ 
    var outerWear = "Jacket" 
      return outerWear
}
console.log(myOutfit())

function minusFive(num){
  return num -5
}
console.log(minusFive(10))

 var changed = 0;

 function chang(num){
   return (num +5) / 3
 }
 changed = chang(10)

console.log(changed)

function nextInLine(arr, item){
     arr.push(item)
return arr.shift() }
 var arrays = [1,2,3,4,5]
 console.log("Before: "+JSON.stringify(arrays))
 console.log(nextInLine(arrays , 6))
 console.log("After: "+JSON.stringify(arrays))

// ==/  /

 function test(x)
 { if(x == 12){
     return "Yes"
   } return "No"
 }
 console.log(test())
//  "===" this does the same thing but cares about the data types

//ternary operator 
//  

 function strictNotEqual(x){
   if(x !==17){
     return "Not Equal"
   } return "Equal"
 }
 console.log(strictNotEqual(17))


function  testLessThanEqual(X){
   if(X <= 10){
     return "0, 1, 2, 3,4,5,6,7,8,9,10"
   }
 }
console.log(testLessThanEqual(5))
 function logicalAnd(X){
// // both statement should be true
  if(X <= 50  && X>= 25){     return "true"

  }     return " not true" }
console.log(logicalAnd(20))


function logicalOr(X){
     // one statement should be true

  if(X <= 50  || X>= 25){

      return "true"

    }     return " not true"

  }
     console.log(logicalOr(20))

     function orderLogic(X){

    if(X < 5){
         return 'X is less then 5'

}  else if(X < 10){

    return "X is less then 10"

  } else {

    return "Greater Than or equal to 10"
     }
    }
      console.log(orderLogic(11));
 
      function testingFunc(num){

    if(num < 5){

    return "Tiny"

  }
     else if(num < 10){

    return "Small"

  }
     else if(num < 15){

    return "Medium"
     }
       else if(num < 20){    return "Large"
  }
  else if(num >= 20)     return "Huge"
   }
console.log(testingFunc(50))
 //make a budget lis/ 
 function budgetList(cash) {
  if(cash <= 200){
   return "Lipstick, Jutti, EyeLinear"
  }
else if(cash  <=500){
 return "Bag, Ring, DiamondCard ring"
   } 
  else if(cash  <=500){
     return "Piano, Bass, Guitar"
 } 
 else if(cash  <=1000){
    return "Piano, ElectricGuitar, Cazon"
  } 
  
 }

 console.log(budgetList(400));

 var golf= ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Home"]


 function golfScore(par, strokes){


  if(strokes == 1){
    return golf[0]

} else if(strokes <= par - 2){

    return golf[1]
     }
        else if(strokes ==par - 1){
           return golf[2]
       } 
        else if(strokes == par ){

      return golf[3]
     } 
        else if(strokes == par +1){
           return golf[4]

    } 
      else if(strokes == par +2){
            return golf[5]
        }
          else if(strokes == par +2){
            return golf[6]
         } 

        return "Does it get eassier"
  }

console.log(5,4)
// when it is going home

 console.log(golfScore(5,8)); /// give us the output of home

function testingSwitch(val)
{ var answer = ""
   switch(val ){
   case 1:
   answer = "alpha";
   break;
   case 1:
   answer = "beta";
  break;
   case 2:
   answer = "alpha";
   break;
      case 3:
      answer = "gamma";
      break;

   case 4:

  answer = "delta";
     break;

}
      return answer
  
  }

  console.log(testingSwitch(1))
//  default  works like else if
 function zaynSongs(val){
     var  outCome = ""

switch(val){
     case  "Better":

outCome = "Aesthetic"
 break;

case  "Tightrope":

  outCome = "Why'/s none listening"

break;
   case  "RoadSide":
 outCome = "Why'/s none listening"
 break;
  default:
  outCome = "This is not Zayn's songs"

 break;

}
 return outCome
 }
 console.log(zaynSongs("Heatweaves"))

 function circles(songs){
   var answer = "";
  switch(songs) {
     case 1:
      case 2:
    case 3:

      case 4:

      answer ="Runnaway";

        break;
           case 5:

      case 6:

    case 7:

    case 8:
     answer ="I'll Find You";

     break;

      case 9:

    case 10:

    case 11:

   case 12:

answer ="Every  Breath is a battle";

      break;

    } return answer
 }


 console.log(circles(1));
  function chanFunc(val){
     var outPut = "";
    if( val === "I'll Find You"){
       outPut = "Lecrae"


} else if (val === "Circles"){
         outPut = "Post Malon"
   }else if (val === "Molly"){

    outPut = "Lil Wayne"
       } else if(val ==="B.o.B") {

      outPut = "Both of us"

  } else if(val === "Koffee"){
         outPut = "Taylor Swift"
   } return  outPut
 } 
   console.log(chanFunc("Koffee"))

// // transform that chan func into switches

function chanFunToSwitch(val){
     var result = "";
    switch(val){

  case "I' ll Find You":
         result = "Lecrae " ;
       break;

    case "Circles":
         result = "Post Malon " ;
       break;

    case "Molly":
         result = "Lil Wayne " ;

    break;
       case "B.o.B":

  result = "Both of us " ;

  break;
       case "Koffee":

  result = "Taylor Swift "; 
     break;

 default:

result ="nothing";
         break;
   }  return result;
 }


 console.log(chanFunToSwitch("Koffee"))

 function ab(a,b){
     if(a< 0 || b <0) {
       return undefined;

}

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2))
 }
 console.log(ab(-1,2))
//counting cards
/// creating a card  game 
var count = 0;
 function cc(card) {
 switch(card) {
   case  2:
   case  3:
   case  4:
   case  5:
   case  6:
     count ++;
   break;
   case 10:
   case "J":
     case "Q":
         case "K":
         case "A":
           count --;
           break;
 }
 var holdBet = "Hold"
 if(count >0){
   holdBet = "Bet"
 }
     
   return  `We are goona  ${holdBet}`
 }

 console.log(cc("A"))


/* Objects : Creating a variable accessing them  with variables*/

var testObj = {

  12: "BaseBall",

  14: "Cricket",
     16: "Mishri",
 }

  var numBer = 16;

var player = testObj[numBer]

console.log(player)

//updating objects for this we use dot nation with the property

var myFriendlist = {
   "name": "Joe",
  "age": 23,

 "charcteristics": "Loyal And Awesome",

"introduction": function (){
     return `He is ${this.name} and he is ${this.age} years old. He is amazingly ${this.charcteristics}`

}

}
 myFriendlist.name = "Joe Goldberg"
 console.log(myFriendlist.introduction())
///Adding properties to an object using dot notation or brackets



var myFriendlist = {
   "name": "Joe",

"age": 23,
 "charcteristics": "Loyal And Awesome",
 "introduction": function (){
     return `He is ${this.name} and he is ${this.age} years old. He is amazingly ${this.charcteristics}. He onece gave me ${this.gifts}. Those were the best gifts ever `
 }

}
 myFriendlist.name = "Joe Goldberg"
 myFriendlist.gifts ="Guitar, Chocolates"
 myFriendlist['adjective'] ="Nice"

delete myFriendlist.adjective
 console.log(myFriendlist.introduction());


// turning a switch statement  inta a object accessing the values


function cities(val){

                                  var  where = ""


      switch(val) {

  case "alpha":

  where ="Adms";

    break;
//   case "bravo":
     where ="Boston";

break;
       case "Charlie":

    where ="Chicago";

   break;
   case "delta":
     where ="Denver";

break;

    case "echo":

  where ="Easy";

    break;

    case "foxrot":

  where ="frank";

    break;
   } return where;

  }
  console.log(cities("delta"));


  function cities(val){
     // var result = "";
     var lookup = {
       "alpha": "Adams",
       "bravo": "Boston",
       "charlie": "Chicago",
       "echo": "Easy",
       "foxrot": "frank"
   }


   return    lookup[val];

  }
    console.log(cities("charlie"));


/// hasonproperty  method

var myObj = {
   gift: "pony",

pet: "kitten",

 bed: "sleigh"
 }
 function chckObj(checkProp){
     if(myObj.hasOwnProperty(checkProp)){

  return myObj[checkProp]

  } else {

    return "Not Found"

  }
 }
   console.log(chckObj("gift"));
// setup : nested arrys
 var myStorage = {
     "car": {
       "inside": {
         "glove box": "maps",

"passenger seat": "crumbs"

    }, 

    "outside": {
             "trunk": "jack"
       }
     }
   }
// //lets console.log glove box so that we get thier property
 var gloveBoxContents =  myStorage.car.inside["glove box"]
 console.log(gloveBoxContents);
 var myPlans = [
 {
   type: "flowers",
   list: [
     "roese",
     "imbrosia",
     "dandelion"
 ]
 },
 {
   type : "tresss",
   list: [
     "fir",
     "pine",
     "birch"
   ]
 }
 ]
// // lets get second tress list values which is arrys
 console.log(myPlans[1].list[1]);

var collection = {
     "2019": {
       "album": "Nobody Is Listening",

 "artist": "Zain Javed Malik",
         "tracks": [
             "tigthrope",
           "better"
       ]
     },
        "2020":{

      "album": "Love yourself",
         "artist": "Bts",
         "tracks": [

      "Boy with Luv",

      "Dynamite"

    ]
     },
       "2021":{

      "album": "'R'",
          "artist": "Rose",

  "tracks": [

     "Gone",
            "On the ground"
         ]
     }
   }
    var collectionCopy = JSON.parse(JSON.stringify

//   // json.stringy means keep a collection of  a object
   (collection))
 function updateRecords(id, prop, orange){
// // delating the property if it has no value

if(orange === ""){

  delete collection[id][prop]
 } else if   (prop === "tracks") {
// // creating a property if it doesn/t exit
 collection[id][prop] = collection[id][prop] || [];

collection[id][prop].push(orange)
 } else {
     collection[id][prop] = orange;
 }

return collection
   }
    updateRecords(2021, "tracks", "Gone , On the ground")

   console.log(updateRecords(2021,"artist", "rose"))

var myArray = []
 var i = 0;
 while(i < 5) {
     myArray.push(i);
     i++;
 }
 console.log(myArray);
 var myArray = []
 var i = 0;

while(i <= 5) {
     myArray.push(i);
   i++;
 }
 console.log(myArray);
//for loops
 ourArray = []
 for(var i = 0; i<=10; i++ ){
   ourArray.push(i)
 }
 console.log(ourArray);

 var anotherArray = [];

 for(var i = 2; i <=16; i++){
   anotherArray.push(i)
 }
 console.log(anotherArray);

// cretaing a Even number loops
 var Even =[];
 for(var i =0; i< 10; i+= 2){
   Even.push(i)
 }
 console.log(Even);
 var Odd =[];
 for(var i =1; i< 10; i+= 2){
   Odd.push(i)
 }
 console.log(Odd);

//reversing the above code//
// start by 10 and decrement the number

var battle = [];

for(var i =10; i>=0 ;  i -- ){

  battle.push(i)

  }

 console.log(battle);

 var  waterMelon = [];

 for(var i =20; i>0;  i -= 2 ){

  waterMelon.push(i)

  }
 console.log(waterMelon);
// // odds number 20 to 0
 var  waterMelon = [];
 for(var i =19; i>0;  i -= 2 ){
   waterMelon.push(i)
 }
 console.log(waterMelon);
}
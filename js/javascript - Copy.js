// // primitives = number, string, null, undefined, boolean
// // reference = () {} []

// // var a = 10;
// // var b = 20;

// // if (a == b) {
// //   console.log("Rony");
// // } else {
// //   console.log("Joya ");
// // }

// // for (var i = 25; i < 51; i++) {
// //   console.log(i);
// // }

// // while (condition) {
// //   console.log("Hello");
// // }
// // condition = true or false

// // var isRunning = true
// // while(isRunning){
// //   var rand =Math.floor(Math.random()* 10 +1 )
// // if(rand == 7){
// //   console.log("You got joya")
// //   isRunning = false
// // }else
// //  console.log("Try again You got "+  rand)
// // }

// var x = 30;

// while (x < 42) {
//   x++;
// }

// // // parameter

// function rony(a, b) {
//   console.log(a, b);
// }
// // // rgument
// rony(20, 21);

// // push add
// // pop remove
// // unshift add at the beginning
// // shift remove at the beginning
// // splice add or remove at the middle
// var arr = [1, 2, 3, 4, 5, 6];
// arr.push(7)
// arr.pop()
// arr.unshift(0)
// arr.shift()
// arr.splice(2, 0, 7)
// arr.splice(2, 1, 7)
// arr.splice(2, 1, 7, 8, 9)

// var manus = {
//   name: "rony",
//   age: 25,
//   gender: "male",
//   address: {
//     street: "street 1",
//     city: "city 1",
//     country: "country 1",
//   },
//   hobbies: function () {},
// };
// manus.age = 30;
// console.log(manus);

// function az() {
//   for (var i = 1; i < 12; i++) {
//     console.log(i);
//   }
//   console.log(i)
// }
// az()

//

/* 
////// forEach
var a = [10,20,20,30,41,52,,60,70,82,80,90]
a.forEach(function(val){
    console.log(val-10)
})
    */

/* //For In 
var bari = {
    name: "rony",
    age: 22,
    gender: "male",
}

for(var ghor in bari){
    console.log(ghor, bari[ghor])
} */

/* // Do while

var a = 20

do{
    console.log(a,"Rony")
    a++;
}
while(a<30) */

/* ///////// Call back Function 
setTimeout(function (){
    console.log("Hello Beby ")
},2000)
 */


/* //Frist Class Function 

function abcd(a) {
    a();
  
}

abcd(function(){console.log( "Okay")}) */


var a = [10, 20,30,41]
console.log(a.typeof)

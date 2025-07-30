// // {} Ye obj hota hai
// // [] or ye Array
// // [{}] or ye array of object, or ek array mai bht saary Object ho skte hain.
// // agar koi bhi chz se phele ++ laga h (++a) tw who chz phele add ho hgi then value show kregi.
// // likn agar kisi chz k bd ++ laga ho (a++) tw us wqt direct a ki value show hgi qk BROWSER a ko phele read krega or ++ ko bd. 
// // or agr kahi double == laga hoto who bagair type check kry result show krdega. 
// // or jaha triple === laga ho waha browser value sath sab value ki type bhi check krega. 
// // or jaha != huto iska mtlb agar esa nhi h tw ye else statement wala kam krtta hai

// let info = [{
//     name:"Asad",
//     age: 20,
//     gmail: "asraza311gmail.com",
//     city : "karachi",
// },
// {
//     name:"Asad",
//     age: 18,
//     gmail: "asrazagmail.com",
//     city : "kHI",


// }];

// info[0].name = "Raza";
// info[0].age = 19;
// info[1].name = "Raza";
// info[1].age = 19;

// //  console.log(info[0].name);
// //  console.log(info[0].age);
// //  console.log(info[1].name);
// //  console.log(info[1].age);

// // let x = 5;
// // x++;
// // console.log(x)

// // let num = [1,2,3];
// // num[0]++;
// // console.log(num)


// let array = [10,20,30];
// console.log(array[1]== 20);


// let mode = "Green";
// let color;

// if(mode === "dark"){
//     color = "Black"
// } else if(mode === "blue"){
//     color = "Blue"
// }
// else if(color === "pink" ){
//     color = "pink"
// }else{
//     color = "white"
// }
//  console.log(color);

//  let age = 18;

//  let result = age >= 20 ? "Adult" : " Not Adult";
//  console.log(result);

// //  let name = prompt("Hello");
// //  console.log(name);

// let num = prompt("Enter a Num");

// if(num % 5 ===  0){
//     console.log(num, "is a multiple with 5")
// }else{
//     console.log(num, "is not a multiple with 5")
// };

// let score = 90;
// let grade;

// if(score >= 90 && score <= 100){
//     grade = "A";
// } else if(score >= 70  && score <= 89){
//    grade = "B";
// }else if(score >= 60  && score <= 69){
//    grade = "C";
// }else if(score >= 50  && score <= 59){
//    grade = "D";
// }else if(score >= 0  && score <= 49){
//    grade = "F";
// }
// // console.log("according to your scores, your grade was : ", grade);
//  for (let count = 1; count <= 1000; count++){
//     console.log("Batman");
//  }
//  console.log("Loop has ended");

//  let sum = 0;
//  for (let i = 0; i <= 10; i++){
//     sum = sum + i;
//  }
//  console.log("sum=" ,sum);
//  console.log("Loop has ended");
// for (let i = 1; i <=100; i++){
//     console.log("i =" ,i);
// }
// let i = 1;
// while (i <= 100){
//     console.log("Batman");
//     i++;
// }

// let i = 1;

// do{
//     console.log("i=", i )
//     i++;
// } while(i <= 10);

// let str = "BatManBatman";
// let lenght = 0; 
// for (let val of str){
//     console.log("val=", val)
//     lenght++;
// }
// console.log("String lengt", lenght);

// let student = {
//     name: "Asad",
//     age: 20,
//     cgpa: 6.5,
//     isPass: true,
// }

// for(let key in student){
//     console.log("key=",key, "value", student[key]);
// }
 
// for (let i = 1; i <=100; i++){
//     if(i%2 ===0)
// console.log("i=", i)}
// let gameNum = 25;
// let userNum = prompt("Guess the Correct Num :");

// while(gameNum != userNum){
//     userNum = prompt("You enter the wrong num. Try Again :");
// }
// console.log("Congratulation You Guess The Correct Num");

// let obj ={
//     pen: "Pen",
//     price: 10,
// }
// let result = `the cost od ${obj.pen} is ${obj.price} rupees`;
// console.log(result)
// // console.log("the cose of ", obj.pen, "is", obj.price, "rupees");
// console.log("Bat \t man")

// let str = "Apna Collage"
// str = str.toLowerCase()
// console.log(str);

// let str = "Batman"
// console.log(str.slice(0, 6));

// let str = "batman"
// let str2 = "Robin"
// let res = str2.concat(str)
// console.log(res);

// let str = "Batman";
// console.log(str.replace("B","f"));

// // let fullName = prompt("Enter Your Full Name Without Space");

// // let userName = "@"+ fullName + fullName.length;
// // console.log(userName)

// // // let heros = ["Btaman", "Superman", "Spiderman", "Loki"];

// // // for (let i = 0; i < heros.length; i++) {
// // //     console.log(heros[i]);
// // }
// // let cities = ["karachi","hyd","Quetta"];

// // for (let city of cities) {
// //     console.log(city.toUpperCase());
// // }

// // let marks = [85, 97,44, 37, 76,60];
// // let sum =0;

// // for (let val of marks){
// //     sum = sum + val;
// // }
// // let avg = sum / marks.length;
// // console.log(`avg marks of the class= ${avg}`);


// // let i = 0;

// // for (let val of item){
// //     console.log(`value at index ${i} = ${val}`);
// //     let offer = val / 10;
// //     item[i] = item[i] - offer;
// //     console.log(`value after offer = ${item[i]}`)
// //     i++
// // }

// // let item = [200, 400, 540 ,676,987];

// // console.log(item.toString());
// // console.log(item);

// // let marvelHeroes= ["thor","spiderman","ironman"];
// // let dcHeroes =["Superman", "batman", "superwomen"];

// // let heroes = marvelHeroes.cancat(dcHeroes);

// // console.log(heroes);

// // let arr = [1,2,3,4,5,6,7,8,9,10]
// // arr.splice(2,4,101,102,103,104)

// // console.log(arr);

// // let company = ["Bloomberg","Microsoft","Uber","Google","IBM","Net"]
// // let str = company.toString();

// // company.shift();
// // company.splice(2,1,"Ola");
// // company.push("amazon")
// // console.log(str);
// // console.log(str.length);


// // function sum(x, y) {
// //     s = x + y;
// // //     return s;
// // //  }
// // //  let val = sum(3, 4);
// // // console.log(val)

// // // const arrowMul = (a, b)=> {
// // //     console.log(a * b);
// // // }
// // // arrowMul(2, 2)

// // // console.log(arrowMul)

// // function countVowels(str) {
// //   let count = 0;
// //   for (const char of str) {
// //     if (
// //       char === "a" ||
// //       char === "e" ||
// //       char === "i" ||
// //       char === "o" ||
// //       char === "u"
// //     ) {
// //       count++;
// //     }
// //   }
// //   console.log(count);
// // };

// // let countVow = (str)=>{
// //     let count = 0;
// //   for (const char of str) {
// //     if (
// //       char === "a" ||
// //       char === "e" ||
// //       char === "i" ||
// //       char === "o" ||
// //       char === "u" 
// //     ) {
// //       count++;
// //     }
// //   }
// //   console.log(count);


// // };

// // let arr =[1,2,3,4,5,6,7,8,9]

// // arr.forEach(function countval(val){
// //     console.log(val);
// // });


// function  myfunction (){
//    console.log("hello hammad");
// }

// myfunction();


// let arr =[1,2,3,4,5,6,7,8,9]

// arr.forEach(function (val){
//     console.log(val);
// });

// function mul(a, b){
//     return a*b;
// }

// const arrowMul = (a, b)=>{
//     return a*b;
// }

// const printHello =( )=>{
//     console.log("Hello")
// }

// function countVowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);

// }

// let arr1 =  ["Karachi","Peshawar","Quetta"];

// arr1.forEach((val, idx, arr1)=> {
//     console.log(val.toUpperCase(), idx, arr1);
// });

// let nums = [2,4,6,8,10]

// let calsSquare = (num)=> {
//     console.log(num * num);
// }
// nums.forEach(calsSquare);

// // nums.forEach((num)=>{
// //     console.log(num * num);
// // });
// let num = [2,4,6,8,10]

// let newArray = num.map((val) =>
// {
//     return val*val;
// })
// console.log(newArray);


// let num = [2,3,4,5,6]

// let newArr= num.filter((val)=> {

//     return val % 2 === 0;


// }
// );

// console.log(newArr);

// let num = [1,2,3,4]

// let outPut = num.reduce((res, curr)=>{
//     return res > curr ? res : curr;

// })
// console.log(outPut)

// let num = [80,91,89,98,97,60]

// let studentMarks = num.filter((val)=>{
//     return val > 90;

// })
// console.log(studentMarks)

// let n =prompt("Enter a number:");

// let arr = [];

// // for (let i = 1; i <= n; i++) {
// //     arr[i - 1] = i;
// // }
// // console.log("Array:", arr);

// // // Sum calculation
// // let sum = arr.reduce((prev, curr) => {
// //     return prev + curr;
// // }, 0);
// // console.log("Sum:", sum);

// // // Factorial calculation
// // let factorial = arr.reduce((prev, curr) => {
// //     return prev * curr;
// // }, 1);
// // console.log("Factorial:", factorial);
// function greet(name){
//     console.log(name)
// }
// greet("Asad");

// let num = [1,2,3,4,5,67,8,9,10]

// num.forEach(function (num){
//     console.log(num);
// })

// let nums = [1,2,3,4,5]
//  let square = nums.map((num)=> {
//     return num * num;
//  })
//  console.log(square);

//  let ages = [12,18,19,20,24,25]

//  let adults = ages.filter(function(age){
//     return age >= 18;
//  })

//  console.log(adults);

//  let arr = [1,2,3,4,5]

//  let sum =arr.reduce((prev,curr)=>{
//     return prev + curr
//  })
// console.log(sum);

// let heading = document.getElementsByClassName("heading");
// console.dir(heading);
// console.log(heading);

// let element = document.querySelectorAll("p")
// console.dir(element);
// console.log(element);

// let div = document.querySelector("div");
// console.dir(div);

// let heading = document.querySelector("h2")

let h2 = document.querySelector("h2")
console.dir(h2)
h2.innerText = h2.innerText +  " From Batman";

let divs = document.querySelectorAll(".box")
divs[0].innerText = "new Unique value1";
divs[1].innerText = "new Unique value2";
divs[2].innerText = "new Unique value3";















































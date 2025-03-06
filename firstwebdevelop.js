// console.log("First web Develop");
// first_name = "Abul Rehman";
// age = 24;
// num1 = 20;
// num2 = 30;
// res = num1+num2;
// console.log(first_name);
// console.log(age);
// console.log(num1+num2);
// "camael case" which mean that if we assigne a variable of 2 word start of first letter small of first letter and senced word start will be capital letter
// fullName = "Jooon"3 type of keyword of diclaration let var and const.
// const pi= 3.14;
// let radius = 33;
// console.log(2*pi*radius);
// these are the primitive data type
// let a = 10;
// let follow = true;
// let unfollow = false;
// let x;
// let y= null;
// console.log(typeof a);
// console.log(typeof unfollow);
// console.log(typeof x);
// console.log(typeof y);
// let k= BigInt(12345);
// console.log(typeof k);
// lets make an Object
// const Student = {
//     StudentName : "Rehman Tariq",
//     StudentAge : 23,
//     StudentCGPA : 3.4,
//     StudentRegistration_No : "2023-ag-7850",
// };
// console.log(Student);
// console.log(Student.StudentAge);
// console.log(Student.StudentCGPA);
// const profile = {
//     username: "jon12",
//     fullName: "Jone Don",
//     Bio: "I am a Developer.",
//     Posts:33,
//     follower:199,   
//     following:5,   
// };
// arithmtic operator
// let s = 10;
// let b= 20;
// console.log(s+b);
// console.log(s%b);
// console.log(s-b);
// console.log(s*b);
// console.log(s/b);
// console.log(s ** b);
// console.log(s**s);
// assinment operator
// let s = 10;
// let b= 20;
// s+=2;
// s-=2;
// s*=2;
// s/=2;
// s%=2;
// console.log(s)
// comparison operator
// (equal to == )(not equal to !=)(grater than >)
// (less than <)(grater than equal to >=)
// (less than equal to <=)  
// logical oprator 
// && (and oprator )
// let cond1 = (s < b);
// let cond2 = (a === b);
// console.log(cond1 && cond2 );
// || (or operator)
// let s = 5;
// let b = 6;
// let a = 10;
// let cond1 = (s < b);//true
// let cond2 = (a == 9);//true
// console.log(cond1 || cond2 );
// let age = 45 ;
// if (age > 10 && age <15 ){
//     console.log("you can play with chilldren");
// }
// if(age>=16 && age <= 20 ){
//     console.log("you can play with us!");
// }
// else{
//     console.log("you can play with internationl Team");
// }
// let mood="dark";
// let color;
// if(mood==="dark"){
//     color= "black";
// }
// else{
//     color="white"
// }
// console.log(color);
// let num = 40;
// if (num%2 == 1){
//     console.log("your number is odd")
// }else{
//     console.log("your number is even")
// }
// let buget = 120000;
// let buy_Bike;
// if(buget>= 60000 && buget<= 70000){
//     console.log("showing the 2nd hand 70 bike");
// }else if(buget>= 70000 && buget<= 100000){
//     console.log("showing the 2nd hand 125 bike");
// }else{
//     console.log("showing the New bikes");
// }
// // ternary operator
// // condition ? ture output : false output
// let res = age > 18 ? "adult" : "Not adult";
// console.log(res);
// // switch statement
// let expr = prompt("Enter a Fruit Name:");
// switch (expr) {
//     case "Oranges":
//       console.log("Oranges are $0.59 a pound.");
//       break;
//     case "Apples":
//       console.log("Apples are $0.32 a pound.");
//       break;
//     case "Bananas":
//       console.log("Bananas are $0.48 a pound.");
//       break;
//     case "Cherries":
//       console.log("Cherries are $3.00 a pound.");
//       break;
//     case "Mangoes":
//     case "Papayas":
//       console.log("Mangoes and papayas are $2.79 a pound.");
//       break;
//     default:
//       console.log(`Sorry, we are out of ${expr}.`);
//   }
//   console.log("Is there anything else you'd like?");
  
// for(let i=1; i<=5; i++){
//     console.log("Pakistan");
// };
// let q=1;
// while(q <= 5){
//     console.log(q);
//     q++;
// };
// // for of loop and for in 
// let str = "rehamn tariq";
// for(let val of str){
//     console.log("val = ",val );
// }
// lets create a game 
let gameNum = 17;
let userNum = prompt("Enter the Number: ");
while(gameNum != userNum){
    userNum = prompt("Enter again: ");
}
console.log("cogratulation, You got it");
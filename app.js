// const cowsay=require("cowsay");
// console.log(cowsay.say({text: "I am a moody"}))
// const appName="Basic Keyword Demo";
// const currentData=9;
// const daysInWeek=7;
// console.log(appName+" "+currentData+" "+daysInWeek);

// const a=5;
// console.log("The value is:"+a);
// console.log(`The value is :${a}`);

// function greet(name)
// {
//     let message=`Hello, ${name}! `;
//     return message;
// }
// const greeting=greet("Alice");
// console.log(greeting);
// //loop
// let counter=0;
// while(counter<3)
// {
//     console.log(`Loop iteration:${counter}`);
//     counter +=1;
// }
// console.log("while loop finished.");
// const fruits=["apple","Banana","Cherry"];
// for(let i=0;i<fruits.length;i++)
// {
//     const fruit =fruits[i];
//     console.log(`Fruit at index ${i} : ${fruits}`);
// }
// //
// function calArea(length,width=1)
// {
//     return length*width;
// }
// const rectangleArea=calArea(5,10);
// console.log(`Area of a 10x5 rectangles:${rectangleArea}`);
// const squareArea=calArea(8);
// console.log(`Area of a squarewith side 8 is ${squareArea}`)

// //without defining function
// const getSum = function(x,y){return x+y;}
// const sum = getSum(15,56);
// console.log(sum);
// const multiply=(x,y)=>x*y;
// console.log(`The multiplication is ${multiply(4,9)}`);

//problem 1 find the sum of numbers below 1000 that are divisible by 3or 5
// let sum=0
// for(let i=1;i<=1000;i++){
//     if(i%3==0 ||  i%5==0){
//         sum+=i;
//     }
// }
// console.log(sum);

// //find the sum of the even fibonacci number under 4000000
// let a=1;
// let b=1;
// let c=0;
// let sum=0;
// while(c<4000000)
// {
//     if(c%2==0)
//         {
//             sum = sum + c;
//         }
//         c=a+b;
//         a=b;
//         b=c;
// }
// console.log(sum);

// //the prime factor of 13195 ar
// function prime(num){
//     let larfact=1;
//     while (num%2===0){
//         larfact=2;
//         num=num/2;
//     }
//     let fact=3;
//     while(fact*fact<=num){
//         while(num%fact===0){
//             larfact=fact;
//             num=num/fact;
//         }
//         fact+=2;
//     }
//     return larfact;

// }
// console.log(prime(600851475143));


//find for 100!
// int n=10;
// function factorial(n)
// {
// let f=1;
// while(n>=1)
// {
//     f=f*n;
//     n=n-1;
// }
// return f ;
// }
// console.log(factorial(n));

//
// let a="256";
// let b =parseInt(a);
// console.log(b+1);

// let A=["2","5","6"];
// let B=A.join('/');
// console.log(B);

//JSON javascript object notation
const myObject={
    "name":"Alice",
    "age":25,
    "isstudent":true,
    "hobbies":["reading","coding"],
    "address":{
        "city":"New York",
        "zipcode":"1001",
    }
}
console.log(`Name:${myObject.name}`);
console.log(`Age:${myObject.age}`);
console.log(`Hobbies:${myObject.hobbies}`);
console.log(`City:${myObject.address.city}`);
console.log(`Zipcode:${myObject.address.zipcode}`);

//Array
for(i=1;i<=100;i++)
    a=[2,3,4,5,6];
a.push(i)
a.map(x=>x*3).filter(x=>x%5==0).reduce((a,x)=>a+x)
function abc(x)
{return x*3}
console.log(abc);

//
let num=[]
for(let i=0;i<=100;i++){num.push(i)}
console.log(num.map(x=>x*3).filter(x=>x%5==0).reduce((a,x)=>a+x))

//
let sum=0;
const user=
[
    {name:`Alice`,age:25},
    {name:`Bob`,age:30},
    {name:`Charlie`,age:25}
];
total=user.map(x=>x.age).reduce((a,x)=>a+x)
console.log(`Avg: ${total/user.length}`)



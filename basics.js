// console.log("Hello World");
// let age = 18;
// if(age>=18){
//     console.log("You can vote");
// }
// else{
//     console.log("You can not vote");

// }

// let size = 'M';
// if(size==='XL'){
//     console.log("Price is 240rs");
// }
// else if(size==='L'){
//     console.log("Price is 120rs");
// }
// else if(size==='M'){
//     console.log("Price is 80rs");
// }
// else{
//     console.log("Price is 40rs");
// }

// let color = 'green';
// switch(color){
//     case 'red':
//         console.log("STOP!");
//         break;
//     case 'green':
//         console.log("GO!");
//         break;
//     default:
//         console.log('Light is break');
// }

// let str = 'Akshat tIwarI';
// console.log(str.toUpperCase()); //UpperCase
// console.log(str.toLowerCase()); //LowerCase
// console.log(str.slice(0,6)); //Akshat
//  console.log(str.replace("Akshat","Rajesh"));
//  console.log(str.repeat(2));
// let arr = ["red","blue","green","Purple"];
// console.log(arr.slice(0));
// for(let i = 0;i<=5;i++){
//     console.log(i);
// }
// for(let i = 5;i<=50;i+=5){
//     console.log(i);
// }
// let i = 0; //initialisation
// while(i<=50){ //condition
//     console.log(i);
//     i++; //updation
// }
// let fruits = ["Apple","Banana","Guava","Kiwi"];
// for(let i = 0;i<fruits.length;i++){
//     console.log(i,fruits[i]);
// }
// let heroes = [["Ironman","Spiderman","Thor"],["Superman","Wonderwomen","Flash"]];
// for(let i = 0;i<heroes.length;i++){
//     console.log(`List ${i}`);
//     for(let j = 0;j<heroes[i].length;j++){
//         console.log(heroes[i][j]);
//     }
// }
// let fruits = ["Apple","Mango","Kiwi"];
// for(fruit of fruits){
//     console.log(fruit);
// }
// let num = 2;
// let arr = [1,2,3,4,5,6,2,3];
// for(let i = 0;i<arr.length;i++){
//     if(arr[i]===num){
//         continue;
//     }
//     else{
//         console.log(arr[i]);
//     }
// }
// let num = 678;
// let digit = num.toString().length;
// console.log(digit);
// let student = {
//     name : "Akshat",
//     age : 20,
//     gender : "Male",
//     city : "Lucknow"
// };
// console.log(student);
// let x = {
// add (a,b){
//     return a+b;
// },
// sub (a,b){
//     return a-b;
// }
// };
// const data = {
//     name: "Akshat",
//     Physics: 98,
//     Maths: 92,
//     English: 79,
//     Chemistry: 91,
//     getAvg(){
//         let avg = (this.Physics+this.Maths+this.English+this.Chemistry)/4;
//         console.log(avg);
//     }
// };
// data.getAvg();
// const sq = (n) => (n*n);
// console.log(sq(2));

// let marks = [98,97,99,92,100];
// function print(marks){
//     console.log(marks);
// }
// marks.forEach(print);

// let num = [1,2,3,4];
// let sq = num.map((x)=>(x*x));
// console.log(sq); //[1,4,9,16]

// let nums = [1,2,3,4,5,6,7,8,9,10];
// let even = nums.filter((num)=>(num%2==0));
// console.log(even); //[2,4,6,8,10]

// let nums = [1,2,3,4];
// let sum = nums.reduce((num,add)=>num+add);
// console.log(sum); //10

// let Findmax = [1,2,3,5,7,2,0].reduce((max,el) => {
//     if(max>el){
//         return max;
//     }
//     else{
//         return el;
//     }
// });
// console.log(Findmax);

// let names = ["akshat","raj","Rahul","Abhishek","Dhruv"];
// let [winner,runnerup]=names;
// console.log(winner,runnerup);
//printing statement

//console.log()

// console.log(10)

//two ways :

//terminal - node [file name]
//extension - code runner

//how to write the js code:

//syntax :
//variable - container to store the values

//variable_type variable_name = value
//console.log(variable_name)

// const sugarbox = "sugar"
// console.log(sugarbox);

//variable types
///var
// var a = 10  //redeclaration
//      a = 5    //reassign
// console.log(a)

//let  :

// let b = 10 // it can't redeclare
//     b = 5 // reassign
// console.log(b);

//const :

// const c = 10 // it can't redeclare
//       c = 5  // it can't reassign
// console.log(c);

//Datatypes :

//Primitive dataypes :

//string - "@#$%^"
//number  - 1212 and 12.4
// var num = 10.1
// console.log(num);

// //boolean - true or false

// var t = false
// console.log(t);

// //null  :

// var n = null
// console.log(n);

// //undefined :

// let  a
// console.log(a);
// //non-primitive datatypes :

// //Array  - []  - collection of values and data within the square brackets

// var arr = ["Chennai",1,23.5,true,null]
// console.log(arr[3])

// //length : starts with 1
// // index : starts with zero

// //object - { }
// //collection of key and value pairs

// var obj = {

//      name : "hari",
//      age : 15,
//      std : "V"

// }

// console.log(obj)

//function :  block of code

//function statement or declaration

//syntax :

//function var_name(){
//code
//}
//var_name() //to call the function

// function box(j){ //parameter
//     console.log(j)
// }
// box(10) //arguments

// //parameter and arguments

// //parameter - is like an variable name
// //arguments = value

// // function box(x){  //parameter
// //     console.log(x)
// // }
// // box("js") //arguments

// //return :

// function cash(x){
//      return x
// }
// console.log(cash("Rs:"+100))

// //function expression  : storing the function inside the variable name is called function expression

// var fn = function(){ //anonymous function
//     console.log("HEllo im function expression ");

// }
// fn()

// //arrow function : short hand syntax :

// //syntax :

// //() => { }

// var arr = (x)=>{console.log(x*x)}
//  arr(5)

//Operators :

//Arithemetic operator

//+add , - sub , *mul , / div , % modulus , ** exponent ,  increment ++,decrement --

// var num = 2
// var num2 = 5
// console.log(num**num2);  //2^5 = 2x2x2x2x2 = 32

// //increment :

// var inc = 5
// inc++ //5+1
// console.log(inc);

// //decrement :

// var dec = 5
// dec--  // 5-1
// console.log(dec);

//Assignment operator  - first task  - to find the non-working arithmetic operators

// var num = 10
// num+=5  //15 += 5
// console.log(num);

//Logical operator :

//&& => and
// || => or
//! => not

// var a = 10
// var b = 10
// console.log(a != b);
//comparsion operator
//lessthan < , greaterthan > , lessthanorequal <= , greaterthanorequal >=

// var a = 10
// var b = 10
// console.log(a<=b);

//Equality  operator [interview question]

// == [double equals , loose equality]

//it only check the value not the datatypes

//  var num = 10
//  var num2 = "10"
//  console.log(num == num2);

// // ===[triple equals , strict equality]
// //it checks both the value and the datatypes
// var num3 = 10
// var num4 = "10"
// console.log(num3 === num4);

//Ternary operator

//syntax :

//(condition) ? "value_true_statement" : "value_false_statement"
// var age = 1000

// var limit = (age>=18 || age<=80) ? "He is eligible to vote" : "he is not eligible to vote"

// console.log(limit);

//Task :

//155 to 188  "he is eligible to ride" : "he is not eligible to ride"

//loop :

//for:
//syntax:

//for(initalization ; condition ; iteration[increment , decrement]){
//code
//}

// for(let i = 5 ; i>0; i--){
//        console.log(i);

// }
//steps :
//step 1 : i = 0 => 0<5[true] => print : 0 => i++ => 0+1 = 1
//step 2 : i = 1 => 1<5[true] => print : 1 => i++ => 1+1 = 2
//step 3 : i = 2 => 2<5[true] => print : 2 => i ++ => 2+1 = 3
//step 4 : i = 3 => 3<5[true] => pirnt : 3 => i++ => 3+1 = 4
//step 5 : i = 4 => 4<5[true] => print :4 => i++ => 4+1 = 5
//step 6 : i = 5 => 5<=5[true] => print : 5 => i++ => 5 + 1 = 6
//step 7 : i = 6 => 6<= 5[false] loop will stop

//string :

// let str = "Java"    //4
// for(let i = 0 ; i<str.length ; i++){

//        console.log(str[i]);

// }
//Task:
//avaj - interview question

// let str = "java"
// let store = " "

// for(var i = str.length-1 ; i>=0;i-- ){

//        store += str[i]
//        console.log(store);
// }
// console.log(store)

// 0 to 10 = 55

//while - Entry level condition checking loop

// var count = 0 //initailzation
// while(count<5){  //condition
//        console.log(count); //print
//        count++ //iteration

// }
//task :
//descending order

//do-while

// var docount = 5
// do{
//     console.log(docount);
//     docount++

// }while(docount<5)

//formethods  -

//forEach - to read the array

//syntax :

//var_name.forEach((value,index,acctualarray)=>)

// var weeks = ["sunday","monday","tuesday","wednesday","Thursday"]

// weeks.forEach((val,idx,accarr)=>console.log(val,idx,accarr))

//forin  - to read or loop the object

// var obj = {
//        name : "vijay",
//        dep : "IT"
// }
// //syntax :
// //for(var_type  var_name in obj_name){

// //}
// for(var x in obj){
//        console.log(x+"<=>"+obj[x]);

// }
//output :
// name <=> vijay
// dep <=> it

//forof  - string or array loop
//syntax:
//for(var_type var_name of str_name){
//}

// let str = "happy"
// for(var x of str){
//        console.log(x);

// }

//array methods :

//push  - to add a value in the last of an array

// var billcounter = ["jai","swetha","logan","gopal"]
// billcounter.push("sabari")
// console.log(billcounter);

// //pop
// billcounter.pop()
// console.log(billcounter);

//unshift

// var ap =["jai","swetha","logan","gopal"]
// ap.unshift("Sabari")
// console.log(ap);

// //shift
// ap.shift()
// console.log(ap);
// ap.shift()
// console.log(ap);

//concat  - used to add two or more arrays

// var fruits = ["apple","pineapple","iceapple"]
// var veg = ["potato","tomato","cucumber"]
// var cosmetic = ["powder","lipstick"]
// var cover = fruits.concat(veg,cosmetic)
// console.log(cover);

// //how to write js code :
// //datatypes
// //variable types
// //functions
// //operators
// //loop  - for methods
// //array methods

//sort :

// var num = [8,9,10,7,3,4,1,2,6,5]

// num.sort((a,b)=> b-a)

// console.log(num);

//split :
// string => array
// var s = "java script"
// var spl = s.split(" ")
// console.log(spl);

//join :
//array => string
// var j = spl.join("")
// console.log(j);

// //reverse:

// var str = "annanagar"

// var rev = str.split("").reverse().join(" ")

// console.log(rev);

//slice : slice is used to cut the array based on indices

// let birds = ["parrot","peacock","pigeon","eagle","vuluture"]

// let slice =  birds.slice(2,-1)

// console.log(slice);

//splice :

//syntax :

//var_name.splice(index,counter[0,1],value)
//0 => push and update
//1 => override and update

// let weeks = ["sunday","monday","tuesday","thursday","saturday"]
// weeks.splice(3,1,"Wednesday")
// console.log(weeks);

//includes :

// var inc = "javascript"
// var inc2 = inc.includes("tp")
// console.log(inc2);

// //touppercase :

// var up = "annanagar"
// console.log(up.toUpperCase());

// //tolowercase :

// var low = "OMR"
// console.log(low.toLowerCase());

// //indexof :  it will take the first occurence of the dulplicate value

// var idx = "america"
// console.log(idx.indexOf("a"));

// //lastindexof :  it will take the last occurence of the dulplicate value

// var lidx = "america"
// console.log(lidx.lastIndexOf("a"));

// //length  - to check the length of the string

// var l = "java"
// console.log(l.length);

//charAt  - to get the specific character based on the indices

// var ch = "javascript"
// console.log(ch.charAt(4));

// //replace :

// var rep = "Hello world"
// console.log(rep.replace("Hello","welcome"));

// //repeat :   to repeat the string

// var val = "world"
// console.log(val.repeat(3));

// //startswith  - to check the first character in string

// var name1 = "Javascript"
// console.log(name1.startsWith("j"));

// //endswith  - to check the last character in string

// var name2 = "Javascript"
// console.log(name2.endsWith("ts"));

//if - else :

//syntax :

//if(condition){
//true_statement
//}else{
//false_statment
//}

// let age = 10;
// if (age >= 18) {
//   console.log("He is eligible to vote");
// } else {
//   console.log("He is not eligible to vote");
// }

//else-if :

// let mark = 40;

// if (mark >= 90 && mark <= 100) {
//   console.log("Grade A");
// } else if (mark >= 80) {
//   console.log("Grade B");
// } else if (mark >= 70) {
//   console.log("Grade C");
// } else if (mark >= 60) {
//   //false
//   console.log("Grade D");
// } else if (mark >= 50) {
//   //fasle
//   console.log("Grade E");
// } else {
//   console.log("FAIL");
// }
//tasK :
//shareauto  -  8  - "Auto will move"
//less than  8 - "wait for passengers"
//greater than 8 - 'Drop the passenger"

//Object : collection key and value pairs :

// var obj = {

//   name : "jai",
//   age : 20

// }

// let keys  = Object.keys(obj)
// console.log(keys);

// let val = Object.values(obj)
// console.log(val);

//to update the values
// obj.name = "aravindh"
// obj.age = 15
// console.log(obj);

// //get the values from the obj
// console.log(obj.name);
// console.log(obj.age);

//nested array and object :

// var sclobj = [

//    {
//     name : "kalai",
//     age : 15,
//     std : "X"
//    } ,
//    {
//     name : "logan",
//     age : 13 ,
//     std : "v"
//    },
//    {
//       name : "sakthi",
//       age : 14,
//       std : "VI"

//    }

// ]
// console.log(sclobj[1].name);

//Nested array and obj - ofc[3 employee data]  - - 2 data name and role[update] - 3 data keys and values

//Object destructuring :

// var obj = {
//     name : "sandy",
//     age : 24 ,
//     dep : "IT"
// }

// const {name , age ,dep} = obj

// console.log(name ,age ,dep);

//setimeout function

// setTimeout(()=>{
//   console.log("Hello im javascript");
// },3000)

//This :

// const obj = {

//   name : "hari",
//   age : 12,
//   age : 13,
//   det : function(){
//     console.log(this.age);

//   }
// }

// console.log(obj);
// obj.det()

//Constructor :
// function Bike(name,year,model){
//          //key           value
//        this.bikename =  name
//        this.bikeyear =  year
//        this.bikemodel = model
//        this.bikedetails = function(){
//           console.log(`the bike name is ${name} and the year is ${year} and the model ${model}`);

//        }
// }
// //object
// var details = new Bike("Duke",2020,"390")
// console.log(details)
// details.bikedetails()

//template literals or string literals  `${}` :

// var a = "sakthi"
// var b = "hi"
// console.log(b+a+"how are you"); //old
// console.log(`${b} ${a} how are you !!`);//new

//Class

// class Ofc{

//   constructor(name,dep,id){

//      this.name = name
//      this.dep = dep
//      this.id = id
//   }
//   fulldetails(){
//    console.log(`the name is ${this.name} dep is ${this.dep} and the id number ${this.id}`);

//   }

// }

// var details = new Ofc("logan","IT",123)
// console.log(details);
// details.fulldetails()

//callback : Passing the function into the another function arguments

function greets() {
  console.log("hello welcome");
}

function name(x) {
  console.log("JAi");
  x();
}

name(greets);

//interconnecting multiple function
function task1(x) {
  setTimeout(() => {
    console.log("Task1");
    x();
  }, 3000);
}

function task2(y) {
  setTimeout(() => {
    console.log("Task2");
    y();
  }, 1500);
}

function task3(z) {
  setTimeout(() => {
    console.log("Task3");
    z();
  }, 2000);
}
function task4() {
  setTimeout(() => {
    console.log("Task4");
  }, 500);
}
//callback hell - traditional concept to handle the asynchronus operations
task1(() => {
  task2(() => {
    task3(task4);
  });
});

//promise :
//resolve
//reject

//syntax
// new Promise((resolve,reject)=> )

// .then () => resolve
//.catch()  => reject

//arun
//watercanfill - 2
// room clean - 1
// trash out - 3

function water() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const watfill = true;
      if (watfill) {
        resolve("watercan filled");
      } else {
        reject("water can not filled");
      }
    }, 3000);
  });
}

function room() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rc = true;
      if (rc) {
        resolve("room cleaned");
      } else {
        reject("room not cleaned");
      }
    }, 2000);
  });
}
function trash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const to = false;
      if (to) {
        resolve("trash is out");
      } else {
        reject("trash not kept outside");
      }
    }, 500);
  });
}

// water().then(value => {console.log(value); return room()})
//      .then(value =>{console.log(value); return trash()})
//      .catch(error => {console.log(error);console.log("Task completed")})

//Async and await

//Async - it returns the promise
//await -  it will make the promise wait

async function data() {
  try {
    const waterbottle = await water();
    console.log(waterbottle);

    const rooms = await room();
    console.log(rooms);

    const garbage = await trash();
    console.log(garbage);
  } catch (e) {
    console.log(e);
  }
}

data();

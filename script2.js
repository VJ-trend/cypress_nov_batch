//Function - block of code

//types of function :

//Function statement or declaration

//variable  - container to store the value
//syntax
//function var_name(){
//code
// }
//var_name()

//parameter - is like an variabe_name
//arguments - is like an value

// function box(x){  //parameter

//     console.log(x)

// }
// box(10) //arguments

//   let a = "vijay"

// //return :

// function box(x){  //parameter
//    return x;
// }
// console.log(box(10))

//Function expression   - Storing the function inside the variable name

var fn = function (x) {
  //anonymous function
  console.log(x);
};
fn("js"); //arguments

//immediate invoke function expression [IIFE]  :

var iife = (function box(x) {
  console.log(x);
})(100);

//arrow function  - short hand syntax

//syntax :

//()=>{ }

var arr = (x) => {
  console.log(x);
};
arr("police");

//shift+alt+f 

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


function water(){
 
   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        
         const watfill = true 
         if(watfill){
            resolve("watercan filled")
         }else{
            reject("water can not filled")
         }


      },3000)
   
   })

}

function room(){

   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
         const rc = true 
         if(rc){
            resolve("room cleaned")
         }else{
            reject("room not cleaned")
         }
      },2000)
   })
   
}
function trash(){
   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
         const to = false 
         if(to){
            resolve("trash is out")
         }else{
            reject("trash not kept outside")
         }
      },500)

   })
   
}

// water().then(value => {console.log(value); return room()}) 
//      .then(value =>{console.log(value); return trash()})
//      .catch(error => {console.log(error);console.log("Task completed")})


//Async and await  

//Async - it returns the promise 
//await -  it will make the promise wait  


async function data(){

 try{

   const waterbottle =  await water()
    console.log(waterbottle);
    
    const rooms = await room()
    console.log(rooms);
    
    const garbage = await trash() 
    console.log(garbage);
    


 }catch(e){

    console.log(e);
    
 }




}

data()
//MRF   
//Map  
//syntax : 
//var_name.map((value,index,acctualarray)=>)   

    var num = [1,2,3,4,5,6,7,8,9,10]

    var op = num.map((val)=> val+2) 

    console.log(op);
    
//reduce   

//syntax :  

//var_name.reduce((accumulator,value,index,accarr)=>)

//length    - starts with 1
var red = num.reduce((acc,val,idx,accarr)=> acc + val,5)

console.log(red);

//Filter:  

//syntax : 

//var_name.filter((value,index,accarr)=>)

const fil  = num.filter((val,idx,accarr)=>val%2 !==0)
console.log(fil); 

//task  

//even  
//odd

///1
console.log("hello world");
///2
var firstname = "suryanshu";
console.log(firstname);
// firstname = "S";
console.log(firstname)
///3
var value1=10;
console.log(value1-5);
console.log(value1 + 10);
////4

var first_value$ = 10;
console.log(value1- first_value$);
//snake casew writing
//// camel case writing



///using let keyword
let my_name = "suryanshu";
console.log(my_name);

// my_name = "sur";
// console.log(my_name);


const pi=3.14;
// pi=2.3   cant do this
console.log(pi**pi);
 

// sting indexing
console.log(firstname[0]);
console.log(firstname.length);
console.log(firstname[firstname.length-3]);


// trim keyword
let verbose = "         a   b   c          ";
console.log(verbose);
console.log(verbose.length);
let normal_text = verbose.trim();
console.log(normal_text);
console.log(verbose.trim());

// to upper case 
let new_string= "abcXYZd"
console.log(new_string);
console.log(new_string.toUpperCase());
new_string = new_string.toLowerCase();
console.log(new_string);

// slice//
new_string = new_string.slice(3,5);
console.log(new_string);


// data types 
// strings ,, number ,,, bool ,,, Bigint ,,,,, null ,,,, symbol ,,, undefined ,,,
// object  ,,,, arrays


console.log(typeof first_value$);
console.log(typeof new_string);
console.log()

//last index of

console.log(new_string.lastIndexOf("x"));


// the split keyword
let list_to_be_split = "a b c d r e f f d d df d s f f d d ajcnjsnvs sf"
// string to array 
let new_array=list_to_be_split.split(" ")
console.log(new_array);


list_to_be_split = "immutable";
console.log(list_to_be_split);

// numbers 


let number = 2
console.log(number%2);

// strict equality is checked by using 3 signs 
let age = 22;
console.log(age == "22");
console.log(age === "22");


// arrays

let array1 = ["book","pen","cup"];
console.log(array1);
array1[2]= "cable";
console.log(array1);

// join methods 

console.log(array1.join(" "));



// push and pop in array 
console.log(array1);
array1.push("bag");
console.log(array1.push("bag"));
console.log(array1);

// checking in string 

let email = "dummy@fake.com";
let boolvalue = email.includes("@");
console.log(boolvalue);


// ???





// control flow
// // for loop


for(let i=1;i<10;i++){
    console.log("this loop in on turn",i );
}








// /////////////////////////////////////////

// let Arr = [
//     "Manish", "Chandan", "Piyush",
//     "Sunil", "Pankaj", "Piyush",
//     "Pankaj", "Tiny", "Chandan",
//     "Manish"];
 
// let outputArray = [];
 
// // Count variable is used to add the
// // new unique value only once in the
// // outputArray.
// let count = 0;
 
// // Start variable is used to set true
// // if a repeated duplicate value is
// // encontered in the output array.
// let start = false;
 
// for (let j = 0; j < Arr.length; j++) {
//     for (let k = 0; k < outputArray.length; k++) {
//         if (Arr[j] == outputArray[k]) {
//             start = true;
//         }
//     }
//     count++;
//     if (count == 1 && start == false) {
//         outputArray.push(Arr[j]);
//     }
//     start = false;
//     count = 0;
// }
 
// console.log(outputArray);





//////

// while loop
let j=1
while(j<5){
    j++;
    console.log("while loop",j);
    j++;
}



// do while loop?

// let k=0;

// do{
//     console.log("do while loop",k);
// }while(k<6)

// if else
/////////////////////////////////////////////////////







// let op_exe = prompt("enter value");
let op_exe = 330;
if(op_exe > 8000){
    console.log("if");
}
else if(op_exe < 300){
    console.log("else if");
}
else{
    console.log("snjdj");
}




// break and continue statement
/////////////////////////////////////////////////////////////////


let password = "abcujdhfj@11";
if(password.length>5 && password.includes("@")){
    console.log("ook");
}
else{
    console.log("no");
}




// priority of ! is heigher than && and ||
// 
// \

// 
// /

// 
// /

// 
// 
// 
// 
// variable and block scope



// ternary operator\   ?:
let page = 56;
let result = page > 45 ? "qualify" : " disqualify"; 
console.log(result);



////////////////////////////////////////////////////////////////////////











function fun(){
    console.log("recalled a function");
}


fun();


let incitation = function(name = "deafult name"){
    console.log(`u r ${name} invited`)
}

incitation("sjsj")
incitation()



///////////////////////////
// arrow functions

let invitation = djj => console.log(`using arrow ${djj} function`)

invitation("bsbsb")




// ???////////////////////////////



// set time out ND set inerval\\


// timer fucntions 


function greating(yourname = "delault"){
    console.log("hi", yourname);
}


// setTimeout(greating,5000,"random name")


// hoisting 

// Object

let car = {
    colour:"black",
    model:"2023",
    company:"audi"
}

console.log(car)


console.log(car.model);

let person = {
    age_calculate : function(yob){
        let age= 383 - yob;
        return  age;
    }
}

console.log(person.age_calculate(20));


// this keywoed

let laptop = {
    processor:"i5",
    getProcessor:function(){
        return `${this.processor}`
    }
}
console.log(laptop.getProcessor())



























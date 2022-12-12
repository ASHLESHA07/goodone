console.log("This is Chapter 5");
function greet(name, greetText="Greetings from JavaScript"){
    let name1 = "Name1";
    console.log(greetText + " " + name)
    console.log(name + "is a good girl")
}
function sum(a,b,c){
    let d = a+b+c;
    return d;
    // This line will never excute(Unreachable code)
    // console.log("Fuction is returned");
}
let name = "Ashlesha";
let name1 = "Tany";
let name2 = "ashu";
let name3 = "neha";
let greetText="Good Night";
greet(name,greetText);
greet(name1,greetText);
greet(name2,greetText);
// let returnVal = greet(name3);
// console.log(returnVal)
let returnVal = sum(1,2,3);
console.log(returnVal)

// console.log(name + "is a good girl");
// console.log(name1 + "is a good girl");
// console.log(name2 + "is a good girl");
// console.log(name3 + "is a good girl");



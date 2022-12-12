// Synchronous or blocking by 
// -line by line execution


// Asynchronos or non-blocking 
// -line by line execution not guaranted
// - callbacks will fire
const fs = require("fs");
fs.readFileSync("coco.txt", "utf-8", (err,data)=>{
    console.log(data);
}) 
console.log("this is a message");

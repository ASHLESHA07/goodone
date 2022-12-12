const fs = require("fs");
let text = fs.readFileSync("coco.txt", "utf-8");
text = text.replace("content", "Rohan")

console.log("the content of the file is");
console.log(text);

console.log("creating a new file..");
fs.writeFileSync("Rohan.txt", text);
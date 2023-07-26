let readLine = require('readline');
let url = readLine.createInterface(process.stdin,process.stdout);
url.question('please enter u r name:',(answer)=>{
    console.log(`hello ${answer}`);
})
//node foldername.js it will ask name and it will print;
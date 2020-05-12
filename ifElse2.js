const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question){
  
    let answer;

return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}



async function Program(){
  let numOne = await askQuestion("Please type first number");
  let numTwo = await askQuestion("Please type second number");
  if (numOne  < numTwo ){
      console.log("1." + numTwo);
      console.log("2." + numOne );
  }
  
else {
  
  console.log("1." + numOne );
  console.log("2." + numTwo);
}

if (numOne == numTwo){
    console.log("Both the numbers are equal");
}
  
}

Program().then(() => {
    process.exit(0);
});
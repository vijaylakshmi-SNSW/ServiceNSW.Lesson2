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
    let valueOne = await askQuestion("Please enter the array size ");
    //let valueTwo = await askQuestion("Please type second value ");
    //console.log("value one is "+valueOne + " " + "value one is "+valueTwo);   // array answer, calling above two values.
  
    var arrayAns = [];
    for (let index = 0; index < valueOne; index++) {
    arrayAns.push(await askQuestion("Please enter a value "));
 }
   console.log(arrayAns);
  
    }
  


  


Program().then(() => {
    process.exit(0);
});
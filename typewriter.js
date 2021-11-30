const sentence = "hello there from lighthouse labs";

let delay = 50;
for (const char of sentence) {

    setTimeout(() => {
    
        process.stdout.write(char);
      }, delay) 
    delay = delay + 50;
}

setTimeout(() => {
    console.log("\n");
}, 2000)
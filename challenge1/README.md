##Code-challenge(challenge1)

## Learning Goals

- Practice using `const`to declare variables in JavaScript

### Structure

The structure of this lab — where its files and folders are located
— looks roughly like the following:

```challenge1

index.js
index.html
package.json
package-lock.json
README.md.
```

###Code along

Open terminal under the challenge1 directory and run code . to open the Visual studio code.
OPen index.js in the text editor to see the following;

function grades(){
const grade = window.prompt("Enter Your Grade:" , "score")

if(grade > 79 && grade <= 100){
    alert("A")
}else if(grade >= 60 && grade <= 79){
    alert("B")
}else if(grade >= 50 && grade <= 59){
    alert("C")
}else if(grade >= 40 && grade <= 49){
    alert("D")
}else if(grade < 40 && grade >= 0){
    alert("E")
}else{
    alert("Enter a value")
}
}

In the ndex.html under the body is;
 <button onclick="grades()">Check Grade</button>
 
 NOTE: By going live or opening the index.html on your browser you will see "Check Grade"
 
 
## Running the Tests 
On the terminal under the challenge1 directory run npm install to install the packages and the command for the code Node index.js to see whether the test are failing or passing.If the test are passing go live and run the test to obtain the required result. 

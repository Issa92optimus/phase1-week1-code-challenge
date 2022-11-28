##Code-challenge(challenge2)

## Learning Goals

- Practice using the `return` function to declare variables in JavaScript

### Structure

The structure of this lab — where its files and folders are located
— looks roughly like the following:

```challenge2

index.js
index.html
package.json
package-lock.json
README.md.
```

###Code along

Open terminal under the challenge1 directory and run code . to open the Visual studio code.
OPen index.js in the text editor to see the following;

function speedLimit(){
    speed = prompt('enter speed')
    


   if (speed < 70){
        alert("Ok");
        return 'ok'
       

   }else if (speed > 70){
        let points =0;        

        points = (speed-70)/5

        if (points<=12){
            alert (`points: `+ points)

        }else alert (`suspended `+ points)
   }

} 

In the ndex.html under the body is;
 <button onclick="speedlimit()">Check Point</button>
 
 NOTE: By going live or opening the index.html on your browser you will see "Check point"
 
 
## Running the Tests 
On the terminal under the challenge1 directory run npm install to install the packages and the command for the code Node index.js to see whether the test are failing or passing.If the test are passing go live and run the test to obtain the required result. 

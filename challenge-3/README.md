##Code-challenge(challenge3)

## Learning Goals

- Practice using the `let`to declare variables in JavaScript

### Structure

The structure of this lab — where its files and folders are located
— looks roughly like the following:

```challenge3

index.js
index.html
package.json
package-lock.json
README.md.
```

###Code along

Open terminal under the challenge1 directory and run code . to open the Visual studio code.
OPen index.js in the text editor to see the following;

function paye(){
taxedIncome=prompt("enter paye");
let paye = 'taxedIncome';
    personalRelief= +2400
    grossSalary= +propmt("total salary")
    contributionBenefits= +propmt("contributions")
    NHIFDeduction= +propmt("nhif deduction")
    NSSFDeduction= +propmt("nssf deduction")

totalDeduction= (personalRelief+contributionBenefits+NHIFDeduction+NSSFDeduction)
taxedIncome= (grossSalary - totalDeduction);


console.log(`Tax income is Ksh.${taxedIncome}`)
console.log(`Total Deduction is Ksh.${totalDeduction}`)


if (taxedIncome <= 24000) {
    paye=taxedIncome * 0.1
}
else if (taxedIncome <= 32333){
    paye=taxedIncome * 0.25
}
else if(taxedIncome >= 32333){
    paye=taxedIncome * 0.30
}
{
netSalary= (taxedIncome - paye)
console.log (`Net Salary is ${netSalary}`)
}
}

In the ndex.html under the body is;
 <button onclick="paye()">check paye</button>
 
 NOTE: By going live or opening the index.html on your browser you will see "Check paye"
 
 
## Running the Tests 
On the terminal under the challenge1 directory run npm install to install the packages and the command for the code Node index.js to see whether the test are failing or passing.If the test are passing go live and run the test to obtain the required result. 

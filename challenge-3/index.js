
function paye(){
taxedIncome=prompt("enter paye");
let paye = 'taxedIncome';
    personalRelief= +2400
    grossSalary= +prompt("total salary")
    contributionBenefits= +prompt("contributions")
    NHIFDeduction= +prompt("nhif deduction")
  NSSFDeduction= +prompt("nssf deduction")

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

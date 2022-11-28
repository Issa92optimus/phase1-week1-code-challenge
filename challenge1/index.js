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



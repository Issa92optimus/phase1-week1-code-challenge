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

var times = 0;
let currentTime = new Date();
console.log("current time is", currentTime);
let currentHour = currentTime.getHours();
let currentMinute = currentTime.getMinutes();
let currentSecond = currentTime.getSeconds();
console.log("Current Hour is", currentHour);
console.log("Current Minute is", currentMinute);
console.log("Current Second is", currentSecond);


function checktime(){
    if(currentSecond<60){
        currentSecond++;
        console.log("So the current time is", currentHour,':',currentMinute,":",currentSecond);
    }
    else if(currentSecond===60){
        currentSecond=0
        currentMinute=currentMinute+1;
    }
    else if(currentMinute===60){
        currentHour=currentHour+1;
    }

    setTimeout(checktime,1000)
}
checktime(currentSecond);
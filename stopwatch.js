const stopWatchTag = document.getElementsByClassName("stopWatch")[0];
const firstDivTag = document.getElementsByClassName("firstDiv")[0];
const miliDivTag = document.getElementsByClassName("mili")[0];
const startBtnTag = document.getElementsByClassName("startBtn")[0];
const pauseBtnTag = document.getElementsByClassName("pauseBtn")[0];
const continueTag = document.getElementsByClassName("continueBtn")[0];
const restartTag = document.getElementsByClassName("restartBtn")[0];


let miliSeconds = 0, seconds = 0, minutes = 0, hours = 0;

const startTime = () => {
   miliSeconds += 10;
   if(miliSeconds === 100){
    miliSeconds = 0
    seconds += 1;
       if (seconds === 60){
        seconds = 0;
        minutes += 1;
        if(minutes === 60){
            minutes = 0;
            hours += 1;
        }
       }
   }

    
  
  const miliSecondText = miliSeconds < 10 ? "0" + miliSeconds.toString() : miliSeconds;
  const secondsText = seconds < 10 ? "0" + seconds.toString() : seconds;
  const minutesText = minutes < 10 ? "0" + minutes.toString() : minutes;
  const hoursText = hours < 10 ? "0" + hours.toString() : hours;
  const bigTag = hoursText + ":" + minutesText + ":" + secondsText ;
  const smallTag = miliSecondText;
  firstDivTag.textContent =  bigTag;
  miliDivTag.textContent = smallTag;
  stopWatchTag.append(firstDivTag,miliDivTag)
// firstDivTag.textContent =  hoursText + ":" + minutesText + ":" + secondsText ;
// miliDivTag.textContent = miliSecondText;//
 


};



let intervalId;
startBtnTag.addEventListener("click",() =>{
    intervalId = setInterval(startTime, 100)
}
   
);
pauseBtnTag.addEventListener("click",() => {
    clearInterval(intervalId)
}
);
continueTag.addEventListener("click",() => {
    clearInterval(intervalId);
    intervalId = setInterval(startTime, 100)
}
);
restartTag.addEventListener("click",() => {
    clearInterval(intervalId);
(seconds = 0), (minutes = 0), (hours = 0);
   intervalId = setInterval(startTime, 100)
}
);

let hour2 = 0
let minute2 = 0; 
let second2 = 0; 
let running2 = false
  
function startBtntimer2() { 
    timer2 = true; 
    second2 = parseInt(secondnew.innerText)
    minute2 = parseInt(minutenew.innerText)
    hour2 = parseInt(hournew.innerText)
    stopWatch2(); 
}
  
function stopBtn2() { 
    timer2 = false; 
}
  
function resetBtn2() { 
    timer2 = false;
    hour2 = 0; 
    minute2 = 0; 
    second2 = 0; 
    document.getElementById('hournew').innerHTML = "00";
    document.getElementById('minutenew').innerHTML = "00"; 
    document.getElementById('secondnew').innerHTML = "00"; 
}
  
function stopWatch2() { 
    running2 = true
    if (timer2) { 
        second2--; 
  
  
        if (second2 == -1) { 
            minute2-- 
            second2 = 59; 
        }
        
        if (minute2 == -1) { 
            hour2-- 
            minute2 = 59; 
        }
  
        if (minute2 == 0 && second2 == 0 && hour2 == 0) { 
            // minute = 0; 
            // second = 0; 
            stopBtn2()
            f=66
            ins.innerText="Click on OVEN's door to open it and take petridishes out."
            petritrial="2nd"
        } 
  
        let hourString = hour2
        let minString = minute2; 
        let secString = second2; 
  
        if (hour2 < 10) { 
            hourString = "0" + hourString; 
        }

        if (minute2 < 10) { 
            minString = "0" + minString; 
        } 
  
        if (second2 < 10) { 
            secString = "0" + secString; 
        } 
  

        document.getElementById('hournew').innerHTML = hourString;
        document.getElementById('minutenew').innerHTML = minString; 
        document.getElementById('secondnew').innerHTML = secString; 
        setTimeout(stopWatch2, 10); 
    } 
}











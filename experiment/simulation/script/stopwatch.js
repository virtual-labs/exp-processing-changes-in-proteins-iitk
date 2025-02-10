let minute = 0; 
let second = 0; 
let running = false
  
function startBtntimer() { 
    timer = true; 
    second = parseInt(sec2.innerText)
    minute = parseInt(min2.innerText)
    stopWatch(); 
}
  
function stopBtn() { 
    timer = false; 
}
  
function resetBtn() { 
    timer = false; 
    minute = 0; 
    second = 0; 
    document.getElementById('min2').innerHTML = "00"; 
    document.getElementById('sec2').innerHTML = "00"; 
}
  
function stopWatch() { 
    running = true
    if (timer) { 
        second--; 
  
  
        if (second == -1) { 
            minute-- 
            second = 59; 
        } 
  
        if (minute == 0 && second == 0) { 
            // minute = 0; 
            // second = 0; 
            stopBtn()
            stopmachine()
            startbutton.innerText="NEXT"
            startbutton.style.visibility="visible"
            ins.innerText="Press NEXT button."
            f=32
        } 
  
        let minString = minute; 
        let secString = second; 
  
  
        if (minute < 10) { 
            minString = "0" + minString; 
        } 
  
        if (second < 10) { 
            secString = "0" + secString; 
        } 
  

  
        document.getElementById('min2').innerHTML = minString; 
        document.getElementById('sec2').innerHTML = secString; 
        setTimeout(stopWatch, 100); 
    } 
}











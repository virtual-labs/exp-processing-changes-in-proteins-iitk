
let ovendiv = document.querySelector("#ovendiv")
let gate = document.querySelector("#gate")
let tempscreen = document.querySelector("#tempscreen")
let timerscreen = document.querySelector("#timerscreen")
let hournew = document.querySelector("#hournew")
let minutenew = document.querySelector("#minutenew")
let secondnew = document.querySelector("#secondnew")
let temptext = document.querySelector("#temptext")
let onoffbtn = document.querySelector("#onoffbtn")





let ovenuse = "none"




function onoffnew1(){
    if(f==56){
        f=57
        onoffbtn.style.backgroundImage="radial-gradient(rgb(255, 215, 15),rgb(255, 122, 6))"
        tempscreen.style.opacity="100%"
        timerscreen.style.opacity="100%"
        ins.innerText="Press 'TEMP' button"

    }
    else if(f==57 && ovenuse=="none"){
        f=56
        onoffbtn.style.backgroundImage="radial-gradient(rgb(226, 226, 226),rgb(135, 124, 124))"
        tempscreen.style.opacity="0%"
        timerscreen.style.opacity="0%"
        ins.innerText="Press 'On/Off' button on OVEN."
    }
}

function tempnew1(){
    if(f==57){
        f=58
        ovenuse="done"
        temptext.style.animationIterationCount="infinite"
        ins.innerText="By pressing '+' , '-' button , set temperature to 105 degree celcius then again press 'TEMP' button."
    }
    else if(f==58){
        f=57
        temptext.style.animationIterationCount="0"
        ins.innerText="Press 'HH' button to set hours in timer."
    }
}

function hournew1(){
    if(f==57){
        f=59
        ovenuse="done"
        hournew.style.animationIterationCount="infinite"
        ins.innerText="By pressing '+' , '-' button , set hours to 3 then again press 'HH' button."
    }
    else if(f==59){
        f=57
        hournew.style.animationIterationCount="0"
        ins.innerText="Press 'MM' button to set minutes in timer."
    }
}

function minutenew1(){
    if(f==57){
        f=60
        ovenuse="done"
        minutenew.style.animationIterationCount="infinite"
        ins.innerText="By pressing '+' , '-' button , set minutes to 00 then again press 'MM' button."
    }
    else if(f==60){
        f=57
        minutenew.style.animationIterationCount="0"
        ins.innerText="Press 'SS' button to set seconds in timer."
    }
}

function secondnew1(){
    if(f==57){
        f=61
        ovenuse="done"
        secondnew.style.animationIterationCount="infinite"
        ins.innerText="By pressing '+' , '-' button , set seconds to 00 then again press 'MM' button."
    }
    else if(f==61){
        f=57
        secondnew.style.animationIterationCount="0"
        ins.innerText="Please wait !! OVEN is getting warm."
        setTimeout(function(){
            ins.innerText="Click on OVEN's door to close it."
        },3000)
    }
}


function door(){
    if(petritrial=="1st"){

        if((parseInt(hournew.innerText))==3 && (parseInt(minutenew.innerText))==0 && (parseInt(secondnew.innerText))==0 && (parseInt(temptext.innerText))==105){
            gate.style.left="26%"
            f=65
            setTimeout(function(){
                ins.innerText="Please wait !! until timer reach to 00:00:00 ."
                startBtntimer2()
            },1000)
        }
        else {
            ins.innerText="Values are not correctly set ! PLease set correct values.  Press 'TEMP' button."
        }
    }
    else if(petritrial=="2nd" && f==66){
        f=67
        gate.style.left="72%"
        setTimeout(function(){
            ovenreverse()
        },1000)
    }
}

// //////////////////////////////  PLUS  //////////////////////////////////

function plusnew1(){
    if(f==58){
        if(parseInt(temptext.innerText)<150 && (parseInt(temptext.innerText))>=0){
            if((parseInt(temptext.innerText))<5){
                temptext.innerText="0"+ (parseInt(temptext.innerText)+5)
            }
            else{
                temptext.innerText= parseInt(temptext.innerText)+5
            } 
        }
    }
    else if(f==59){
        if(parseInt(hournew.innerText)<59 && (parseInt(hournew.innerText))>=0){
            if((parseInt(hournew.innerText))<9){
                hournew.innerText="0"+(parseInt(hournew.innerText)+1)
            }
            else{
                hournew.innerText=parseInt(hournew.innerText)+1

            }
        }
    }
    else if(f==60){
        if(parseInt(minutenew.innerText)<59 && (parseInt(minutenew.innerText))>=0){
            if((parseInt(minutenew.innerText))<9){
                minutenew.innerText="0"+ (parseInt(minutenew.innerText)+1)
            }
            else{
                minutenew.innerText=parseInt(minutenew.innerText)+1
            }
        }
    }
    else if(f==61){
        if(parseInt(secondnew.innerText)<59 && (parseInt(secondnew.innerText))>=0){
            if((parseInt(secondnew.innerText))<9){
                secondnew.innerText="0"+ (parseInt(secondnew.innerText)+1)
            }
            else{
                secondnew.innerText=parseInt(secondnew.innerText)+1
            }
        }
    }
}



function minusnew1(){
    if(f==58){
        if(parseInt(temptext.innerText)<=150 && (parseInt(temptext.innerText))>0){
            if((parseInt(temptext.innerText))<5){
                temptext.innerText="0"+ (parseInt(temptext.innerText)-5)
            }
            else{
                temptext.innerText= parseInt(temptext.innerText)-5
            } 
        }
    }
    else if(f==59){
        if(parseInt(hournew.innerText)<=59 && (parseInt(hournew.innerText))>0){
            if((parseInt(hournew.innerText))<9){
                hournew.innerText="0"+(parseInt(hournew.innerText)-1)
            }
            else{
                hournew.innerText=parseInt(hournew.innerText)-1

            }
        }
    }
    else if(f==60){
        if(parseInt(minutenew.innerText)<=59 && (parseInt(minutenew.innerText))>0){
            if((parseInt(minutenew.innerText))<9){
                minutenew.innerText="0"+ (parseInt(minutenew.innerText)-1)
            }
            else{
                minutenew.innerText=parseInt(minutenew.innerText)-1
            }
        }
    }
    else if(f==61){
        if(parseInt(secondnew.innerText)<=59 && (parseInt(secondnew.innerText))>0){
            if((parseInt(secondnew.innerText))<9){
                secondnew.innerText="0"+ (parseInt(secondnew.innerText)-1)
            }
            else{
                secondnew.innerText=parseInt(secondnew.innerText)-1
            }
        }
    }

}









let on = document.querySelector("#on")
let tare = document.querySelector("#tare")
let reading = document.querySelector("#reading")
let spatula = document.querySelector("#spatula")
let cap = document.querySelector("#protiencap")

let flask1 = document.querySelector("#flask1")
let flask2 = document.querySelector("#flask2")
let flask3 = document.querySelector("#flask3")
let flask4 = document.querySelector("#flask4")
let flask5 = document.querySelector("#flask5")

let sample1 = document.querySelector("#sample1")
let sample2 = document.querySelector("#sample2")
let sample3 = document.querySelector("#sample3")
let sample4 = document.querySelector("#sample4")
let sample5 = document.querySelector("#sample5")

let cflasks = document.querySelector("#cflasks")

let flaskselector = flask1
let powder = sample1
let powderleft = "48.8%"





function flaskplace1(){
    if(flaskselector==flask1){
        flaskplace()
        flaskpour()
    }
}

function flaskplace2(){
    if(flaskselector==flask2){
        flaskplace()
        flaskpour()
    }
}

function flaskplace3(){
    if(flaskselector==flask3){
        flaskplace()
        flaskpour()
    }
}

function flaskplace4(){
    if(flaskselector==flask4){
        flaskplace()
        flaskpour()
    }
}

function flaskplace5(){
    if(flaskselector==flask5){
        flaskplace()
        flaskpour()
    }
}










function on1(){
    if(f==1){
        f=2
        reading.style.opacity="100%"
        ins.innerText="Click on first left volumetric flask and place it on wheighing scale."
    }

}


function tare1(){
    if(f==4){
        f=5
        reading.innerText="00.00"
        ins.innerText="Click on 'Protien' container's cap."
    }
    else if(f==34){
        f=35
        reading.innerText="00.00"
        ins.innerText="Click on empty petridish to measure its weight."
    }
}


function cap1(){
    if(f==5){
        cap.style.top="55%"
        setTimeout(function(){
            cap.style.left="40%"
            setTimeout(function(){
                cap.style.top="88%"
                f=6
                ins.innerText="Click on spatula to weigh 10g of protien powder in conical flask."
            },1000)
        },1000)
    }
    else if(f==10){
        f=11
        cap.style.top="55%"
        setTimeout(function(){
            cap.style.left=""
            setTimeout(function(){
                cap.style.top=""
                f=12
                ins.innerText="Press NEXT button."
                startbutton.innerText="NEXT"
                startbutton.style.visibility="visible"
            },1000)
        },1000)
    }
}

function flaskplace(){
    if(f==2){
        f=3
        flaskselector.style.top="30%"
        setTimeout(function(){
            flaskselector.style.left="8%"
            setTimeout(function(){
                flaskselector.style.top="48%"
                setTimeout(function(){
                    if(flaskselector==flask1){
                        reading.innerText="51.32"
                        ins.innerText="Press 'TARE' button."
                        f=4
                    }
                    else{
                        f=6
                        reading.innerText="00.00"
                        ins.innerText="Click on spatula to weigh 10g of protien powder in conical flask."
                    }
                },1000)
            },1000)
        },1000)
    }

    else if(f==8){
        f=9
        flaskselector.style.top="30%"
        powder.style.top="52%"
        reading.innerText="-51.32"
        setTimeout(function(){
            flaskselector.style.left=""
            powder.style.left=powderleft
            setTimeout(function(){
                flaskselector.style.top=""
                powder.style.top="85%"
                setTimeout(function(){
                    f=2
                    flaskverify()
                },1000)
            },1000)
        },1000)
    }

}

function spatula1(){
    if(f==6){
        f=7
        spatula.style.top="30%"
        spatula.style.rotate="0deg"
        setTimeout(function(){
            spatula.style.left="35%"
            setTimeout(function(){
                spatula.style.top="52%"
                spatula.style.rotate="-20deg"
                spatula.style.left="31%"
                setTimeout(function(){
                    spatula.style.top="27%"
                    spatula.style.left="35%"
                    spatula.style.rotate="0deg"
                    powder.style.top="40%"
                    powder.style.left="35%"
                    powder.style.rotate="-30deg"
                    setTimeout(function(){
                        spatula.style.left="10.5%"
                        powder.style.left="10.5%"
                        setTimeout(function(){
                            spatula.style.rotate="-20deg"
                            spatula.style.left="9.5%"
                            spatula.style.top="26%"
                            powder.style.top="70%"
                            powder.style.rotate="0deg"
                            powder.style.left="9.8%"
                            setTimeout(function(){
                                powder.style.width="4.5%"
                            },500)
                            setTimeout(function(){
                                reading.innerText="10.00"
                                spatula.style.left=""
                                setTimeout(function(){
                                    spatula.style.top=""
                                    spatula.style.rotate=""
                                    setTimeout(function(){
                                        f=8
                                        ins.innerText="Click on conical flask to place it at previous place."
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1500)
            },1000)
        },1000)
    }
}


function flaskverify(){
    if(flaskselector==flask1){
        flaskselector=flask2
        powder=sample2
        powderleft="58.8%"
        ins.innerText="Click on second left conical flask to place it on wheighing scale."
    }
    else if(flaskselector==flask2){
        flaskselector=flask3
        powder=sample3
        powderleft="68.8%"
        ins.innerText="Click on middle one conical flask to place it on wheighing scale."
    }
    else if(flaskselector==flask3){
        flaskselector=flask4
        powder=sample4
        powderleft="78.8%"
        ins.innerText="Click on second right conical flask to place it on wheighing scale."
    }
    else if(flaskselector==flask4){
        flaskselector=flask5
        powder=sample5
        powderleft="88.8%"
        ins.innerText="Click on first right conical flask to place it on wheighing scale."
    }
    else if(flaskselector==flask5){
        flaskselector="none"
        powder="none"
        f=10
        ins.innerText="Click on 'Protien' container's cap to close the container."
    }

}



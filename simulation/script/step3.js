
let shakermachine = document.querySelector("#shakermachine")
let shakerplate = document.querySelector("#shaker-plate")
let onoff = document.querySelector("#onoff")
let stext = document.querySelector("#stext")
let digitbox = document.querySelector("#digitbox")
let screen = document.querySelector("#screen")
let min2 = document.querySelector("#min2")
let sec2 = document.querySelector("#sec2")

let machine = document.querySelector("#machine")

let frontline = document.querySelector("#frontline")
let backline = document.querySelector("#backline")

let cork1 = document.querySelector("#cork1")
let cork2 = document.querySelector("#cork2")
let cork3 = document.querySelector("#cork3")
let cork4 = document.querySelector("#cork4")
let cork5 = document.querySelector("#cork5")


let cs = 0
let statusmachine = "off"
let tempins



function onoff1(){
    if(f==24){
        f=25
        onoff.style.background="radial-gradient(rgb(255, 215, 15),rgb(255, 122, 6))"
        stext.style.opacity="100%"
        digitbox.style.opacity="100%"
        ins.innerText="Press RPM button."
    }
    else if(f==25 && statusmachine=="off"){
        f=24
        onoff.style.background="radial-gradient(rgb(255, 255, 255),rgb(135, 135, 135))"
        stext.style.opacity="0%"
        digitbox.style.opacity="0%"
        ins.innerText="Press ON/OFF button on flask shaker machine."
    }
}



function rpm1(){
    if(f==25){
        f=26
        statusmachine="on"
        screen.style.animationDuration="1s"
        ins.innerText="Set RPM to 200 by pressing '+' , '-' buttons.... After setting correct rpm press 'RPM' button."
    }

    else if(f==26){
        f=25
        screen.style.animationDuration="0s"
        ins.innerText="Set timer to 10:00 minutes by pressing 'MM' to set minutes and 'SS' to set seconds."
    }
}



function mm1(){
    if(f==25){
        f=27
        statusmachine="on"
        min2.style.animationDuration="1s"
        ins.innerText="Press '+' '-' buttons to increase and decrease minutes in timer then press 'MM' button."
    }
    else if(f==27){
        f=25
        min2.style.animationDuration="0s"
        ins.innerText="Press 'START' button to start flask shaker machine"
    }
}



function ss1(){
    if(f==25){
        f=28
        statusmachine="on"
        sec2.style.animationDuration="1s"
        ins.innerText="Press '+' '-' buttons to increase and decrease seconds in timer then press 'SS' button."
    }
    else if(f==28){
        f=25
        sec2.style.animationDuration="0s"
        ins.innerText="Press 'START' button to start flask shaker machine"
    }
}



function plus1(){
    if(f==26){
        if(parseInt(stext.innerText)<1000){
            stext.innerText= parseInt(stext.innerText)+10
        }
    }
    else if(f==27){
        if(parseInt(min2.innerText)<60){
            min2.innerText=parseInt(min2.innerText)+1
            if(parseInt(min2.innerText)==60){
                min2.innerText="00"
            }
        }
    }
    else if(f==28){
        if(parseInt(sec2.innerText)<60){
            sec2.innerText=parseInt(sec2.innerText)+1
            if(parseInt(sec2.innerText)==60){
                sec2.innerText="00"
            }
        }
    }
}



function minus1(){
    if(f==26){
        if(parseInt(stext.innerText)>0){
            stext.innerText= parseInt(stext.innerText)-10
        }
    }
    else if(f==27){
        if(parseInt(min2.innerText)>0){
            min2.innerText=parseInt(min2.innerText)-1
        }
    }
    else if(f==28){
        if(parseInt(sec2.innerText)>0){
            sec2.innerText=parseInt(sec2.innerText)-1
        }
    }
}



function shakerstart1(){
    if(f==25){
        if(parseInt(min2.innerText)==10 && parseInt(sec2.innerText)==0 && parseInt(stext.innerText)==200){
            f=30
            ins.innerText="Flask shaker machine started ! Wait to complete timer...."
            startmachine()
            startBtntimer()
            
        }
        else {
            f=31
            tempins=ins.innerText
            ins.innerText="Time OR RPM are not correct !!! Please set correct values...... "
            setTimeout(function(){
                ins.innerText=tempins
                f=25
            },5000)
        }
    }
}

let starter = 10

function startmachine(){
    if(stp1.style.animationDuration!="0.5s"){
        stp1.style.animationDuration=starter+"s"
        starter-=0.5
        startmachine()
    }
}

function stopmachine(){
    if(stp1.style.animationDuration=="0.5s"){
        stp1.style.animationDuration=starter+"s"
        starter+=0.5
        stopmachine()
    }
}



function corks(){
    if(cs==0){

        cork1.style.visibility="visible"
        cork2.style.visibility="visible"
        cork3.style.visibility="visible"
        cork4.style.visibility="visible"
        cork5.style.visibility="visible"
        setTimeout(function(){
            cork1.style.opacity="100%"
            cork2.style.opacity="100%"
            cork3.style.opacity="100%"
            cork4.style.opacity="100%"
            cork5.style.opacity="100%"
            cs=1
        },1000)
    }
    else if(cs==1){

        cork1.style.opacity="0%"
        cork2.style.opacity="0%"
        cork3.style.opacity="0%"
        cork4.style.opacity="0%"
        cork5.style.opacity="0%"
        setTimeout(function(){
            cork1.style.visibility="hidden"
            cork2.style.visibility="hidden"
            cork3.style.visibility="hidden"
            cork4.style.visibility="hidden"
            cork5.style.visibility="hidden"
            cs=0
        },1000)
    }
}






function flaskshakerplace(){
    flask1.style.top="8%"
    flask2.style.top="8%"
    flask3.style.top="8%"
    flask4.style.top="8%"
    flask5.style.top="8%"

    sol1.style.bottom="65%"
    sol2.style.bottom="65%"
    sol3.style.bottom="65%"
    sol4.style.bottom="65%"
    sol5.style.bottom="65%"

    cork1.style.top="5%"
    cork2.style.top="5%"
    cork3.style.top="5%"
    cork4.style.top="5%"
    cork5.style.top="5%"

    setTimeout(function(){

        flask1.style.left="25%"
        flask2.style.left="35%"
        flask3.style.left="45%"
        flask4.style.left="55%"
        flask5.style.left="65%"
        
        sol1.style.left="25%"
        sol2.style.left="35%"
        sol3.style.left="45%"
        sol4.style.left="55%"
        sol5.style.left="65%"

        cork1.style.left="26%"
        cork2.style.left="36%"
        cork3.style.left="46%"
        cork4.style.left="56%"
        cork5.style.left="66%"

        shakerplate.style.left="21%"
        shakermachine.style.left="25%"

        setTimeout(function(){

            flask1.style.top="20%"
            flask2.style.top="20%"
            flask3.style.top="20%"
            flask4.style.top="20%"
            flask5.style.top="20%"
            
            sol1.style.bottom="53%"
            sol2.style.bottom="53%"
            sol3.style.bottom="53%"
            sol4.style.bottom="53%"
            sol5.style.bottom="53%"

            cork1.style.top="17%"
            cork2.style.top="17%"
            cork3.style.top="17%"
            cork4.style.top="17%"
            cork5.style.top="17%"

            frontline.style.visibility="visible"
            backline.style.visibility="visible"

            setTimeout(function(){
                frontline.style.top="34%"
                backline.style.top="35.5%"
                f=24
            },1000)
        },1000)
    },1000)

}

function flaskshakerreverse(){

    frontline.style.top="-50%"
    backline.style.top="-50%"

    setTimeout(function(){

        frontline.style.visibility="hidden"
        backline.style.visibility="hidden"
        
        flask1.style.top="8%"
        flask2.style.top="8%"
        flask3.style.top="8%"
        flask4.style.top="8%"
        flask5.style.top="8%"
        
        sol1.style.bottom="65%"
        sol2.style.bottom="65%"
        sol3.style.bottom="65%"
        sol4.style.bottom="65%"
        sol5.style.bottom="65%"

        cork1.style.top="5%"
        cork2.style.top="5%"
        cork3.style.top="5%"
        cork4.style.top="5%"
        cork5.style.top="5%"
        
        setTimeout(function(){
            
            flask1.style.left="47%"
            flask2.style.left="57%"
            flask3.style.left="67%"
            flask4.style.left="77%"
            flask5.style.left="87%"
            
            sol1.style.left="47%"
            sol2.style.left="57%"
            sol3.style.left="67%"
            sol4.style.left="77%"
            sol5.style.left="87%"

            cork1.style.left=""
            cork2.style.left=""
            cork3.style.left=""
            cork4.style.left=""
            cork5.style.left=""
            
            shakerplate.style.left="-100%"
            shakermachine.style.left="-100%"
            
            setTimeout(function(){
                
                flask1.style.top="63%"
                flask2.style.top="63%"
                flask3.style.top="63%"
                flask4.style.top="63%"
                flask5.style.top="63%"
                
                sol1.style.bottom="10%"
                sol2.style.bottom="10%"
                sol3.style.bottom="10%"
                sol4.style.bottom="10%"
                sol5.style.bottom="10%"

                cork1.style.top=""
                cork2.style.top=""
                cork3.style.top=""
                cork4.style.top=""
                cork5.style.top=""
                f=34
                ins.innerText="Press 'TARE' button on wheighing machine."
                
                machine.style.visibility="visible"
                reading.style.visibility="visible"
                reading.style.opacity="100%"
                on.style.visibility="visible"
                tare.style.visibility="visible"
                pdish1.style.visibility="visible"
                pdish2.style.visibility="visible"
                pdish3.style.visibility="visible"
                pdish4.style.visibility="visible"
                pdish5.style.visibility="visible"
                filter1.style.visibility="visible"
                filter2.style.visibility="visible"
                filter3.style.visibility="visible"
                filter4.style.visibility="visible"
                filter5.style.visibility="visible"
                cs=1
                corks()
            },1000)
        },1000)
    },1000)

}


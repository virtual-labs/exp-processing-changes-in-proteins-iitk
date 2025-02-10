

let pdish1 = document.querySelector("#pdish1")
let pdish2 = document.querySelector("#pdish2")
let pdish3 = document.querySelector("#pdish3")
let pdish4 = document.querySelector("#pdish4")
let pdish5 = document.querySelector("#pdish5")

let filter1 = document.querySelector("#filter1")
let filter2 = document.querySelector("#filter2")
let filter3 = document.querySelector("#filter3")
let filter4 = document.querySelector("#filter4")
let filter5 = document.querySelector("#filter5")

let tbl1 = document.querySelector("#tbl1")

let p1 = document.querySelector("#p1")
let p2 = document.querySelector("#p2")
let p3 = document.querySelector("#p3")
let p4 = document.querySelector("#p4")
let p5 = document.querySelector("#p5")

let f1 = document.querySelector("#f1")
let f2 = document.querySelector("#f2")
let f3 = document.querySelector("#f3")
let f4 = document.querySelector("#f4")
let f5 = document.querySelector("#f5")









function petri(){
    if(f==35){
        f=36
        pdish1.style.top="60%"
        setTimeout(function(){
            pdish1.style.left="8%"
            setTimeout(function(){
                pdish1.style.top="68%"
                tbl1.style.visibility="visible"
                setTimeout(function(){
                    reading.innerText="35.60"
                    setTimeout(function(){
                        p1.innerText="35.60"
                        p2.innerText="35.60"
                        p3.innerText="35.60"
                        p4.innerText="35.60"
                        p5.innerText="35.60"
                        f=37
                        ins.innerText="Click again on petridish to bring it back."
                    },3000)
                },1000)
            },1000)
        },1000)
    }
    else if(f==37){
        f=38
        pdish1.style.top="60%"
        reading.innerText="00.00"
        setTimeout(function(){
            pdish1.style.left="22%"
            setTimeout(function(){
                pdish1.style.top="78%"
                f=38
                ins.innerText="Click on filter paper to measure its weight."
            },1000)
        },1000)
    }


}



function filter(){
    if(f==38){
        f=39
        filter1.style.top="60%"
        setTimeout(function(){
            filter1.style.left="8%"
            setTimeout(function(){
                filter1.style.top="68%"
                setTimeout(function(){
                    reading.innerText="1.15"
                    setTimeout(function(){
                        f1.innerText="1.15"
                        f2.innerText="1.15"
                        f3.innerText="1.15"
                        f4.innerText="1.15"
                        f5.innerText="1.15"
                        f=40
                        ins.innerText="Click again on filter paper to bring it back."
                    },3000)
                },1000)
            },1000)
        },1000)
    }
    else if(f==40){
        f=41
        reading.innerText="00.00"
        filter1.style.top="60%"
        setTimeout(function(){
            filter1.style.left="21%"
            setTimeout(function(){
                filter1.style.top="87%"
                setTimeout(function(){
                    startbutton.style.visibility="visible"
                    startbutton.innerText="NEXT"
                    f=42
                    ins.innerText="Press NEXT button."
                    tbl1.style.visibility="hidden"
                },1000)
            },1000)
        },1000)
    }


}


















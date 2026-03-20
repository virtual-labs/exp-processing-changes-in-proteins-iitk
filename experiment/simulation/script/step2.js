let phall = document.querySelector("#phall")
let phred = document.querySelector("#phred")
let ph8 = document.querySelector("#ph8")
let ph6 = document.querySelector("#ph6")
let ph4_5 = document.querySelector("#ph4_5")
let ph4 = document.querySelector("#ph4")
let ph3 = document.querySelector("#ph3")
let phcap = document.querySelector("#phcap")

let falsolc = document.querySelector("#fallingsolc")
let falsolr = document.querySelector("#fallingsolr")

let sol1 = document.querySelector("#sol1")
let sol2 = document.querySelector("#sol2")
let sol3 = document.querySelector("#sol3")
let sol4 = document.querySelector("#sol4")
let sol5 = document.querySelector("#sol5")



ph4.style.left="-50%"
ph4_5.style.left="-50%"
ph6.style.left="-50%"
ph8.style.left="-50%"
phred.style.left="-50%"




let solselector = sol1



let bufferbottle = ph3
let buffersol = phall

let bbleft = "38.45%"
let bsleft = "38.50%"
let bsleft1 = "36.5%"
let bsleft2 = "35.3%"

let falsolselect = falsolc
let falsolleft="50.8%"



function bufferpour(){
    if(f==20){
        f=21
        phcap.style.top="43.5%"
        setTimeout(function(){
            phcap.style.left="31%"
            setTimeout(function(){
                phcap.style.top="85%"
                setTimeout(function(){
                    bufferbottle.style.bottom="45%"
                    buffersol.style.bottom="45%"
                    setTimeout(function(){
                        bufferbottle.style.left=bbleft
                        buffersol.style.left=bsleft
                        setTimeout(function(){
                            bufferbottle.style.rotate="50deg"
                            buffersol.style.rotate="50deg"
                            buffersol.style.left=bsleft1
                            buffersol.style.bottom="47.1%"
                            falsolselect.style.visibility="visible"
                            falsolselect.style.left=falsolleft
                            setTimeout(function(){
                                falsolselect.style.height="64%"
                                buffersol.style.height="20%"
                                buffersol.style.left=bsleft2
                                buffersol.style.bottom="48.9%"
                                solselector.style.visibility="visible"
                                setTimeout(function(){

                                    solselector.style.opacity="100%"
                                    setTimeout(function(){
                                        falsolselect.style.height="0%"
                                        falsolselect.style.top="89%"
                                        setTimeout(function(){
                                            bufferbottle.style.rotate=""
                                            buffersol.style.rotate=""
                                            buffersol.style.left=bsleft
                                            buffersol.style.bottom="45.2%"
                                            powder.style.opacity="0%"
                                            falsolselect.style.left=falsolleft
                                            setTimeout(function(){
                                                bufferbottle.style.left=""
                                                buffersol.style.left=""
                                                falsolselect.style.top=""
                                                powder.style.visibility="hidden"
                                                setTimeout(function(){
                                                    bufferbottle.style.bottom=""
                                                    buffersol.style.bottom="12.2%"
                                                    setTimeout(function(){
                                                        phcap.style.top="43.5%"
                                                        setTimeout(function(){
                                                            phcap.style.left=""
                                                            setTimeout(function(){
                                                                phcap.style.top=""
                                                                setTimeout(function(){
                                                                    bufferverify()
                                                                },1000)
                                                            },1000)
                                                        },1000)
                                                    },1000)
                                                },1000)
                                            },1000)
                                        },500)
                                    },500)
                                },500)
                            },1000)
                        },1000)
                    },1000)

                },1000)
            },1000)
        },1000)
    }
}




function bufferverify(){
    if(bufferbottle==ph3){
        bufferout()
        bufferbottle=ph4
        buffersol=phred
        buffersol.style.height=""
        bbleft = "48.45%"
        bsleft = "48.50%"
        bsleft1 = "46.5%"
        bsleft2 = "45.3%"
        falsolleft="60.8%"
        falsolselect=falsolr
        powder=sample2
        solselector=sol2
        setTimeout(bufferin,1500)
        ins.innerText="Click on buffer solution bottle to pour 100ml pH 4 solution into second left conical flask. "
    }
    else if(bufferbottle==ph4){
        bufferout()
        bufferbottle=ph4_5
        buffersol=phall
        buffersol.style.height=""
        bbleft = "58.45%"
        bsleft = "58.50%"
        bsleft1 = "56.5%"
        bsleft2 = "55.3%"
        falsolleft="70.8%"
        falsolselect=falsolc
        powder=sample3
        solselector=sol3
        setTimeout(bufferin,1500)
        ins.innerText="Click on buffer solution bottle to pour 100ml pH 4.5 solution into middle one conical flask. "
    }
    else if(bufferbottle==ph4_5){
        bufferout()
        bufferbottle=ph6
        buffersol=phall
        buffersol.style.height=""
        bbleft = "68.45%"
        bsleft = "68.50%"
        bsleft1 = "66.5%"
        bsleft2 = "65.3%"
        falsolleft="80.8%"
        powder=sample4
        solselector=sol4
        setTimeout(bufferin,1500)
        ins.innerText="Click on buffer solution bottle to pour 100ml pH 6 solution into second right conical flask. "
    }
    else if(bufferbottle==ph6){
        bufferout()
        bufferbottle=ph8
        buffersol=phall
        buffersol.style.height=""
        bbleft = "78.45%"
        bsleft = "78.50%"
        bsleft1 = "76.5%"
        bsleft2 = "75.3%"
        falsolleft="90.8%"
        powder=sample5
        solselector=sol5
        setTimeout(bufferin,1500)
        ins.innerText="Click on buffer solution bottle to pour 100ml pH 8 solution into first right conical flask. "
    }
    else if(bufferbottle==ph8){
        ins.innerText="Press NEXT button."
        startbutton.innerText="NEXT"
        f=22
        startbutton.style.visibility="visible"
        corks()
    }
}











function bufferout(){
    bufferbottle.style.left="-50%"
    buffersol.style.left="-50%"
    phcap.style.left="-50%"
    bufferbottle.style.visibility="hidden"
    bufferbottle.style.visibility="hidden"
}

function bufferin(){
    bufferbottle.style.left=""
    buffersol.style.left=""
    phcap.style.left=""
    bufferbottle.style.visibility="visible"
    buffersol.style.visibility="visible"
    f=20
}








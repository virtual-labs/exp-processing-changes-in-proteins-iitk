
let funnel = document.querySelector("#funnel")
let neflask1 = document.querySelector("#neflask1")
let nesol1 = document.querySelector("#nesol1")

let im1 = document.querySelector("#im1")
let im2 = document.querySelector("#im2")
let im3 = document.querySelector("#im3")
let im4 = document.querySelector("#im4")
let im5 = document.querySelector("#im5")





let imselector = im1
let pdishselector = pdish1

let pdishleft = "45%"
let pdishleft2 = "40%"
let funnelleft = "36.9%"
let imleft = "37.7%"
let imleft2 = "45%"









function flaskpour(){
    if(f==44){
        f=45
        flaskselector.style.top="45%"
        solselector.style.bottom="28%"
        setTimeout(function(){
            flaskselector.style.left="28%"
            solselector.style.left="28%"
            imselector.style.visibility="visible"
            setTimeout(function(){
                flaskselector.style.rotate="-45deg"
                solselector.style.rotate="-45deg"
                solselector.style.bottom="29.8%"
                solselector.style.left="29.8%"
                setTimeout(function(){
                    imselector.style.opacity="100%"
                    solselector.style.opacity="0%"
                    nesol1.style.opacity="100%"
                    setTimeout(function(){
                        flaskselector.style.rotate=""
                        solselector.style.rotate=""
                        setTimeout(function(){
                            solselector.style.visibility="hidden"
                            flaskselector.style.left=""
                            setTimeout(function(){
                                flaskselector.style.top=""
                                setTimeout(function(){
                                    flaskselector.style.opacity="0%"
                                    setTimeout(function(){
                                        flaskselector.style.visibility="hidden"
                                        ins.innerText="Click on funnel to transfer that Insoluble matter in a pre-weight petri-dish."
                                        pdishselector.style.left=pdishleft
                                        pdishselector.style.top="83%"
                                        f=46
                                    },1000)                                    
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },3000)
            },1000)
        },1000)
    }
}


function funnel1(){
    if(f==46){
        f=47
        funnel.style.top="40%"
        imselector.style.top="41.1%"
        setTimeout(function(){
            funnel.style.left=funnelleft
            imselector.style.left=imleft
            setTimeout(function(){
                funnel.style.top="74%"
                imselector.style.top="75.1%"
                setTimeout(function(){
                    funnel.style.rotate="45deg"
                    imselector.style.left=imleft2
                    imselector.style.top="83%"
                    imselector.style.width="8%"
                    setTimeout(function(){
                        funnel.style.rotate=""
                        setTimeout(function(){
                            funnel.style.top="40%"
                            imselector.style.left=pdishleft2
                            pdishselector.style.left=pdishleft2
                            setTimeout(function(){
                                funnel.style.left="19.9%"
                                setTimeout(function(){
                                    funnel.style.top=""
                                    setTimeout(function(){
                                        funnel.style.left=""
                                        neflask1.style.left=""
                                        nesol1.style.left=""
                                        setTimeout(function(){
                                            flaskpourverify()
                                            if(flaskselector!="none"){
                                                setTimeout(function(){
                                                    funnel.style.left="19.9%"
                                                    neflask1.style.left="20%"
                                                    nesol1.style.left="20%"
                                                    f=44
                                                },1000)
                                            }
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                    
                },1000)
            },1000)
        },1000)
    }
}




function flaskpourverify(){
    nesol1.style.opacity="0%"
    if(flaskselector==flask1){
        flaskselector=flask2
        solselector=sol2
        imselector=im2
        pdishselector=pdish2
        pdishleft = "55%"
        funnelleft = "46.9%"
        imleft = "47.7%"
        imleft2 = "55%"
        pdishleft2 = "50%"
        ins.innerText="Click on second left flask to pour its solution and filter it."
    }
    else if(flaskselector==flask2){
        flaskselector=flask3
        solselector=sol3
        imselector=im3
        pdishselector=pdish3
        pdishleft = "65%"
        funnelleft = "56.9%"
        imleft = "57.7%"
        imleft2 = "65%"
        pdishleft2 = "60%"
        ins.innerText="Click on middle one flask to pour its solution and filter it."
    }
    else if(flaskselector==flask3){
        flaskselector=flask4
        solselector=sol4
        imselector=im4
        pdishselector=pdish4
        pdishleft = "75%"
        funnelleft = "66.9%"
        imleft = "67.7%"
        imleft2 = "75%"
        pdishleft2 = "70%"
        ins.innerText="Click on second right flask to pour its solution and filter it."
    }
    else if(flaskselector==flask4){
        flaskselector=flask5
        solselector=sol5
        imselector=im5
        pdishselector=pdish5
        pdishleft = "85%"
        funnelleft = "76.9%"
        imleft = "77.7%"
        imleft2 = "85%"
        pdishleft2 = "80%"
        ins.innerText="Click on first right flask to pour its solution and filter it."
    }
    else if(flaskselector==flask5){
        flaskselector="none"
        imselector=im1
        pdishselector=pdish1
        startbutton.style.visibility="visible"
        startbutton.innerText="NEXT"
        ins.innerText="Press NEXT button."
        f=49
    }
}




function ovenplace(){

    machine.style.left="-100%"
    reading.style.left="-100%"
    on.style.left="-100%"
    tare.style.left="-100%"

    im1.style.left="10%"
    im2.style.left="20%"
    im3.style.left="30%"
    im4.style.left="40%"
    im5.style.left="50%"
    pdish1.style.left="10%"
    pdish2.style.left="20%"
    pdish3.style.left="30%"
    pdish4.style.left="40%"
    pdish5.style.left="50%"
    setTimeout(function(){
        
        im1.style.top="75%"
        im2.style.top="75%"
        im3.style.top="75%"
        im4.style.top="75%"
        im5.style.top="75%"
        pdish1.style.top="75%"
        pdish2.style.top="75%"
        pdish3.style.top="75%"
        pdish4.style.top="75%"
        pdish5.style.top="75%"
        
        setTimeout(function(){
            
            im1.style.scale = "0.8"
            im2.style.scale = "0.8"
            im3.style.scale = "0.8"
            im4.style.scale = "0.8"
            im5.style.scale = "0.8"
            pdish1.style.scale = "0.8"
            pdish2.style.scale = "0.8"
            pdish3.style.scale = "0.8"
            pdish4.style.scale = "0.8"
            pdish5.style.scale = "0.8"
            
            im1.style.left="30%"
            im2.style.left="37%"
            im3.style.left="44%"
            im4.style.left="51%"
            im5.style.left="58%"
            
            pdish1.style.left="30%"
            pdish2.style.left="37%"
            pdish3.style.left="44%"
            pdish4.style.left="51%"
            pdish5.style.left="58%"

            ovendiv.style.left="10%"
            gate.style.left="72%"

            setTimeout(function(){
                
                im1.style.top="72%"
                im2.style.top="72%"
                im3.style.top="72%"
                im4.style.top="72%"
                im5.style.top="72%"
                pdish1.style.top="72%"
                pdish2.style.top="72%"
                pdish3.style.top="72%"
                pdish4.style.top="72%"
                pdish5.style.top="72%"

                setTimeout(function(){
                    ins.innerText="Press 'On/Off' button on OVEN."
                    f=56
                },1000)
            },1000)
        },1000)
    },1000)
    }


    function ovenreverse(){
        im1.style.top="75%"
        im2.style.top="75%"
        im3.style.top="75%"
        im4.style.top="75%"
        im5.style.top="75%"
        pdish1.style.top="75%"
        pdish2.style.top="75%"
        pdish3.style.top="75%"
        pdish4.style.top="75%"
        pdish5.style.top="75%"
        setTimeout(function(){
            im1.style.left="10%"
            im2.style.left="20%"
            im3.style.left="30%"
            im4.style.left="40%"
            im5.style.left="50%"
            pdish1.style.left="10%"
            pdish2.style.left="20%"
            pdish3.style.left="30%"
            pdish4.style.left="40%"
            pdish5.style.left="50%"

            im1.style.scale = "1"
            im2.style.scale = "1"
            im3.style.scale = "1"
            im4.style.scale = "1"
            im5.style.scale = "1"
            pdish1.style.scale = "1"
            pdish2.style.scale = "1"
            pdish3.style.scale = "1"
            pdish4.style.scale = "1"
            pdish5.style.scale = "1"

            setTimeout(function(){
                im1.style.top="83%"
                im2.style.top="83%"
                im3.style.top="83%"
                im4.style.top="83%"
                im5.style.top="83%"
                pdish1.style.top="83%"
                pdish2.style.top="83%"
                pdish3.style.top="83%"
                pdish4.style.top="83%"
                pdish5.style.top="83%"

                ovendiv.style.left="150%"
                gate.style.left="166%"

                setTimeout(function(){
                    im1.style.left="40%"
                    im2.style.left="50%"
                    im3.style.left="60%"
                    im4.style.left="70%"
                    im5.style.left="80%"
                    pdish1.style.left="40%"
                    pdish2.style.left="50%"
                    pdish3.style.left="60%"
                    pdish4.style.left="70%"
                    pdish5.style.left="80%"

                    machine.style.left=""
                    setTimeout(function(){
                        tare.style.left=""
                        on.style.left=""
                        reading.style.left=""
                        ins.innerText="Click on first left petridish to measure its weight and record in table."
                        f=51
                    },1000)
                },1000)
            },1000)
        },1000)
    }
    
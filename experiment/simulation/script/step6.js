


let pfim1 = document.querySelector("#pfim1")
let pfim2 = document.querySelector("#pfim2")
let pfim3 = document.querySelector("#pfim3")
let pfim4 = document.querySelector("#pfim4")
let pfim5 = document.querySelector("#pfim5")

let pfimnew1 = document.querySelector("#pfimnew1")
let pfimnew2 = document.querySelector("#pfimnew2")
let pfimnew3 = document.querySelector("#pfimnew3")
let pfimnew4 = document.querySelector("#pfimnew4")
let pfimnew5 = document.querySelector("#pfimnew5")

let oim1 = document.querySelector("#oim1")
let oim2 = document.querySelector("#oim2")
let oim3 = document.querySelector("#oim3")
let oim4 = document.querySelector("#oim4")
let oim5 = document.querySelector("#oim5")


let imweight = "69.31"
let imleftnew = "40%"
let pfimselector = pfim1
let oimselector = oim1
let oimtext = "5.9"


let petritrial = "1st"




function petriweight(){
    if(f==51){
        f=52
        imselector.style.top="60%"
        pdishselector.style.top="60%"
        tbl1.style.visibility="visible"
        setTimeout(function(){
            pdishselector.style.left="8%"
            imselector.style.left="8%"
            setTimeout(function(){
                pdishselector.style.top="68%"
                imselector.style.top="68%"
                setTimeout(function(){
                    reading.innerText=imweight
                    setTimeout(function(){
                        pfimselector.innerText=imweight
                        if(petritrial=="2nd"){
                            oimselector.innerText=oimtext
                        }
                        setTimeout(function(){
                            f=53
                            ins.innerText="Click again on petridish to bring it back."
                        },1000)
                    },3000)
                },1000)
            },1000) 
        },1000)
    }

    else if(f==53){
        f=54
        pdishselector.style.top="60%"
        imselector.style.top="60%"
        reading.innerText="00.00"
        setTimeout(function(){
            pdishselector.style.left=imleftnew
            imselector.style.left=imleftnew
            tbl1.style.visibility="hidden"
            setTimeout(function(){
                pdishselector.style.top="83%"
                imselector.style.top="83%"
                f=51
                imverify()
            },1000)
        },1000)
    }


}






function imverify(){
    // ///////////////////////////////////////////////  1st trial  ///////////////////////////////////////////////
    if(petritrial=="1st"){
        if(imselector==im1){
            imselector=im2
            pdishselector=pdish2
            pfimselector = pfim2
            imweight = "72.14"
            imleftnew = "50%"
            ins.innerText="Click on second left petridish to measure its weight and record in table."
        }
        else if(imselector==im2){
            imselector=im3
            pdishselector=pdish3
            pfimselector = pfim3
            imweight = "73.52"
            imleftnew = "60%"
            ins.innerText="Click on middle one petridish to measure its weight and record in table."
        }
        else if(imselector==im3){
            imselector=im4
            pdishselector=pdish4
            pfimselector = pfim4
            imweight = "69.81"
            imleftnew = "70%"
            ins.innerText="Click on second right petridish to measure its weight and record in table."
        }
        else if(imselector==im4){
            imselector=im5
            pdishselector=pdish5
            pfimselector = pfim5
            imweight = "66.76"
            imleftnew = "80%"
            ins.innerText="Click on first right petridish to measure its weight and record in table."
        }
        else if(imselector==im5){
            imselector=im1
            pdishselector=pdish1
            pfimselector = pfimnew1
            imleftnew="40%"
            imweight="42.65"
            startbutton.style.visibility="visible"
            ins.innerText="Press NEXT button."
            f=55
            
        }
    }
    // ///////////////////////////////////////////////  2nd trial  ///////////////////////////////////////////////
    else if(petritrial=="2nd"){
        if(imselector==im1){
            imselector=im2
            pdishselector=pdish2
            pfimselector = pfimnew2
            imweight = "44.75"
            imleftnew = "50%"
            oimselector = oim2
            oimtext = "8.0"
            ins.innerText="Click on second left petridish to measure its weight and record in table."
        }
        else if(imselector==im2){
            imselector=im3
            pdishselector=pdish3
            pfimselector = pfimnew3
            imweight = "45.65"
            imleftnew = "60%"
            oimselector = oim3
            oimtext = "8.9"
            ins.innerText="Click on middle one petridish to measure its weight and record in table."
        }
        else if(imselector==im3){
            imselector=im4
            pdishselector=pdish4
            pfimselector = pfimnew4
            imweight = "42.75"
            imleftnew = "70%"
            oimselector = oim4
            oimtext = "6.0"
            ins.innerText="Click on second right petridish to measure its weight and record in table."
        }
        else if(imselector==im4){
            imselector=im5
            pdishselector=pdish5
            pfimselector = pfimnew5
            imweight = "39.65"
            imleftnew = "80%"
            oimselector = oim5
            oimtext = "2.9"
            ins.innerText="Click on first right petridish to measure its weight and record in table."
        }
        else if(imselector==im5){
            imselector=im1
            pdishselector=pdish1
            pfimselector = pfimnew1
            startbutton.style.visibility="visible"
            startbutton.innerText="Calculations"
            ins.innerText="Press 'Calculations' button."
            f=70
        }
    }






}





function imselect1(){
    if(imselector==im1){
        petriweight()
    }
}

function imselect2(){
    if(imselector==im2){
        petriweight()
    }
}

function imselect3(){
    if(imselector==im3){
        petriweight()
    }
}

function imselect4(){
    if(imselector==im4){
        petriweight()
    }
}

function imselect5(){
    if(imselector==im5){
        petriweight()
    }
}
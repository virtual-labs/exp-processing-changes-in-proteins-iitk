
let startbutton = document.querySelector("#start")
let ins = document.querySelector("#text")
let stp1 = document.querySelector("#stp1")
let stp2 = document.querySelector("#stp2")
let stp3 = document.querySelector("#stp3")
let lastbg = document.querySelector("#lastbg")
let inference = document.querySelector("#inference")



let statuses = 0
let f=0



function start(){
    if(statuses==0){
        statuses=1
        startbutton.style.visibility="hidden"
        ins.innerText="Turn on the wheighing scale . Press ON button !"
        f=1
    }
    else if(f==12){
        stp1.style.visibility="hidden"
        cflasks.style.visibility="visible"
        startbutton.style.visibility="hidden"
        setTimeout(function(){
            stp2.style.visibility="visible"
            powder=sample1
            f=20
            phall.style.visibility="visible"
            ins.innerText="Click on buffer solution bottle to pour 100ml pH 3.0 solution into first left conical flask. "
        },1000)
    }
    else if(f==22){
        f=23
        bufferbottle.style.visibility="hidden"
        buffersol.style.visibility="hidden"
        phcap.style.visibility="hidden"
        stp2.style.visibility="hidden"
        startbutton.style.visibility="hidden"
        setTimeout(function(){
            ins.innerText="Press ON/OFF button on flask shaker machine."
            stp3.style.visibility="visible"
            flaskshakerplace()
        },1000)
    }
    else if(f==32){
        f=33
        startbutton.style.visibility="hidden"
        flaskshakerreverse()
    }
    else if(f==42){
        f=43
        machine.style.left="-100%"
        reading.style.left="-100%"
        tare.style.left="-100%"
        on.style.left="-100%"
        pdish1.style.left="-100%"
        filter1.style.left="-100%"
        startbutton.style.visibility="hidden"
        
        setTimeout(function(){
            f=44
            funnel.style.left="19.9%"
            neflask1.style.left="20%"
            nesol1.style.left="20%"
            ins.innerText="Click on first left flask to pour its solution and filter it."
            flaskselector=flask1
            solselector=sol1

            // 
            // flaskpour()
        },2000)
    }
    else if(f==49){
        f=50
        startbutton.style.visibility="hidden"
        machine.style.left=""
        setTimeout(function(){
            f=51
            reading.style.left=""
            tare.style.left=""
            on.style.left=""
            ins.innerText="Click on First left petridish to measure its weight and record in table."
        },1000)
    }

    else if(f==55){
        f=560
        ovenplace()
        startbutton.style.visibility="hidden"
    }

    else if(f==70){
        f=71
        startbutton.style.visibility="hidden"
        tbl1.style.visibility="visible"
        lastbg.style.top="0%"
        tbl1.style.right="22.5%"
        ins.innerText="Enter solubility for sample A then press check button."

    }
    else if(f==72){
        f=73
        tbl1.style.right="40%"
        graph.style.height="40%"
        graph.style.width="30%"
        startbutton.style.visibility="hidden"
        setTimeout(function(){
            f=74
            startbutton.style.visibility="visible"
            startbutton.innerText="Inference"
            ins.innerText="Press 'Inference' button to see the inference of this experiment."
        },3000)
    }
    else if(f==74){
        f=75
        inference.style.top="0%"
        startbutton.style.visibility="hidden"
        ins.innerText="Congratulations! You have successfully completed the experiment."
    }
        


}



start()


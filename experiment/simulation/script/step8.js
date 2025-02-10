
let formula = document.querySelector("#formula")
let ftext = document.querySelector("#ftext")

let resulter = document.querySelector("#resulter")
let solubilityinput = document.querySelector("#solubilityinput")
let resultbtn = document.querySelector("#resultbtn")
let graph = document.querySelector("#graph")

let s1 = document.querySelector("#s1")
let s2 = document.querySelector("#s2")
let s3 = document.querySelector("#s3")
let s4 = document.querySelector("#s4")
let s5 = document.querySelector("#s5")


let svalue = 41
let fh = 0
let sselector = s1

function fhider(){
    if(fh==0){
        fh=1
        formula.style.height="25%"
        ftext.innerText = "Click me to hide formula"
    }
    else if(fh==1){
        fh=0
        formula.style.height="0%"
        ftext.innerText = "Click me to show formula"
    }
        
}

function checker(){
    if((solubilityinput.value==svalue)){
        resulter.innerText="Correct Answer"
        resulter.style.color="green"
        resulter.style.visibility="visible"
        sselector.innerText=svalue
        resultverify()


    }
    else {
        resulter.innerText="Incorrect Answer"
        resulter.style.color="red"
        resulter.style.visibility="visible"
        resultbtn.style.visibility="visible"
        ins.innerText="Press 'Result' button to see correct answer."
    }
}

function result(){
    resulter.style.visibility="hidden"
    resultbtn.style.visibility="hidden"
    sselector.innerText=svalue
    resultverify()
}




function resultverify(){
    solubilityinput.value=""
    if(sselector==s1){
        sselector=s2
        svalue=20
        solubilityinput.placeholder="Sample B"
        ins.innerText="Enter solubility for sample B then press check button."
    }
    else if(sselector==s2){
        sselector=s3
        svalue=11
        solubilityinput.placeholder="Sample C"
        ins.innerText="Enter solubility for sample C then press check button."
    }
    else if(sselector==s3){
        sselector=s4
        svalue=40
        solubilityinput.placeholder="Sample D"
        ins.innerText="Enter solubility for sample D then press check button."
    }
    else if(sselector==s4){
        sselector=s5
        svalue=71
        solubilityinput.placeholder="Sample E"
        ins.innerText="Enter solubility for sample E then press check button."
    }
    else if(sselector==s5){
        ins.innerText="Press Graph button."
        startbutton.innerText="Graph"
        startbutton.style.visibility="visible"
        f=72
    }
}
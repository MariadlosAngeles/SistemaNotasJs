let studentName=document.getElementById("studentName");
let note1=document.getElementById("note1");
let note2=document.getElementById("note2");
let btnCalculate=document.getElementById("validateNotes1");
let btnCalculate1=document.getElementById("validateNotes");
let btnCalculate3=document.getElementById("validateNotes2");
let btnCalculate4=document.getElementById("validateNotes3");
let element=document.getElementById("colour");

let percentNote1=0;
let percentNote2=0;
let percent1=0;
let percent2=0;
let sum=0;
let result=0;

btnCalculate.addEventListener("click",validar2);
btnCalculate1.addEventListener("click",validar1);
btnCalculate3.addEventListener("click",validar3);
btnCalculate4.addEventListener("click",validar4);


function validateFields(){
    Swal.fire({
        title:"Oops!",
        text:"Asegurate de llenar todos los campos",
        icon:"error",
        timer:5000
    });

    return swal;
}

function validateFields2(){
    Swal.fire({
        title:"Oops!",
        text:"Recuerda que solo puedes ingresar números del 1-5",
        icon:"error",
        timer:5000
    });

    return swal;
}
//setTimeout(validar1, 5000);
function validar1(){
    if(note1.value == "" || note2.value== ""){
        let x=validateFields();
    }else{
        if((note1.value>=1 && note1.value<=5) && (note2.value>=1 && note2.value<=5)){
            percent1=Number(note1.value)*0.3;
            percent2=Number(note2.value)*0.3;
            sum=percent1+percent2;
            let sum2=4.0-sum;
            let sum3=(sum2*100)/40;
        
            if(sum3>=0 && sum3<=3.9){
                Swal.fire({
                    title:"¡Felicidades, estas en cuadro de honor!",
                    text:" Pero debes sacar ( "+sum3.toFixed(2)+" ) en tu nota 3 para mantenerte ahí",
                    color:'#0000FF',
                    icon:'success',
                    timer:5000
                });
            }else if(sum3>=4 && sum3<=5){
                Swal.fire({
                    title:"Ojo!",
                    text:"Debes sacar ( "+sum3.toFixed(2)+") en tu nota 3 si quieres entrar al cuadro de honor",
                    icon:"info",
                    timer:5000
                    
                })
            } else{
                Swal.fire({
                title:"Oops!",
                text:"Ni sacando ( "+sum3.toFixed(2)+" ) en la nota 3 entras al cuadro de honor",
                icon:"error",
                timer:5000
            });
            } 
        }else{
            let x=validateFields2();
        }
        
    }
        
}


function validar2(){
    if(note1.value == "" || note2.value== ""){
        let x=validateFields();
    }else{
        if((note1.value>=1 && note1.value<=5) && (note2.value>=1 && note2.value<=5)){
            percent1=Number(note1.value)*0.3;
            percent2=Number(note2.value)*0.3;
            sum=percent1+percent2;
            let sum2=3.5-sum;
            let sum3=(sum2*100)/40;
            
            if(sum3>=0 && sum3<3.4){
                Swal.fire({
                    title:"Ganaste la materia!",
                    text:"pero debes sacar ("+sum3.toFixed(2)+") en la nota 3 para no perderla",
                    color:"#008000",
                    icon:'success',
                    timer:5000
                });
            }else if(sum3>3.4 && sum3<=3.9){
                Swal.fire({
                title:"Ojo!",
                text:"Te falta ( "+sum3.toFixed(2) +") en la nota 3 para ganar la materia",
                icon:"info",
                timer:5000
                });
            }else if(sum3>4){
                Swal.fire({
                    title:"Oops!",
                    text:" Ni sacando mas de ("+sum3.toFixed(2)+") en la nota 3,podras ganar la materia",
                    icon:"error",
                    timer:5000
                });
            }
        }else{
            let x=validateFields2();
        }
        
    }
    
}

function validar3(){
    if(note1.value == "" || note2.value== ""){
        let x=validateFields();
    }else{
        if((note1.value>=1 && note1.value<=5) && (note2.value>=1 && note2.value<=5)){
            percent1=Number(note1.value)*0.3;
            percent2=Number(note2.value)*0.3;
            sum=percent1+percent2;
            let sum2=2-sum;
            let sum3=(sum2*100)/40;
            
            if(sum3>=0 && sum3<3.4){
                Swal.fire({
                    title:"Puedes recuperar!",
                    text: " Pero debes sacar ("+sum3.toFixed(2) +") en la nota 3",
                    icon:"info",
                    timer:5000
                });
            }else if(sum3>=3.4){
                Swal.fire({
                    title:"No puedes recuperar!", 
                    text:"Pero te falta ("+sum3.toFixed(2) +") en la nota 3, si quieres intentarlo",
                    icon:"error",
                    timer:5000
                });
            }else{
                Swal.fire({
                    title:"No recuperas, pero tampoco pierdes, ponte las pilas!",
                    text:"Solo debes sacar ("+sum3.toFixed(2)+" ) en la nota 3",
                    icon:"info",
                    timer:5000
                });
                
            }
        
        }else{
            let x=validateFields2();
        }
       
    }
    
}

function validar4(){
    if(note1.value == "" || note2.value== ""){
        let x=validateFields();
    }else{
        if((note1.value>=1 && note1.value<=5) && (note2.value>=1 && note2.value<=5)){
            percent1=Number(note1.value)*0.3;
            percent2=Number(note2.value)*0.3;
            sum=percent1+percent2;
            let sum2=1-sum;
            let sum3=(sum2*100)/40;
           
            if(sum3>=0 && sum3<=1){
                Swal.fire({
                    title:"¡Perdiste!",
                    icon:'success',
                    color:"red",
                    icon:'error',
                    timer:5000
                });
            }else if(sum3<1){
                Swal.fire({
                    title:"Puedes recuperar!",
                    text:"Necesitas sacar ("+sum3.toFixed(2)+" ) en la nota 3 para entrar a recuperación",
                    icon:'info',
                    timer:5000
                });
            
    
                
                
            }
        }else{
            let x=validateFields2();
        }
        
    }
}

function colors(){
    let background=document.getElementById("container").style.background=element.value;
}



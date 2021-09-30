const bill =document.querySelector("#box-1");
const cash=document.querySelector("#box-2");
const btncheck=document.querySelector('#check');
var error=document.querySelector("#error");
var notes=document.querySelectorAll(".notes");
const btnclear=document.querySelector('#clear')
var notesavailable=[2000,500,100,20,10,5,2,1];


btnclear.addEventListener("click",function refresh(){
    window.location.reload();
});


btncheck.addEventListener("click",function checkbill()
{

    
    if(bill.value.length==0 || cash.value.length==0)
    {
        error.style.display="block";
        error.style.color="red";
        error.innerHTML="Please enter proper values";
        for(var i=0;i<notesavailable.length;i++){
           
           
            notes[i].innerText="";
        }

    }

    else if(isNaN(bill.value) || isNaN(cash.value))
    {
        error.style.display="block";
        error.style.color="red";
        error.innerHTML="Please enter numerical values";
        for(var i=0;i<notesavailable.length;i++){
           
           
            notes[i].innerText="";
        }

    }
    else if(parseInt(bill.value)<0 || parseInt(cash.value)<0){
        error.style.display="block";
        
        error.style.color="red";
        error.innerHTML="Please enter positive numerical values";
        for(var i=0;i<notesavailable.length;i++){
           
           
            notes[i].innerText="";
        }
       

    }
    else if(parseInt(bill.value) > parseInt(cash.value)){
        error.style.display="block";
        error.style.color="blue";
        error.innerHTML="Please give remaining Bill Amount "+(bill.value-cash.value)+" Rs";
        for(var i=0;i<notesavailable.length;i++){
           
           
            notes[i].innerText="";
        }
    }

    

    else if(bill.value===cash.value){
        error.style.display="block";
        
        error.style.color="rgb(14, 58, 14)";
        error.innerHTML="Amount Paid. Thank You for Visiting. Have a Nice Day."
        for(var i=0;i<notesavailable.length;i++){
           
           
            notes[i].innerText="";
        }

    }

    

    else{
        error.style.display="block";
        error.style.color="purple";
        
        var amt=parseInt(cash.value)-parseInt(bill.value);
        error.innerHTML="Amount to be Returned is "+amt+" Rs";
        for(var i=0;i<notesavailable.length;i++){
            var n=Math.trunc(amt/notesavailable[i]);
            amt=amt%notesavailable[i];
            notes[i].innerText=n;
        }
       
    }

    





});
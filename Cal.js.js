//  CALCULATOR PROGRAM|

const display = document.getElementById("dispaly");
s
function appendToDisplay(input){
    display.value += input;
}

function clearDisplaay(){
    display.value="";
}
function calculate(){
    try{
    display.value =eval(dispaly.value)
    }
   catch(error){
    display.value = "Error";
   }
   
}
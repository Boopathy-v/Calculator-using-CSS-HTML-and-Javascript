let displayOutput = document.getElementById("display");
function display(num){
    displayOutput.value += num;
};
function clr(){
    displayOutput.value ="";
}
function del(){
    displayOutput.value = displayOutput.value.slice(0,-1);
}
function cal(){
    try{displayOutput.value = eval(displayOutput.value);}
    catch(err){
        displayOutput.value = "Invalid Input"
        
    }
}


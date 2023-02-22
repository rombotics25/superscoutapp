var finalDataOut = [];

var submit = document.getElementById("submit");

function submit(){
    if(submit){
    submit.addEventListener("click", function(){
    finalDataOut.push(counter);
    finalDataOut.push(chargeOut);
    console.log(counter);
    console.log(chargeOut);
        }
    )}
}

function clearScreen(){
    document.getElementById("result").value=" ";
}

function display(value){
    document.getElementById("result").value += value;
}

function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
   }

   function back(){
    var a= document.getElementById("result").value;
    var g = Math.trunc( a /10);
    document.getElementById("result").value = g;
   }
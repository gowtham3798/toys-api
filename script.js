const time= 1000;

let num1 = function(callback){
    setTimeout(() =>{
    console.log("10")
    document.getElementById("hp").innerHTML = "10"
  callback();
},1*time)
}


let num2 = function(callback){
    setTimeout(() =>{
    console.log("9")
    document.getElementById("hp").innerHTML = "9"
callback()},1*time)
}

let num3 = function(callback){
    setTimeout(() =>{
    console.log("8")
    document.getElementById("hp").innerHTML = "8"
callback()},1*time)
}
let num4 = function(callback){
    setTimeout(() =>{
    console.log("7")
    document.getElementById("hp").innerHTML = "7"
callback()},1*time)
}
let num5 = function(callback){
    setTimeout(() =>{
    console.log("6")
    document.getElementById("hp").innerHTML = "6"
callback()},1*time)
}
let num6 = function(callback){
    setTimeout(() =>{
    console.log("5")
    document.getElementById("hp").innerHTML = "5"
callback()},1*time)
}
let num7 = function(callback){
    setTimeout(() =>{
    console.log("4")
    document.getElementById("hp").innerHTML = "4"
callback()},1*time)
}
let num8 = function(callback){
    setTimeout(() =>{
    console.log("3")
    document.getElementById("hp").innerHTML = "3"
callback()},1*time)
}
let num9 = function(callback){
    setTimeout(() =>{
    console.log("2")
    document.getElementById("hp").innerHTML = "2"
callback()},1*time)
}
let num10 = function(callback){
    setTimeout(() =>{
    console.log("1")
    document.getElementById("hp").innerHTML = "1"
callback()},1*time)
}
let num = function(callback){
    setTimeout(() =>{
    console.log("new")
    document.getElementById("hp").innerHTML = "Happy Independence Day"
callback()},1*time)
}









     num1(()=>{
         num2(() => {
             num3(() => {
                num4(() => {
                    num5(() => {
                        num6(() => {
                            num7(() => {
                                num8(() => {
                                    num9(() => {
                                        num10(() => {
                                            num(() => {

                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })      
             })
         })
     })
 
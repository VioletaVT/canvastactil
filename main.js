var eventomouse=""
var posicionx
var posiciony
var aww= document.getElementById("Cap")
var agua= aww.getContext("2d")
var color= "pink"
var ancho= 3
aww.addEventListener("mousedown", ola)
function ola(){
    eventomouse="click"
    console.log(eventomouse)
    color=document.getElementById("lala").value
    ancho=document.getElementById("guau").value
}
aww.addEventListener("mouseup", alo)
function alo(){
    eventomouse="soltar"
    console.log(eventomouse)
}
aww.addEventListener("mouseleave",adio)
function adio(){
    eventomouse="bye"
    console.log(eventomouse)
}
aww.addEventListener("mousemove",semovio)
function semovio(s){
 derecha=s.clientX-aww.offsetLeft
 arriba=s.clientY-aww.offsetTop
 if (eventomouse=="click"){
    agua.beginPath()
agua.strokeStyle=color
agua.lineWidth= ancho
console.log("x:"+posicionx)
console.log("y:"+posiciony)
agua.moveTo(posicionx,posiciony)
agua.lineTo(derecha,arriba)
agua.stroke()
 }
 posicionx=derecha
 posiciony=arriba
}
function jaja(){
    agua.clearRect(0,0,aww.width,aww.height)
}


var blue= screen.width
var fallo= screen.width -100
var cap= screen.height -300

if (blue<990){
    aww.width=fallo
    aww.height=cap
    document.body.style.overflow="hidden"
}
aww.addEventListener("touchstart",toco)
function toco(s){
    console.log("toco la pantalla")
    color=document.getElementById("lala").value
    ancho=document.getElementById("guau").value
    posicionx=s.touches[0].clientX-aww.offsetLeft
    posiciony=s.touches[0].clientY-aww.offsetTop
    
}
aww.addEventListener("touchmove",lotocoysemovio)
function lotocoysemovio(s){
    console.log("lo moviste")
    derecha=s.touches[0].clientX-aww.offsetLeft
    arriba=s.touches[0].clientY-aww.offsetTop
    agua.beginPath()
agua.strokeStyle=color
agua.lineWidth= ancho
console.log("x:"+posicionx)
console.log("y:"+posiciony)
agua.moveTo(posicionx,posiciony)
agua.lineTo(derecha,arriba)
agua.stroke()
posicionx=derecha
 posiciony=arriba
}
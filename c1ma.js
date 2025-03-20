var src=["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];
function randi(){
    return Math.floor( Math.random()*6);
}
function rifresko() {
var n1=randi()+1;
var n2=randi()+1;
document.querySelector(".img1").setAttribute("src","./images/dice"+n1+".png");
document.querySelector(".img2").setAttribute("src",src[n2-1]);
if (n1>n2) {
    document.querySelector("h1").innerHTML=" 🚩Player 1 Win";
} else if(n1===n2) {
    document.querySelector("h1").innerHTML="Draw";
}else{ 
    document.querySelector("h1").innerHTML="Player 2 Win 🚩";
}
}
  
function cima(){
document.querySelectorAll("p")[0].innerHTML="C1MA"; 

}   
   var btn=document.querySelector("#buut");
   btn.addEventListener("click",rifresko);  
   

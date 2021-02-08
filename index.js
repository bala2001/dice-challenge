var pers1 = document.querySelectorAll("p")[0].textContent; //player 1
pers1 = prompt("enter your name:");
document.querySelectorAll("p")[0].textContent=pers1;
var pers2 = document.querySelectorAll("p")[1].textContent; //player 2
pers2 = prompt("enter your friend name:");
document.querySelectorAll("p")[1].textContent=pers2

var randomNum1=Math.random();
randomNum1=randomNum1*6+1;
randomNum1=Math.floor(randomNum1);
var randomImg1="images/dice"+randomNum1+".png";
var randomNum2=Math.random();
randomNum2=randomNum2*6+1;
randomNum2=Math.floor(randomNum2);
var randomImg2="images/dice"+randomNum2+".png";
var image1=document.querySelectorAll(".img1")[0];
image1.setAttribute("src",randomImg1);
var image2=document.querySelectorAll(".img2")[0];
image2.setAttribute("src",randomImg2);

if(randomNum1>randomNum2) {
    document.querySelector("h1").innerHTML="🎈 🎉🎉🎊🎉 "+ pers1+" wins "+pers2;
}
else if(randomNum1<randomNum2) {
    document.querySelector("h1").innerHTML="🎈 🎉🎉🎊🎉  "+ pers2+" wins "+pers1;

}
else {
    document.querySelector("h1").innerHTML="Match Draw";

}
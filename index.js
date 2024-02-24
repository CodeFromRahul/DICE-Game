// document.querySelector(".dice img").getAttribute(src);

// document.querySelector(".dice img").click()
var randomNumber = Math.ceil(Math.random()*6);
// console.log(randomNumber);
var randomNumber2 = Math.ceil(Math.random()*6);



if(randomNumber==1){
document.querySelector(".dice img").setAttribute("src","./images/dice1.png");
}
else if(randomNumber==2){
document.querySelector(".dice img").setAttribute("src","./images/dice2.png");
}
else if(randomNumber==3){
document.querySelector(".dice img").setAttribute("src","./images/dice3.png");
}
else if(randomNumber==4){
document.querySelector(".dice img").setAttribute("src","./images/dice4.png");
}
else if(randomNumber==5){
document.querySelector(".dice img").setAttribute("src","./images/dice5.png");
}

else{
document.querySelector(".dice img").setAttribute("src","./images/dice6.png");

}



if(randomNumber2==1){
    document.querySelector(".dice .img2").setAttribute("src","./images/dice1.png");
    }
    else if(randomNumber2==2){
    document.querySelector(".dice .img2").setAttribute("src","./images/dice2.png");
    }
    else if(randomNumber2==3){
    document.querySelector(".dice .img2").setAttribute("src","./images/dice3.png");
    }
    else if(randomNumber2==4){
    document.querySelector(".dice .img2").setAttribute("src","./images/dice4.png");
    }
    else if(randomNumber2==5){
    document.querySelector(".dice .img2").setAttribute("src","./images/dice5.png");
    }
    
    else{
    document.querySelector(".dice .img2").setAttribute("src","./images/dice6.png");
    
    }
    
    


if(randomNumber==6){
    document.querySelector(".container h1").innerHTML="🚩Player1 wins"
}
if(randomNumber2==6){
    document.querySelector(".container h1").innerHTML="🚩🚩Player2 win"
}

if((randomNumber2==6) && (randomNumber==6)){
    document.querySelector(".container h1").innerHTML="MATCH TIES❤️❤️"

}

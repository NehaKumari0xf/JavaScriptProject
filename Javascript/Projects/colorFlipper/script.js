var colors=["Red", "Green","Yellow","Pink","Purple","Black","Orange","Blue","Brown"];

function changeColor(){
    var btn=document.getElementById("btn");
        var rNum= getRandomNumber();
        document.body.style.backgroundColor=colors[rNum];
        var colorName=document.getElementById("colorName");
        var strColorName=parseInt(colorName);
        colorName.innerHTML=colors[rNum];
    
}

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}

function reset(){
    document.body.style.backgroundColor="whitesmoke";
    var rcolorName=document.getElementById("colorName");
    var strColorName=parseInt(colorName);
    rcolorName.innerHTML="WhiteSmoke";
}

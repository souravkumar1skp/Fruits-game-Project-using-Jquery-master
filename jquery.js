var playing = false;
var score;
var trialsleft;
var step;
var action;
var fruits = ['apple','grapes','guava','mango','pineapple','watermelon','lemon','pear','cucumber','banana'];
$(function(){

    $("#startreset").click(function(){
     
        if(playing == true){
         
            location.reload();
        }
        else{
            playing = true;
            score = 0;
            $("#scorevalue").html(score);

            $("#trialsleft").show();
            trialsleft = 3;

            addHearts();

            $("#gameover").hide();

            $("#startreset").html("Reset Game");

            startAction();

        }
    });

    $("#fruit1").mouseover(function(){

        score++;
        $("#scorevalue").html(score);
        document.getElementById("slicesound").play();

       clearInterval(action);

       $("#fruit1").hide("explode", 500);

        setTimeout(startAction, 500);
    });


function addHearts(){

    $("#trialsleft").empty();

    for(i=0;i<trialsleft;i++){

        $("#trialsleft").append('<img src="Images/heart.svg" class="life">');

    }
}

function startAction(){
 $("#fruit1").show();
 chooseFruit();
 $("#fruit1").css({'left' : Math.round(550*Math.random()), 'top' : -50, 'height' : 80});

step = 1+Math.round(9*Math.random());

action = setInterval(function(){

    $("#fruit1").css('top' , $("#fruit1").position().top + step)

    if($("#fruit1").position().top > $("#fruitsContainer").height()){
      
        if(trialsleft > 1){
            $("#fruit1").show();
            chooseFruit();
            $("#fruit1").css({'left' : Math.round(550*Math.random()), 'top' : -50});
           
           step = 1+Math.round(9*Math.random());
           trialsleft--;
           addHearts();
        }
        else{
           
            playing = false;
            $("startreset").html("Start Game");
            $("#gameover").show();
            $("#gameover").html('<p>Game Over: </p><p>Your score is ' + score + '</p>');
            
            $("#trialsleft").hide();
            stopAction();

        }
    }
}, 10);
    
}

function chooseFruit(){
    $("#fruit1").attr('src' , 'Images/'+ fruits[Math.round(9*Math.random())] +'.png');
}

function stopAction(){

    clearInterval(action);
    $("#fruit1").hide();
}

});
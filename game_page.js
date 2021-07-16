var pname1=localStorage.getItem("Player1Name");
var pname2=localStorage.getItem("Player2Name");

var pscore1=0;
var pscore2=0;

document.getElementById("playername_1").innerHTML=pname1;
document.getElementById("playername_2").innerHTML=pname2;
document.getElementById("player_score_1").innerHTML=pscore1;
document.getElementById("player_score_2").innerHTML=pscore2;

document.getElementById("question_turn").innerHTML="Question turn: "+pname1;
document.getElementById("answer_turn").innerHTML="Answer turn: "+pname2;

function sendword(){
    word=document.getElementById("input").value;
    lcword=word.toLowerCase();
    console.log(lcword);

    cAT1=lcword.charAt(0);
    console.log(cAT1);


    length_word= lcword.length-1;
    cAT2=lcword.charAt(length_word);
    console.log(cAT2);

    middle_l=Math.floor(lcword.length/2);
    cAT3=lcword.charAt(middle_l);
    console.log(cAT3);

    removec1= lcword.replace(cAT1,"_");
    removec2= removec1.replace(cAT2,"_");
    removec3= removec2.replace(cAT3,"_");
    console.log(removec3);
    
    question="<h4>Q. "+removec3+" </h4>";
    answer="Answer: <input placeholder='Type Your Guess' id='input_answer'>";
    check_button="<button class='btn btn-warning' onclick='check()'>Check</button>";
    document.getElementById("output").innerHTML= question+answer+check_button;
    
    document.getElementById("input").value=" ";
}
question_turn="player1"
answer_turn="player2"

function check(){
    getanswer=document.getElementById("input_answer").value;
    lcanswer=getanswer.toLowerCase();

    if(lcanswer==lcword){
        if(answer_turn=="player1"){
            pscore1=pscore1+1;
            document.getElementById("player_score_1").innerHTML=pscore1;

            document.getElementById("win").innerHTML="You Got It!";
        }
        else{
            pscore2=pscore2+1;
            document.getElementById("player_score_2").innerHTML=pscore2;

            document.getElementById("win").innerHTML="You Got It!";
        }
    }





    if(lcanswer!=lcword){
        if(answer_turn=="player1"){
            pscore1=pscore1-1;
            document.getElementById("player_score_1").innerHTML=pscore1;

            document.getElementById("win").innerHTML="Incorrect answer :(";
        }
        else{
            pscore2=pscore2-1;
            document.getElementById("player_score_2").innerHTML=pscore2;

            document.getElementById("win").innerHTML="Incorrect answer :(";
        }
    }






    if(question_turn=="player1"){
        question_turn="player2";
        answer_turn="player1";
        document.getElementById("question_turn").innerHTML="Question turn: "+pname2;
        document.getElementById("answer_turn").innerHTML="Answer turn: "+pname1;
    }
    else{
        question_turn="player1";
        answer_turn="player2";
        document.getElementById("question_turn").innerHTML="Question turn: "+pname1;
        document.getElementById("answer_turn").innerHTML="Answer turn: "+pname2;
    }
}
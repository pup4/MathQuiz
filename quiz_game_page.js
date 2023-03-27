player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+": ";
document.getElementById("player2_name").innerHTML=player2_name+": ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn - "+player1_name;
document.getElementById("player_answer").innerHTML="Answer turn - "+player2_name;

question_turn="player1";
answer_turn="player2";

function send(){
    numb1=document.getElementById("numb1").value;
    numb2=document.getElementById("numb2").value;
    actual_answer=parseInt(numb1)*parseInt(numb2);
    console.log(actual_answer);

    question_number="<h4>"+numb1+"X"+numb2+"</h4>";
    input_box="<br>Answer: <input type='text' id=input_check_box>";
    check_button="<button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_number+input_box+check_button;

    document.getElementById("output").innerHTML=row;
    document.getElementById("numb1").value="";    
    document.getElementById("numb2").value="";    
}

function check(){
    get_answer=document.getElementById("input_check_box").value;

    if(get_answer==actual_answer){
        if(answer_turn=="player1"){
            update_player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=update_player1_score;
        }
        else{
            update_player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=update_player2_score;
        }
    }

    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question turn - "+player2_name;
    }
    else{
        question_turn="player1";
        document.getElementById("player_question").innerHTML="Question turn - "+player1_name;
    }

    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="Answer turn - "+player2_name;
    }
    else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer turn - "+player1_name;
    }

    document.getElementById("output").innerHTML="";
}
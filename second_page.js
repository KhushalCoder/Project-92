Player1_name = localStorage.getItem("player1");
Player2_name = localStorage.getItem("player2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = Player1_name + " :";
document.getElementById("player2_name").innerHTML = Player2_name + " :";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + Player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + Player2_name;


function send() {
    
    number1 = document.getElementById("number_1").value ;
    number2 = document.getElementById("number_2").value ;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + "X" + number2 + "</h4>"
    input_box = "<br>Answer : <input type='number' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-primary' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button; 
    document.getElementById("output").innerHTML = row;

    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}

function div() {
    num_div1 = document.getElementById("number_1").value ;
    num_div2 = document.getElementById("number_2").value ;
    actual_div_answer = parseInt(num_div1) * parseInt(num_div2);

    question_div_number = "<h4>" + num_div1 + "/" + num_div2 + "</h4>"
    input_div_box = "<br>Answer : <input type='number' id='input_check_box2'>";
    check_button2 = "<br><br><button class='btn btn-primary' onclick='check_div()'>Check</button>";
    row2 = question_div_number + input_div_box + check_button2; 
    document.getElementById("output").innerHTML = row2;

    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}

function add() {
    
}

question_turn = "player1";
answer_turn = "player2";
function check(){
    get_answer = document.getElementById("input_check_box").value;
    console.log(get_answer);

    if (get_answer == actual_answer ) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

    if (question_turn == "player1") {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question turn - " + Player2_name;
    }
    else{
    question_turn =="player1"
    document.getElementById("player_question").innerHTML = "Question Turn - " + Player1_name;
    }

    if (answer_turn == "player2") {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + Player1_name;
    }
    else {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + Player2_name;
    }

    document.getElementById("output").innerHTML = "";
    
}

question_turn2 = "player1"
answer_turn2 = "player2"
function check_div() {
    get_div_answer = document.getElementById("input_check_box2").value;
    console.log(get_div_answer);

    if (get_div_answer == actual_div_answer ) {
        if (answer_turn2 == "player1") {
            player1_score = player1_score + 1
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

    if (question_turn2 == "player1") {
        question_turn2 = "player2"
        document.getElementById("player_question").innerHTML = "Question turn - " + Player2_name;
    }
    else{
    question_turn2 =="player1"
    document.getElementById("player_question").innerHTML = "Question Turn - " + Player1_name;
    }

    if (answer_turn2 == "player2") {
        answer_turn2 = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + Player1_name;
    }
    else {
        answer_turn2 = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + Player2_name;
    }

    document.getElementById("output").innerHTML = "";
    
}

var player = true;
var color_player_none = "rgb(0, 128, 0)";
var color_player_one = "rgb(128, 128, 128)";
var color_player_two = "rgb(0, 0, 0)";

$(".cell").css("background-color", color_player_none);
$(".cell").width("200px");
$(".cell").height("200px");
$(".cell").css("margin","3px");

$(".reset").css("height","50px");
$(".reset").css("width","150px");
$(".reset").css("background-color","red");
$(".reset").click(recet);

$(".line").css("display","flex");

function recet(){
    $(".cell").css("background-color", color_player_none);
    player = true;

    $(".cell").width("200px");
    $(".cell").height("200px");
    $(".reset").width("150px");
    $(".reset").text("Очистить");
}

$(".cell").click(function (){
    if($(this).css("background-color") === color_player_none){
        if(player){
            $(this).css("background-color", color_player_one);
            player = false;
        }
        else{
            $(this).css("background-color", color_player_two);
            player = true;
        }

        let playerWin = checkWin();
        if (playerWin){
            win(playerWin);
        }
    }
})

function win(player){
    $(".cell").css("background-color", color_player_none);
    player = true;

    $(".cell").width("10px");
    $(".cell").height("10px");
    $(".reset").width("100%");
    $(".reset").text("Рестарт");
}

function checkWin(){
    let arr = [[],[],[]];
    let color = "";
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            color = $("#cell_"+(i*3+j)).css("background-color");
            let value = color === color_player_none ? "none": color === color_player_one ? "one": "two";
            arr[i][j] = value;
        }
    }

    if(checkPlayer(arr, "one")){
        return 1;
    }
    
    if(checkPlayer(arr, "two")){
        return 2;
    }
    return 0;
}

function checkPlayer(arr, player){
    for(let i = 0; i < 3; i++){
        if(player === arr[i][0] && player === arr[i][1] && player === arr[i][2]){
            return true;
        }
    }
    
    for(let i = 0; i < 3; i++){
        if(player === arr[0][i] && player === arr[1][i] && player === arr[2][i]){
            return true;
        }
    }

    if(player === arr[0][0] && player === arr[1][1] && player === arr[2][2]){
        return true;
    }

    if(player === arr[0][2] && player === arr[1][1] && player === arr[2][0]){
        return true;
    }

    return false;
}
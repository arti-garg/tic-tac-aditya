var h, w;
var board = [
    ["", "", ""], ["", "", ""], ["", "", ""]
];
var player1 = "x",
    player2 = "o";

var currentPlayer = player1;

var winner = null;
var r1= null;
function setup() {
    canvas = createCanvas(500, 500);
    w = width / 3;
    h = height / 3;

}

function draw() {



    background("black");
    stroke("white")
    strokeWeight(5)
    line(w, 0, w, height);
    line(w * 2, 0, w * 2, height);
    line(0, h, width, h);
    line(0, h * 2, width, h * 2)

    for (var j = 0; j < 3; j++) {

        for (var i = 0; i < 3; i++) {

            var x = w * i + w / 2;
            var y = h * j + h / 2;
var r = w/4;
var spot = board[i][j];

if (spot == player1){

line(x-r,y-r,x+r,y+r);
line (x+r,y-r,x-r,y+r);

} else if (spot == player2){

noFill();    
ellipse(x,y,r*2)

}

        }


    }
  console.log(checkWinner())

   

}

function keyPressed(){

var i = floor(mouseX/w);
var j = floor(mouseY/h);
console.log("the value of i is " +i)
console.log("the value of j is " + j)
if (keyCode == 88){


if (currentPlayer == player1 ){

if (board[i][j] == ""){

board[i][j]=player1;
currentPlayer = player2;

}

}

}

if (keyCode == 79){

if (currentPlayer == player2 ){

    if (board[i][j] == ""){
    
    board[i][j]=player2;
    console.log("yes");
    currentPlayer = player1;
    

    }
    
    }
}
}


function compare(a,b,c){

if (a== b && a== c && a!= "" ){

return true;

}

}

function checkWinner(){

// check vertical
for (var i=0; i<3; i++){

    if(compare(board[i][0], board[i][1], board[i][2]))
    {
        winner = board[i][0];
    }
}

//check horizontal

for (var i =0; i<3; i++){

    if (compare( board[0][i], board[1][i], board[2][i])){

        winner = board[0][i]
    }
}

//check diagonal1


    if (compare(board[0][0],board[1][1], board[2][2] )){
        winner = board[0][0];

    }

   // check diagonal2

    if (compare(board[2][0], board[1][1], board[0][2])){
winner = board[2][0];

    }

    let openslots =0
    for (var i=0; i<3; i++){
        for (var j=0; j<3; j++){

            if (board[i][j]==' '){
                openslots++;
            }
        }
    }

    if (winner==null && openslots==0){
        return 'tie'
    }
    else 
    {
        return winner
    }
}


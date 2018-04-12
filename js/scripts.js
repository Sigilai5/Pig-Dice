//this is the backend

function Player(roll,currentScore,totalScore) {
    this.roll = roll;
    this.currentScore = currentScore;
    this.totalScore = totalScore;

}

//Players involved
var player1 = new Player(0,0,0);
var player2 = new Player(0,0,0);

//the dice logic
var dice = function () {
    return Math.floor(Math.random()* 6) + 1;
}

//roll button
Player.prototype.diceOne = function () {
  if ( this.roll === 1){
      this.currentScore = 0;
  }

  else {
      this.currentScore += this.roll;

  }

}

//hold button
Player.prototype.hold = function () {
    this.totalScore += this.currentScore;
}

//determine the winner
Player.prototype.winner = function () {
    if(this.totalScore >= 100) {
        alert("You are the winner!")

    }
}



//Front-end

//play is clicked
$(document).ready(function () {
    $('#play').click(function () {
        $('.pig-dice').show();
        $('#play').hide();
    });

//player1 clicks roll
    $('#roll1').click(function () {
        player1.roll = dice();
        $('.roll1Result').text(player1.roll);
        player1.diceOne();
        $('.current1').text(player1.currentScore);

    });


//player1 clicks hold
    $('#hold1').click(function () {
        player1.hold();
        $('.total1').text(player1.totalScore);
        $('.roll1Result').empty();
        $('.current1').empty();
        player1.winner();
        $('#roll1').hide();
        $('#roll2').show();
    });

    //player2 clicks roll
    $('#roll2').click(function () {
        player2.roll = dice();
        $('.roll2Result').text(player2.roll);
        player2.diceOne();
        $('.current2').text(player2.currentScore);

    });

    //player2 clicks hold
    $('#hold2').click(function () {
        player2.hold();
        $('.total2').text(player2.totalScore);
        $('.roll2Result').empty();
        $('.current2').empty();
        player2.winner();
        $('#roll2').hide();
        $('#roll1').show();
    });



});
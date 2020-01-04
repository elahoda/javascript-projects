$(document).ready(function() {

var magic8Ball = {};
$("#answer").hide();
$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
	var askClick = function()
{
$("#answer").hide();
$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
	setTimeout(
		function(){
		var question = prompt("Ask me anything");
		magic8Ball.askMe(question);}, 500);
	};

magic8Ball.listofAnswers = ["yes","no","maybe","not likely", "definetly", "not sure", "ask later"];
magic8Ball.askMe = function (question) {
$("#8ball").effect("shake");
	var randomNumber = Math.random();
var randomNumberArray = randomNumber * this.listofAnswers.length;
var randomIndex = Math.floor(randomNumberArray);
var answer = this.listofAnswers[randomIndex];
$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
$("#answer").fadeIn(4000);
$("#answer").text(answer);


 console.log(question);
 console.log(answer);

};

$("#questionButton").click(askClick);

});

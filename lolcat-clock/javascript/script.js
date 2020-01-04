var lolcat = document.getElementById('lolcat');
var message;
var image;
var wakeUp = 8;
var noon = 12;
var lunch = 13;
var nap = 14;
var evening = 18;
var partyTime = 21;
var oneSecond = 1000;


var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var wakeUpEvent = function()
	{
		wakeUp = wakeUpTimeSelector.value;
	};
wakeUpTimeSelector.addEventListener('change',wakeUpEvent);

var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var lunchTimeEvent = function()
	{
		lunch = lunchTimeSelector.value;
	};
lunchTimeSelector.addEventListener('change',lunchTimeEvent);

var napTimeSelector = document.getElementById("napTimeSelector");
var napEvent = function()
	{
		nap = napTimeSelector.value;
	};
napTimeSelector.addEventListener('change',napEvent);


var isPartyTime = false;
var partyTimeButton = document.getElementById('partyTimeButton');
var partyEvent = function() {

   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
	  partyTimeButton.innerText = "Party Time!";// text in the button should read "Party Over"
      partyTimeButton.style.backgroundColor = "#0A8DAB";// color of the button should be "#0A8DAB" (bonus!)
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
	  partyTimeButton.innerText = "Party Over!";// text in the button should read "PARTY TIME!"
      partyTimeButton.style.backgroundColor = "#222";// color of the button should be "#222" (bonus!)
   }
};
partyTimeButton.addEventListener("click",partyEvent);


var time = new Date().getHours();
var timeEvent = document.getElementById('timeEvent');
var updateClock = function()
	{
	var showCurrentTime = function ()
		{
		var clock = document.getElementById('clock');
		var currentTime = new Date();
		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		var seconds = currentTime.getSeconds();
		var meridian = "AM";

		if (hours >= noon)
		{
			meridian = "PM";
		}
		if (hours > noon)
		{
			hours = hours - 12;
		}
		if (minutes < 10 )
		{
			minutes = "0" + minutes;
		}
		if (seconds < 10)
		{
			seconds = "0" + seconds;
		}
		var clockTime = hours + ":" + minutes + ":" + 			seconds + ":" + " " + meridian + "!" ;
		clock.innerText = clockTime;
		};
	showCurrentTime();


		if (time == wakeUp)
			{
				image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
				message = "Gooood Morning";
			}
			else if (time == lunch)
			{
				image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
				message = "Lunchy Munchy time";
			}
			else if (time == nap)
			{
				image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
				message = "Nap time";
			}
			else if (time == partyTime)
			{
		   image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
		   message = "PARTy TIME!!";
				}
			else
			{
				image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
				message = "what ever time";
			}
		timeEvent.innerText = message;
		lolcat.src = image;


};
updateClock();

setInterval(updateClock, oneSecond);

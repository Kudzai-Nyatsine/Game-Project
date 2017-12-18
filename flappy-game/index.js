//Get the page to respond to jQuery

//Make the character move up and down when selected 

// Get the background to move when bird moves 

//Increase the speed as the game progresses 

// Record the scores when character moves in between the bars 

// Resets the game when character hits the bars and alert losing message

// Give a winning score

$(function(){

// Saving Dom Objects to variables 
var container = $('#container');
var character = $('#character');
var bar = $('.bar');
var bar_1 = $('#bar_1');
var bar_2 = $('#bar_2');
var score = $('#score');
var speed = $('#speed');
var score = $('#score');
var reset_btn = $('#reset_btn');


//Declaring the game's characteristics
var container_height = parseInt(container.height());
var container_width = parseInt(container.width());
var bar_initial_position = parseInt(bar.css('right'));
var bar_initial_height = parseInt(bar.css('height'));
var character_left = parseInt(character.css('left'));
var character_height = parseInt(character.height());
var speed = 12;

// Used the Interval method to get the bars moving from right to left within 40 milliseconds

var game = setInterval(function(){

	 var bar_position = parseInt(bar.css('right'));

	// set the condition to enable the bar to keep moving
	
	if(bar_position > container_width){
		bar_position = bar_initial_position;
	}

	bar.css('right',bar_position + speed); 
	},35)

});
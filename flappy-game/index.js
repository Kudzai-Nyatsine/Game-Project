//Get the page to respond to jQuery

//Increase the speed as the game progresses 

// Get the background to move when bird moves 

//Make the character move up and down when selected 

// Record the scores when character moves in between the bars 

// Resets the game when character hits the bars and alert losing message

// Give a winning score

$(function(){

	// Saving Dom Objects to variables 
	var container = $('#container');
	var character = $('#character');
	var bar = $('.bar');
	var box = $('.box')
	var bar_1 = $('#bar_1');
	var bar_2 = $('#bar_2');
	var score = $('#score');
	var acceleration_span = $('#acceleration');
	var reset_btn = $('#reset_btn');


	//Declaring the game's characteristics
	var container_height = parseInt(container.height());
	var container_width = parseInt(container.width());
	var bar_initial_position = parseInt(bar.css('right'));
	var bar_initial_height = parseInt(bar.css('height'));
	var character_left = parseInt(character.css('left'));
	var character_height = parseInt(character.height());
	var acceleration = 11;

	// Event declaration

	var move_up = false;

	// Used the Interval method to get the bars moving from right to left within 40 milliseconds

	var game = setInterval(function(){

		 var bar_position = parseInt(bar.css('right'));

		// set the condition to enable the bar to keep moving
		 
		if(bar_position > container_width){
			// giving variable to new height when it flactuates as player progesses 
			var diff_height = parseInt(Math.floor(Math.random() * 100));

			bar_1.css('height',bar_initial_height + diff_height);
			bar_2.css('height',bar_initial_height - diff_height);

			// increase the acceleration

			acceleration = acceleration + 0.5;


			acceleration_span.text(acceleration);

			bar_position = bar_initial_position; 


		}

		bar.css('right',bar_position + acceleration); 

		// setting condition for the character's movement

		if(move_up === false) {

			move_down();
		}

		//function for the character to gain gravity as set in the above condition

		function move_down() {
			character.css('top',parseInt(character.css('top')) + 5);
		}

	
	},35)

	$(document).on('keydown',function(e){
		var key = e.keyCode;
		if (key === 38) {

			move_up = setInterval(up, 50);
		}
	});
	// function to move the character upwards
	function up(){

		character.css('top',parseInt(character.css('top'))-10);
	}


});





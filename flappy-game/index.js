//Get the page to respond to jQuery

//Increase the speed as the game progresses 

// Get the background to move when bird moves 

//Make the character move up and down when selected 

// Record the scores when character moves in between the bars 

// Resets the game when character hits the bars and alert losing message

// Get the reset button to work


$(function(){

	// Saving Dom Objects to variables 
	var character = $('#character');

	//Declaring the game's characteristics
	var container_height = parseInt($('#container').height());
	var container_width = parseInt($('#container').width());
	var bar_initial_position = parseInt($('.bar').css('right'));
	var bar_initial_height = parseInt($('.bar').css('height'));
	var character_left = parseInt($('#character').css('left'));
	var character_height = parseInt($('#character').height());
	var acceleration = 18;

	// Event declaration

	var move_up = false;

	//score_update declaration

	var score_update = false;

	var game_over = false;

	// Used the Interval method to get the bars moving from right to left within 40 milliseconds

	var game = setInterval(function(){



		// condition set when the character collides with the bars
          var topBarCollision = collision($('#character'), $('#bar_1'));
          var bottomBarCollision = collision($('#character'), $('#bar_2'));
          var ceilingCollision = parseInt($('#character').css('top')) <= 0;
          var floorCollision = parseInt($('#character').css('top')) > container_height - character_height;

        if ( topBarCollision || bottomBarCollision || ceilingCollision || floorCollision) {
       

            terminate_the_game();
        } 


		 var bar_position = parseInt($('.bar').css('right'));

		 // update the scorecard when the bars pass the character successfully

		 if (bar_position > container_width - character_left) {

		 	if (score_update === false) {

		 	$('#score').text(parseInt($('#score').text()) + 2);
		 	score_update = true;
		 	}
		 }
		// set the condition to enable the bar to keep moving

		// saving score 

		 
		if(bar_position > container_width){
			// giving variable to new height when it flactuates as player progesses 
			var diff_height = parseInt(Math.floor(Math.random() * 100));

			$('#bar_1').css('height',bar_initial_height + diff_height);
			$('#bar_2').css('height',bar_initial_height - diff_height);

			// increase the acceleration

			acceleration = acceleration + 0.5;


			$('#acceleration').text(acceleration);

			score_update = false;

			bar_position = bar_initial_position; 


		}

		$('.bar').css('right',bar_position + acceleration); 

		// setting condition for the character's movement

		if(move_up === false) {

			move_down();
		}

		//function for the character to gain gravity as set in the above condition

		function move_down() {
			$('#character').css('top',parseInt($('#character').css('top')) + 5);
		}

	},35);

// functions to set the key events

	$(document).on('keydown',function(e){
		var key = e.keyCode;
		if (key === 38 && move_up == false && game_over === false) {

			move_up = setInterval(up, 50);
		}
	});

	$(document).on('keyup',function(e){

		var key = e.keyCode;

		if (key === 38) {
			
			clearInterval(move_up);
			move_up = false;
		}
	});
	//function for the character to gain gravity as set in the above condition

	function move_down() {
			$('#character').css('top',parseInt($('#character').css('top')) + 5);
		}
	// function to move the character upwards
	function up(){

		$('#character').css('top',parseInt($('#character').css('top'))-10);
	}
//function to stop the game when character collides with the bars

	function terminate_the_game(){

		clearInterval(game);
		game_over = true;
		$('#reset_btn').slideDown();
	}

	// reset button function

	$('#reset_btn').click(function(){
		location.reload();
	})
//function to set collision of the character 
	function collision($div1, $div2) {
        var x1 = $div1.offset().left;
        var y1 = $div1.offset().top;
        var h1 = $div1.outerHeight(true);
        var w1 = $div1.outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = $div2.offset().left;
        var y2 = $div2.offset().top;
        var h2 = $div2.outerHeight(true);
        var w2 = $div2.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
        	return false;
        }else {
        return true;
    	}
    }

});
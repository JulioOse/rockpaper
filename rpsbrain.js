$(document).ready(function() {
	/*defining variables */
	var winner = '';
	var compChoice = ['rock', 'paper', 'scissors'];
	var num1 = 0;
	var num2 = 0;
	$(function() {
       var $img = $("#image1");
       rotate(0);
       function rotate(degree) {
       // For webkit browsers: e.g. Chrome
       $img.css({ WebkitTransform: 'rotateY(' + degree + 'deg)'});
       // For Mozilla browser: e.g. Firefox
       $img.css({ '-moz-transform': 'rotateY(' + degree + 'deg)'});
	   // standard syntax
	   $img.css({ 'transform': 'rotateY(' + degree + 'deg)'});
        // Animate rotation with a recursive call
        setTimeout(function() { rotate(++degree); },65);
       }
    });
	function brain(user) {
		/*computer choice */
		var choiceran = Math.floor(Math.random() * 3);
		var comp = compChoice[choiceran];
		/*set image based on computer choice */
		$('#computerchoice').html(comp);
		switch(comp) {
			case 'rock':
				$('#image1').css("background-image", "url('https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtr6TdKZKnUxj_4X3XzR51juQuMuHefh6Vp2ZfBWQ_Fl7HU8QM')");
				$('#image1').css('background-color', 'white');
				break;
			case 'paper':
				$('#image1').css("background-image", "url('http://www.freeonlinepcgames.net/i/x12225.jpg.pagespeed.ic.uRsEWi5-ve.jpg')");
				$('#image1').css('background-color', 'green');
				break;
			case 'scissors':
				$('#image1').css("background-image", "url('http://fc09.deviantart.net/fs23/i/2007/355/f/b/Rock_Paper_Scissors_by_Computer_Turret.png')");
				$('#image1').css('background-color', 'black');
				break;
		}
		console.log(comp);
		/*check who wins and set variable */
		if(user === comp) {
			winner = 'tie';
		} else if(user === 'rock') {
			if(comp === 'paper') {
				winner = 'lose';
			} else {
				winner = 'win';
			}
		} else if(user === 'paper') {
			if(comp === 'rock') {
				winner = 'win';
			} else {
				winner = 'lose';
			}
		} else if(user === 'scissors') {
			if(comp === 'rock') {
				winner = 'lose';
			} else {
				winner = 'win';
			}
		}
	
	}
	/*set the results and add to score */
	function compare() {
		$('#results').html('YOU ' + winner.toUpperCase())
		if(winner === 'win') {
			num1++;
			var stringnum1 = num1.toString();
			$('#box1').html(stringnum1);
		} else if(winner === 'lose') {
			num2++;
			var stringnum2 = num2.toString();
			$('#box2').html(stringnum2);
		}
	}
	
	
	$('#rock').click(function() {
		brain('rock');
		compare();
	})
	$('#scissors').click(function() {
		brain('scissors');
		compare();
	})
	$('#paper').click(function() {
		brain('paper');
		compare();
	})
})
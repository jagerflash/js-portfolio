//--------------HEAD
console.log('--- start script ---> '+getTime()+'\n');

init();

console.log('\n\+++ end of script +++');

function getTime(){
	var d = new Date();
	return d.getHours()+ ':'+d.getUTCMinutes()+':'+d.getUTCSeconds(); 
}

//--------------CODE
function init(){
	
	var Ball = function(r, s){
		this.color = r || 'red';
		this.size = s || 12;
	}
	Ball.prototype = {
		INC_SIZE:5,
		draw: function(){
			console.log('We are draw some shit with "'+ this.color +'" color and '+this.size+'" size');
		},
		inc: function(){
			this.size += this.INC_SIZE;
		}
	}
	
	//---------------decorator-----------------------------
	var StripedBall = function (ball){
		this._ball = ball;
	}
	StripedBall.prototype = {
		draw: function(){
			this._ball.draw();
			console.log("and this ball is fuckin' striped now, bitch");
		},
		inc: function(){
			this._ball.inc();
		}
	}
	var SpeckledBall = function (ball) {
		this._ball = ball;
	}
	SpeckledBall.prototype = {
		draw: function(){
			this._ball.draw();
			console.log("what the hell, this ball is fuckin' speckled now, motherfucker");
		},
		inc: function(){
			this._ball.inc();
		}
	}
	var new_ball = new Ball('a',1);
	var super_new_ball = new StripedBall(new_ball);
	var super_puper_ball = new SpeckledBall(super_new_ball);
	super_puper_ball.draw();
}
$(function model () {
	var output = $(".output");
	
	var Car = function () {}
	Car.prototype = {
		drive: function(){
			console.log("drive");
		}
	}
	
	//Наследование
	var Tesla = function(){}
//	Tesla.prototype = $.extend(new Car(), {
//		drive: function(){
//			console.log("tesla drive");
//		}
//	})
	
	Tesla.prototype = new Car();
	Tesla.prototype.eat_electro = function(){
		console.log("eat electro");
	}
//	//Полaморфизм
	Tesla.prototype.drive = function(){
		console.log("Tesla Drive");
	}
	//Инкапсуляция
	var Lorry = function(){
		var sfdf = 123;
		this.getSFDF = function(){
			return stdf;
		}
	}
	Lorry.prototype = new Tesla();
	Lorry.prototype.watchLevel = function(){
		var electro_level = 100;
		
		return 34234;
	}

	
	//----------------------------------------
	var ta4ka = new Car();
//	ta4ka.drive();
	
	var hcar = new Tesla();
//	hcar.drive();
	
	var electro_lorry = new Lorry();
//	console.log(electro_lorry.watchLevel());
	
	//модуль
	
	var colorEqv = function(){
		var brash = function(){
			var _default_color = 0;
			var _current_color = _default_color;
			function _selfclean(){
				
			}
			
			return {
				changeColor: function(color){
					_current_color = color || _current_color;
					console.log("color is set to " + _current_color);
				},
				paint: function(){
					console.log("weeee, i'm paint with "+_current_color);
				}
			}
		}();
		var colors_container = function(){
			var colors =  ['red','yellow'];
			var _defaultColor = colors[0];
			return{
				getColor: function(color_num){
					if(colors.indexOf(color_num) == -1) return _defaultColor;
					return colors[color_num];
				}
			}
		}();
		
		return {
			getbrash: function(){
				return brash;
			},
			colorContainer: colors_container,
			getColor: function(num){
				colors_container.getColor(num);
			}
		}
	}();
	var color = colorEqv.colorContainer.getColor(0);
	colorEqv.getbrash().changeColor(color);
	colorEqv.getbrash().paint();
	
	var event = new Event('build');

	var elem = function(){
		
	}
	// Listen for the event.
	elem.addEventListener('build', function (e) { 
		console.log(e);
	}, false);

	// Dispatch the event.
	elem.dispatchEvent(event);
});
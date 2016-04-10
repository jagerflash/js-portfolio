var Shapes = {
	Circle: function(param){
		console.log("new "+param.color+' circle');
	},
	Square: function(param){
		console.log("new "+param.color+' square');
	}
}

function ShapeFactory(color){
	this.color = color;
	var sadasd;
}
ShapeFactory.prototype = {
	makeCircle: function(){return new Shapes.Circle({color:this.color})},
	makeSquare: function(){return new Shapes.Square({color:this.color})}
}

var factory = new ShapeFactory('red');
factory.makeCircle();
factory.makeCircle();
factory.makeSquare();


//---------------------------------------
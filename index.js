function Point(x,y) {
	this.x = x;
	this.y = y;	
}

Point.prototype.toString = function () {
		return `${this.x},${this.y}`
	}

function Side(length) {
	this.length = length
}

function Shape() {
}

Shape.prototype.addToPlane = function(x,y) {
	this.position = new Point(x,y)
};

Shape.prototype.move = function(x,y) {
	this.position = new Point(x,y)
};

function Circle(radius) {
	Shape.call(this)
	this.radius = radius
}



Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle
Circle.prototype.diameter = function() {
	return (this.radius * 2)
};
Circle.prototype.area = function() {
	return (Math.PI * this.radius^2)
};

Circle.prototype.circumference = function() {
	return (2 * Math.PI * this.radius)
};

function Polygon(sides) {
	Shape.call(this)
	this.sides = sides
}

Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon
Polygon.prototype.perimeter = function() {

	for (var i = 0, x = 0; i < this.sides.length; i++) {
		x += this.sides[i].length
	}
	return x
};

Polygon.prototype.numberOfSides = function() {
	return this.sides.length
};

function Quadrilateral() {
	Polygon.call(this)
	this.sides = []
	for (var i = 0; i < arguments.length; i++) {
		this.sides.push(new Side(arguments[i]))
	}
}

Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral

function Rectangle(width,height) {
	Quadrilateral.call(this,height,width,height,width)
	this.width = width
	this.height = height
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle
Rectangle.prototype.area = function() {
	return (this.width * this.height)
};

function Square(length) {
	Rectangle.call(this,length,length)
	this.width = length
	this.height = length
}

Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square
Square.prototype.listProperties = function() {
	for (var prop in this) {
  		console.log("rect." + prop + " = " + this[prop]);
	}
};

function Triangle() {
	Polygon.call(this)
	this.sides = []
	for (var i = 0; i < arguments.length; i++) {
		this.sides.push(new Side(arguments[i]))
	}
}

Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Triangle

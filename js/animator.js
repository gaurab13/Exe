function Animator(element) {
	var imagewidth=900;
	this.el = element;
	var that = this;

	this.animate = function(cssProperty, value, duration) {

		var style = window.getComputedStyle(element);
		var initial = style.getPropertyValue(cssProperty);
		initial = parseInt(initial);

console.log("the value of initial is " +initial);
		var step = (value - initial) / (duration / 50);
		var counter = 0;
		var intervalId = setInterval(function() {
			counter++;
			//var current = step * counter;
			// element.innerHTML = current;
			var current= parseInt(style.getPropertyValue(cssProperty))+step;
			console.log("the current value is " + current);
			element.style[cssProperty] = current + 'px';
			
			if (counter >= duration/50)
				clearInterval(intervalId);
		}, 50);
	}

	

	this.animateBatch = function(properties, duration) {
		for (var x in properties) {
			console.log(x, properties[x]);
		}
	}

	// should stop the animation in current position
	this.stop = function() {

	}

	// should stop the animation and element's properties should be at "end" value
	this.finish = function(cssProperty,value) {
		clearInterval(intervalId);
	cssValue= imagewidth* (value-2)*-1;
		console.log("the value in finish is " + cssValue);
		element.style[cssProperty]=cssValue+ 'px';
			
	}

	

	this.hitTest = function(singleElement) {

	}

	this.hitTestBatch = function(elements) {

	}
}
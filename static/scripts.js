const mySiema = new Siema({
	loop: true,
	easing: 'cubic-bezier(0.945, 0.345, 0.655, 1)'
});

setInterval(() => mySiema.next(), 5000);

new fullpage('#fullpage', {
    scrollBar: true,
    onLeave: function(origin, destination, direction){
		var leavingSection = this;

		// if(origin.index == 0 && direction =='down'){
		// 	console.log("Going to section 2!");
		// }

		// else if(origin.index == 2 && direction == 'up'){
		// 	console.log("Going to section 2!");
		// }
	}
});
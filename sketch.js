
function setup() {
	createCanvas(400, 400);
	background(40);
	loadJSON('/all', gotData);
	console.log('running');
}

function gotData(data){
	console.log(data);
	var keys = Object.keys(data);
	for (var i = 0; i < keys.length; i++) {
		var word = keys[i];
		var score = data[word];
		var x = random(width);
		var y = random(height);
		fill(255);
		textSize(54);
		text(word, x, y);
	}
	console.log(keys);
}


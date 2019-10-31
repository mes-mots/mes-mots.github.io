var dragging = false; // Is the object being dragged?
var rollover = false; // Is the mouse over the ellipse?

var x, y, w, h; // Location and size
var offsetX, offsetY; // Mouseclick offset


function setup() {
    createCanvas(windowWidth, windowHeight);

    // Starting location
    x = 0;
    y = 0;
    // Dimensions
    w = 100;
    h = 25;
	    drawData();


    console.log('running');

    var button = select('#submit');
    button.mousePressed(submitWord);
}

function draw() {

}

function drawData() {
    loadJSON('/all', gotData);
}

function submitWord() {
    var word = select('#word').value();
    var score = select('#score').value();

    console.log(word, score);

    loadJSON('add/' + word + '/' + score, finished);

    function finished(data) {
        console.log(data);
        drawData();
    }
}

function gotData(data) {
    background(204, 247, 213);
    console.log(data);
    var keys = Object.keys(data);

    // Is mouse over object
    if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
        rollover = true;
    } else {
        rollover = false;
    }

    // Adjust location if being dragged
    if (dragging) {
        x = mouseX + offsetX;
        y = mouseY + offsetY;
    }

    for (var i = 0; i < keys.length; i++) {
        var word = keys[i];
        var score = data[word];
        x = random(width);
        y = random(height);

        textFont("Source Code Pro");
        textSize(16);
        textAlign(CENTER);

        // Different fill based on state
        if (dragging) {
            fill(50);
        } else if (rollover) {
            fill(100);
        } else {
            fill(255, 255, 255, 90);
        }

        rect(x, y, w, h);
        fill(233, 104, 97);
        text(word, x + 50, y + 19);

    }
    console.log(keys);
}

function mousePressed() {
    // Did I click on the rectangle?
    if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
        dragging = true;
        // If so, keep track of relative location of click to corner of rectangle
        offsetX = x - mouseX;
        offsetY = y - mouseY;
    }
}

function mouseReleased() {
    // Quit dragging
    dragging = false;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
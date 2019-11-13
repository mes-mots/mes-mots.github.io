var looping = false;

function setup() {




    createCanvas(windowWidth, windowHeight-100, SVG);
    background(204, 247, 213);
    var submitButton = select('#submit');
    submitButton.mousePressed(submitWord);
    var textInput = window.document.getElementById("word");
    textInput.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            submitWord();
            redraw();
        }
    });
    var saveButton = select('#save-sketch');
    saveButton.mousePressed(saveSketch);
    textFont("Source Code Pro");
    textSize(30);
    // Creating many words to test
    // for (let i = 0; i < 100; i++) {
    //     let text = "asdfasdfasdf";
    //     var l = text.length;
    //     var px = 20;
    //     let w = (px * 2) + l * 18;
    //     var word = new Word(text, random(width - w), random(height * 0.95), random([0, 1, 2, 3, 4]));
    // }
    
    // These vars are for starting a default phrase.-

    // var dormir = new Word("Dormir", 300, 100, 0);
    // var sur = new Word("sur", 300 + 160, 100, 4);
    // var la = new Word("la", 300 + 160 + 105, 100, 4);
    // var colere = new Word("Colère", 300, 100 + 50, 3);
    // var de = new Word("de", 300 + 160, 100 + 50, 4);
    // var ma = new Word("ma", 300 + 160 + 87, 100 + 50, 4);
    // var voisine = new Word("Voisine", 300, 100 + 50 + 50, 2);
    noStroke();
}

function draw() {
    clear();
    background(204, 247, 213);
    for (var i = 0; i < words.length; i++) {
        var w = words[i];
        if (w.detecting) {
            w.x = mouseX - w.offsetX;
            w.y = mouseY - w.offsetY;
        }
        var x = words[i].x;
        var y = words[i].y;
        var l = words[i].text.length;
        fill(w.color.r, w.color.g, w.color.b);
        var px = 20;
        rect(x, y, (px * 2) + l * 18, 40);
        fill(w.textColor.r, w.textColor.g, w.textColor.b);
        text(words[i].text, x + px, y + 30);
    }

}

function mousePressed() {
    looping = true;
    loop();
    for (var i = 0; i < words.length; i++) {
        var w = words[i];
        w.detectMouse(mouseX, mouseY);
    }
}

function mouseReleased() {
    looping = false;
    noLoop();
    for (var i = 0; i < words.length; i++) {
        var w = words[i];
        w.detecting = false;
    }
}

function submitWord() {
    var text = select('#word').value();
    var l = text.length;
    var px = 20;
    let w = (px * 2) + l * 18;
    var word = new Word(text, random(width - w), random(height * 0.95), random([0, 1, 2, 3, 4]));
}

function saveSketch() {
    save();
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
var words = [];

var Word = function(text, x, y, colorIndex) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.color = hexToRgb(colorList[colorIndex]);
    this.dragged = false;
    this.detecting = false;
    this.offsetX = 0;
    this.offsetY = 0;
    switch (colorIndex) {
        case 0:
            this.textColor = hexToRgb(colorList[1]);
            break;
        case 1:
            this.textColor = hexToRgb(colorList[0]);
            break;
        case 2:
            this.textColor = hexToRgb(colorList[4]);
            break;
        case 3:
            this.textColor = hexToRgb(colorList[4]);
            break;
        case 4:
            this.textColor = hexToRgb(colorList[2]);
            break;
        default:
            this.textColor = hexToRgb(colorList[0]);
    }
    words.push(this);
};

Word.prototype.detectMouse = function(mX, mY) {
    var l = this.text.length;
    var w = (20 * 2) + l * 18;
    if (mX > this.x && mX < this.x + w && mY > this.y && mY < this.y + 40) {
        this.detecting = true;
        this.offsetX = mouseX - this.x;
        this.offsetY = mouseY - this.y;
    }
    // } else {
    // this.detecting = false;
    // }
};

var colorList = [
    "#4094C1",
    "#FAD26E",
    "#E96861",
    "#38A56F",
    "#E3DFE8"
];

var lightGreen = "#D1F7D5";
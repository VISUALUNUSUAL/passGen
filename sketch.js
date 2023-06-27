var webImg, pass, mask;
var url;

function setup() {
    createCanvas(1024, 1024);
    loadFace();
    imageMode(CENTER);
}

function draw() {
    background(100);
    image(pass, width / 2, height / 2);
    image(webImg, width / 2 - 112, height / 2 + 95, 134, 134);
}

function loadFace() {
    url = "https://thispersondoesnotexist.com/";
    webImg = loadImage(url, "jpg");
    pass = loadImage("img/passBG.jpg");
    mask = loadImage("img/msk.png");
    webImg.mask(mask);
    webImg.filter(GRAY);
}

function mousePressed() {
  loadFace();
}
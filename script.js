const experienceImages = [
    "assets/spot-award.jpeg",
    "assets/internship-cert.jpeg"
];

let expIndex = 0;

function nextImage() {
    expIndex = (expIndex + 1) % experienceImages.length;
    document.getElementById("sliderImage").src = experienceImages[expIndex];
}

function prevImage() {
    expIndex = (expIndex - 1 + experienceImages.length) % experienceImages.length;
    document.getElementById("sliderImage").src = experienceImages[expIndex];
}

const certImages = [
    "assets/hipaa-cert.jpeg",
    "assets/itil-cert.jpeg",
    "assets/programming-cert.jpeg",
    "assets/python-cert.jpeg",
    "assets/webdesign-cert.jpeg"
];

let certIndex = 0;

function nextCert() {
    certIndex = (certIndex + 1) % certImages.length;
    document.getElementById("certImage").src = certImages[certIndex];
}

function prevCert() {
    certIndex = (certIndex - 1 + certImages.length) % certImages.length;
    document.getElementById("certImage").src = certImages[certIndex];
}


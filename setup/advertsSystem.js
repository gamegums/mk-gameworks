var advertImages = ["dumbAdd.png", "fireBot_website.png", "partnershipPromotion.png"];

const add1 = Math.floor(Math.random() * advertImages.length);
const add2 = Math.floor(Math.random() * advertImages.length);

document.getElementById("add1").src = `advertisment/${arr[randomIndex]}`;
document.getElementById("add2").src = `advertisment/${arr[randomIndex]}`;
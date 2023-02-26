// Cookie functions
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

var hasAds = false;

var add1Img = document.getElementById("add1");
var add2Img = document.getElementById("add2");

var addHolder1 = document.getElementById("addHolder1");
var addHolder2 = document.getElementById("addHolder2");

if (add1Img !== null) {
    var advertImages = ["dumbAdd.png", "fireBot_website.png", "partnershipPromotion.png"];

    var linkImage = ["https://web.roblox.com/premium/membership", "https://cutt.ly/fire-bot", "#"];

    const add1 = Math.floor(Math.random() * advertImages.length);
    const add2 = Math.floor(Math.random() * advertImages.length);

    console.log(linkImage[advertImages[add1]]);

    addHolder1.href = linkImage[advertImages[add1]];
    addHolder2.href = linkImage[advertImages[add2]];
    
    add1Img.src = `advertisment/${advertImages[add1]}`;
    add2Img.src = `advertisment/${advertImages[add2]}`;

    hasAds = true;
}

// Device lookup
if (navigator.userAgent.includes('iP')) {
    var device = "Apple phone/tablet"
} else if (navigator.userAgent.includes('Android') || navigator.userAgent.includes('IEMobile') || navigator.userAgent.includes('Opera Mini')) {
    var device = "Android/Other small devices"
} else if (navigator.userAgent.includes('Windows') || navigator.userAgent.includes('Chrome') || navigator.userAgent.includes('Apple')) {
    var device = "Computer (Desktop)"
};

if (getCookie(`admin`) != `true`) {
    if (hasAds == true) {
        fetch(`https://support-bot.autocode.dev/premium@dev/Guilds/MKGameworks/website/websiteReport?device=${device}&location=${window.location.href}&add1=${advertImages[add1]}&add2=${advertImages[add2]}`)
        .then((response) => response.json())
        .then((data) => console.log(data));
    } 
}
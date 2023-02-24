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

// Device lookup
if (navigator.userAgent.includes('iP')) {
    var device = "Apple phone/tablet"
} else if (navigator.userAgent.includes('Android') || navigator.userAgent.includes('IEMobile') || navigator.userAgent.includes('Opera Mini')) {
    var device = "Android/Other small devices"
} else if (navigator.userAgent.includes('Windows') || navigator.userAgent.includes('Chrome') || navigator.userAgent.includes('Apple')) {
    var device = "Computer (Desktop)"
};

if (getCookie(`admin`) != true) {
    /*fetch(
        'https://discord.com/api/webhooks/1078783014789709945/umnZVoE-dphFD6Oj7rJ_Mxss_rZU5FNAp9Jw51OcgfBF6xhgfs809i7O6ecT1xj6hPK-',
        {
            method: 'post',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            // the username to be displayed
            username: 'Site visits',
            // the avatar to be displayed
            avatar_url:
                'https://support-bot.autocode.dev/website@main/media/favicion.png',
            // contents of the message to be sent
            content:
                `Someone just visited our website <@&958105388048326786>!\nDevice: ${device}\n\n${window.location.href}`,
            // enable mentioning of individual users or roles, but not @everyone/@here
            allowed_mentions: {
                parse: ['users', 'roles'],
            },
            }),
        }
    );
    */
    fetch('https://support-bot.autocode.dev/premium@dev/Guilds/MKGameworks/websiteReport/', device, window.location.href)
    .then((response) => response.json())
    .then((data) => console.log(data));

    /*
    fetch('https://support-bot.autocode.dev/premium@dev/Guilds/MKGameworks/websiteReport/',
        {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                device: `${device}`,
                location: `${window.location.href}`
            }),
        }
    );*/
}
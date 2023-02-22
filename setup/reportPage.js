if (navigator.userAgent.includes('iP')) {
    var device = "Apple phone/tablet"
} else if (navigator.userAgent.includes('Android') || navigator.userAgent.includes('IEMobile') || navigator.userAgent.includes('Opera Mini')) {
    var device = "Android/Other small devices"
} else if (navigator.userAgent.includes('Windows') || navigator.userAgent.includes('Chrome') || navigator.userAgent.includes('Apple')) {
    var device = "Computer (Desktop)"
};

fetch(
'https://discord.com/api/webhooks/958287758852522034/UHkbjhXJFlpFpmgnUsdiUcQ7sK80eG3MRGhvnKt4Pgqr_BnT0I_NfghB1DUCdDpr6kjw',
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
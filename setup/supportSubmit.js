function submitSupp() {
    var message = document.getElementById(`messageBox`).value;
    var contactAdress = document.getElementById(`emailBox`).value;

    console.log(message)

    if (message.length >= 10) {
        if (message.length <= 1000) {
            if (contactAdress.includes(`@`) || contactAdress.includes(`#`)) {
                fetch(
                    'https://discord.com/api/webhooks/958287758852522034/UHkbjhXJFlpFpmgnUsdiUcQ7sK80eG3MRGhvnKt4Pgqr_BnT0I_NfghB1DUCdDpr6kjw',
                    {
                        method: 'post',
                        headers: {
                        'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            // the username to be displayed
                            username: 'Support',
                            // the avatar to be displayed
                            avatar_url:
                                'https://support-bot.autocode.dev/website@main/media/favicion.png',
                            // contents of the message to be sent
                            content:
                                `Someone just asked for help via our website <@&951812000797831188>!\n\nE-mail / Discord: **${contactAdress}** \n\nMessage: **${message}**`,
                            // enable mentioning of individual users or roles, but not @everyone/@here
                            allowed_mentions: {
                                parse: ['users', 'roles'],
                            },
                        }),
                    }
                );

                document.getElementById(`submitButt`).style.display = `none`;
                document.getElementById(`contactText`).innerHTML = `Sent successfully!`;
            } else {
                document.getElementById(`submitButt`).style.display = `none`;
                document.getElementById(`contactText`).innerHTML = `E-mail adress must contain <b>@something.com</b>, and Discord tag <b>Me#12345</b>.`;
            }
        } else {
            document.getElementById(`submitButt`).style.display = `none`;
            document.getElementById(`contactText`).innerText = `Text must be shorter then 1000 characters.`;
        }
    } else {
        document.getElementById(`submitButt`).style.display = `none`;
        document.getElementById(`contactText`).innerText = `Text must be longer then 10 characters.`;
    }
}
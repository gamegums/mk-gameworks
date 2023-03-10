function submitSupp() {
    var message = document.getElementById(`messageBox`).value;
    var contactAdress = document.getElementById(`emailBox`).value;

    function sendAPI() {
        fetch(`https://support-bot.autocode.dev/premium@dev/Guilds/MKGameworks/website/supportTicket?contactDetails=${contactAdress}&message=${message}`)
        .then((response) => response.json())
        .then((data) => console.log(data));

        document.getElementById(`submitButt`).style.display = `none`;
        document.getElementById(`contactText`).innerHTML = `Sent successfully!`;
    }

    if (message.length >= 10) {
        if (message.length <= 1000) {
            if (contactAdress.includes(`@`)) {
                sendAPI();
            } else if (contactAdress.includes(`#`)) {
                while (contactAdress.includes(`#`)) {
                    contactAdress = contactAdress.replace(`#`, `%23`);
                }
                
                sendAPI();
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
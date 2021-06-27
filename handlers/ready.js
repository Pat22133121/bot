const {client} = require('../index');
const fetch = require('node-fetch');
const config = require("../config.json");



client.once('ready', async () => {
    setInterval(async () => {
        if ((Math.floor(Math.random() * 2) + 1) === 1) {
            try {
                let jsonFromURL = await fetch(config.ipServerWithPort, {method: "GET"}).then(json => json.json());
                let jsonObjectKeys = Object.keys(jsonFromURL).length;
                await client.user.setActivity(jsonObjectKeys + config.statusReadyDescribe, {
                    link: '',
                    type: 'WATCHING',
                });
            }catch (error){
                await client.user.setActivity(config.statusExceptDescribe, {
                    link: '',
                    type: 'WATCHING',
                });
            }
        }else{
            await client.user.setActivity(`Bot By Pat | ${config.prefix}pomoc`, {
                link: '',
                type: 'WATCHING',
            });
        }
    }, 3 * 1000);

});

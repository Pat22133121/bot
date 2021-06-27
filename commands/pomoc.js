const config = require("../config.json");
const Discord = require("discord.js");

const successEmbed = new Discord.MessageEmbed()
    .setDescription(config.prefix + "pomoc - komenda do wyświetlenia wszystkich komend\n"  + "                                  \n")
    .setColor(0x00FF00)
    .setAuthor('Dostępne komendy:', '','')
    .setFooter("! Pat | Patolandia")
    .setThumbnail("https://cdn.discordapp.com/emojis/854732066377826344.gif?v=1");
module.exports = {
    name: 'pomoc',
    description: 'Simple pomoc command', //Optional
    execute(message, client) {
        if(message.channel.type = "dm"){
            message.reply(successEmbed);
        }
    }
}
const {client} = require('../index');
const Discord = require("discord.js");
const config = require("../config.json");
const successEmbed = new Discord.MessageEmbed()
    .setDescription("Gratulacje, otrzymales role Gracz!")
    .setColor(0x00FF00)
    .setAuthor('Przyznano range Gracz', '','')
    .setFooter(config.serverName + " ! Pat | Patolandia")
    .setThumbnail("https://cdn.discordapp.com/emojis/854732066377826344.gif?v=1");
client.on('messageReactionAdd', async (reaction, user) => {

    if (reaction.message.id === config.reactionMessageID) {
        await reaction.message.guild.member(user).roles.add(config.obywatelID);
        user.send(successEmbed);

    }
});

client.on('messageReactionRemove', async (reaction, user) => {
    if (reaction.message.id === config.reactionMessageID) {
        await reaction.message.guild.member(user).roles.remove(config.obywatelID);
    }
});
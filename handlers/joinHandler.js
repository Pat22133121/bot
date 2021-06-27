const {client} = require('../index');
const Discord = require("discord.js");
const config = require("../config.json");


client.on('guildMemberAdd', member => {
    const joinToChannelMessage = new Discord.MessageEmbed()
        .setDescription(
            `Witamy na serwerze **${config.serverName}**. Jesteś naszym **${client.guilds.cache.get(member.guild.id).memberCount}** użytkownikiem. Cieszymy się, że z nami jesteś! ` +
            ``)
        .setColor(0x0000FF)
        .setThumbnail(member.user.displayAvatarURL())
        .setAuthor(member.user.tag, config.iconServerURL,'')
        .setFooter(config.serverName);
    client.channels.cache.get(config.joinMessageChannelID).send(joinToChannelMessage);
})
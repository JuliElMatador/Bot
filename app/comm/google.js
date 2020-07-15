const Discord = require("discord.js");
const bot = new Discord.Client();
exports.run = (client, message, args) => {
   let autogoogle = args.join('+'); 
    if (autogoogle.length < 1) return message.reply('**Ingresa una cosa que quieras buscar en google**').catch(console.error);
    const embed = new Discord.RichEmbed()
        .setColor(0x738BD7)
        .setDescription(`🍸**╎INFO DE LA BUSQUEDA:**\n\nhttps://www.google.com/search?q=` + (args.join('+')))
        .setThumbnail("https://hipertextual.com/files/2015/09/googles-new-logo-.gif?width=1200&enable=upscale")//https://cdn.discordapp.com/attachments/686234066701385762/701192688237543474/giphy.gif
    message.channel.send({embed})
}
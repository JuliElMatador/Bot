
exports.run = (client, message, args) => {
  const Discord = require('discord.js')
 

        if (message.author.id !== '722298786520498208')
        return message.channel.send("**お・⇢ No tienes permisos de usar este comando, solo DEV del BOT pueden ⇠・お**")
if(!args) return message.channel.send('debe escribir un mensaje paraa enviar.');
  
  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setTitle(`**__AKUMA__╎__ANUNCIOS__**`)
    .setThumbnail(client.user.avatarURL)
    .setFooter("AKUMA╎ANUNCIOS", client.user.avatarURL)
   .setDescription(args.join(" "));
    message.channel.send(embed);
  message.channel.send(' @everyone / @here ');

  message.delete()
   
}
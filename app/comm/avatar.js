const Discord = require("discord.js")
exports.run = (client, message, args) => {
  
let user = message.mentions.users.first() 
  || client.users.get(args[0])
  || client.users.find(x => (args)?(x.tag === args.join(" ")):undefined)
  || message.author
      
const embed = new Discord.RichEmbed()
.setTitle("Avatar de " + user.username)
.setDescription(`[**Descargar Avatar**](${user.avatarURL})`)
  .setImage(user.displayAvatarURL)
.setColor(message.guild.member(user).displayHexColor)
.setColor("RANDOM")
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp()  
message.channel.send({embed: embed});
  
}
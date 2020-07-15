const Discord = require("discord.js");
const db = require ('megadb')
let logs_db = new db.crearDB("Logs")
exports.run = async (client, message, args) => {
let logs;
if(logs_db.tiene(`${message.guild.id}`)) {
  logs = await logs_db.obtener(`${message.guild.id}`)
}else{
  logs = "logs"
}
  
    var embed = new Discord.RichEmbed()
     embed.setImage("https://i.pinimg.com/originals/da/22/d5/da22d56e4174652d7b8fd73d2ebe376e.gif")
     embed.setAuthor("AKUMA╎REGISTROS", client.user.avatarURL)
     embed.setDescription(" **:cocktail:╎NO TIENES LOS PERMISOS REQUERIDOS**")
  
    var embed1 = new Discord.RichEmbed()
     embed1.setImage("")
     embed1.setAuthor("AKUMA╎REGISTROS", client.user.avatarURL)
     embed1.setDescription(" **:fish_cake:╎TIENES QUE ESPECIFICAR UN CANAL**")
  
    var embed2 = new Discord.RichEmbed()
     embed2.setImage("")
     embed2.setAuthor("AKUMA╎REGISTROS", client.user.avatarURL)
     embed2.setDescription(" **:sushi:╎CANAL DE LOG'S COLOCADO**")

    let canal = message.mentions.channels.first();
      let perms = message.member.hasPermission("ADMINISTRATOR")


    if (!perms) return message.channel.send(embed)
    if (!canal) return message.channel.send(embed1)

    logs_db.establecer(message.guild.id, canal.id).then(O_o => {
      message.channel.send(embed2)
    })
}
const Discord = require ("discord.js")
module.exports.run = async (client, message, args) => {

var ids = ["475170088744517636"]//ahi pones tu id dentro de las comillas para que nadien pueda utilizar ese comando, solo usted.
let avatarurl = args.join(" ")
if(!ids.some(ids => message.author.id == ids)) return; 
if(!avatarurl) return message.reply('お・⇢ Tienes que setear un avatar ⇠・お')//aqui te dice por si no pusiste una imagen url

client.user.setAvatar(avatarurl)//ahi estaria cambiando el avatar
  
  message.channel.send('お・⇢ Avatar setiado ⇠・お \n\n お・⇢ Avatar nuevo ⇠・お   :\n' + avatarurl).then(m => m.delete(5000))//ahi dice que exitosamente se agrego el nuevo avatar

//Si tengo mas apoyo subire un comando que de nitro(unchecked)

}
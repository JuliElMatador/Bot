
const Discord = require("discord.js");
const db = require ("megadb");
let levels_db = new db.crearDB("niveles"); 



exports.run = async (client, message, args) => {   
   const { getRank } = require("/app/levels.js")
    //let map = curlvl.map(false, (curlvl,u) => `TOP `+ [1] +`: ${curlvl} `)
let usuarios = getRank(await levels_db.obtener(message.guild.id), message)
usuarios.map((usuario, index) => usuarios[index] = `${index+1}.${usuario[0]} \n Nivel: ${usuario[1]} (${usuario[2]}/${5 * (usuario[1] ** 2) + 50 * usuario[1] + 100})\n`)

let paginas = []
let cantidad = 5

while(usuarios.length > 0) {
 paginas.push(usuarios.splice(0, cantidad)) 
}
  

  let em = new Discord.RichEmbed()
  em.setColor("RANDOM")
  em.setThumbnail(message.guild.iconURL)
  if(!args[0]){
    em.setDescription(`🥢╎Top's nivel de ${message.guild.name} (Pagina 1/${paginas.length})\n\n${paginas[0].join("\n")}`)
    return message.channel.send(em)
  }
  if(isNaN(args[0])){
    return message.channel.send("**Ingrese el numero de la pagina.**")
  }
  let seleccion = parseInt(args[0])
  
  if(seleccion <= 0 || seleccion > paginas.lenght) return message.channel.send("**La pagina seeccionada no existe.**")
 em.setDescription(`🥢╎Top's nivel de ${message.guild.name} (pagina ${seleccion}/${paginas.length})\n\n${paginas[seleccion-1].join("\n")}`)
    return message.channel.send(em)
}
  
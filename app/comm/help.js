const Discord = require("discord.js");
exports.run = (client, message, args) => {
const Discord = require("frame-djs");
  
const emoji = client.emojis.find(x => x.name ===  "Mantenimiento", );       
const emoji1 = client.emojis.find(x => x.name ===  "Henxxx", );   
const emoji2 = client.emojis.find(x => x.name ===  "loli", ); 
const emoji3 = client.emojis.find(x => x.name ===  "Espera", );         
const emoji4 = client.emojis.find(x => x.name ===  "party_nod", );  
const emoji5 = client.emojis.find(x => x.name === "dinero", ); 
const emoji6 = client.emojis.find(x => x.name === "DiscordLoading", );   
const emoji7 = client.emojis.find(x => x.name === "campanita", );       
const emoji8 =  client.emojis.find(x => x.name === "inv", );  
const emoji9 =  client.emojis.find(x => x.name === "Verificado", );       
const emoji10 = client.emojis.find(x => x.name === "nyaa", );    
const emoji11 = client.emojis.find(x => x.name === "love", );         
const emoji12 = client.emojis.find(x => x.name === "Baile"); 
const emoji13 = client.emojis.find(x => x.name ===  "musica", );
  
const embed = new Discord.RichEmbed() 
    .setColor("RANDOM")
    .setDescription(`**AKUMA╎MENU DE AYUDA**`)
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp()
    .addField("**・━━━ ꒰>━━━ Diversion ━━━<꒱ ━━━・**",
`**Reacciona ⇨ 🍥**`, )
    .addField("**・━━━ ꒰>━━━ Nsfw ━━━<꒱ ━━━・**",
`**Reacciona ⇨ 🍸**`, )
    .addField("**・━━━ ꒰>━━━ Staff ━━━<꒱ ━━━・**",
`**Reacciona ⇨ ⛩️**`,)
  
  .setImage("https://data.whicdn.com/images/153716621/original.gif")

const embed1 = new Discord.RichEmbed() 
    .setColor("RANDOM")
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp()
    .addField("**・━━━ ꒰>━━━ Diversion ━━━<꒱ ━━━・**",
"**``avatar・google・anime・drake・pixel・grey・invert・hackweek・blur・rip・kawaii・aburrido・instagram・kiss・pat・run``**", true)
  
  .setImage("https://pa1.narvii.com/6352/ea9a2492247ebd17f10f46c735fd981b90eee9b3_hq.gif")

const embed2 = new Discord.RichEmbed() 
    .setColor("RANDOM")
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp()
    .addField("**・━━━ ꒰>━━━ Nsfw ━━━<꒱ ━━━・**",
"**``hentai ( Pronto )・futanari ( Pronto )・yuri ( Pronto )・yaoi ( Pronto )``**", true)
  
  .setImage("https://pedanticperspective.files.wordpress.com/2015/07/tail-grab.gif")

const embed3 = new Discord.RichEmbed() 
    .setColor("RANDOM")
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp()
    .addField("**・━━━ ꒰>━━━ Staff ━━━<꒱ ━━━・**",
"**``Staff ( Pronto )・Admins ( Pronto )・Owners ( Pronto )``**", true)
  
  .setImage("https://i.pinimg.com/originals/a4/2b/7c/a42b7cd03a7b7e19d2332322a2572a98.gif")

let seleccion_p = new Discord.PageEmbed(message)
seleccion_p.paginas({
  "🍙": embed,
  "🍥": embed1,
  "🍸": embed2,
  "⛩️": embed3,
  })
seleccion_p.tiempo(60000)
seleccion_p.eliminar(true)
return seleccion_p.enviar()
}

   

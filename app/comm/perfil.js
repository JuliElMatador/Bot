const Discord = require('discord.js')
const dg = require('discord-gestor')
const Canvas = require("canvas")
let database = require("/app/db.json"); 
const db = require("megadb");
const dinero = new db.crearDB("dinero");

exports.run =  async (client, message, args, Attachment) => {
  
   let user = message.mentions.users.first() || message.author

let curxp = database[user.id].xp;
let curlvl = database[user.id].level;
let cantidad = await dinero.obtener(`${user.id}`);
    
   let canvas = Canvas.createCanvas(680, 300)
let ctx = canvas.getContext('2d')
//Edición de Imagene 

  
const img = await Canvas.loadImage("https://cdn.discordapp.com/attachments/622938705635835934/718156865971945492/anime-chica-con-armas-en-traje-de-bano-3724.jpg")//Imagen Fondo, ok
ctx.drawImage(img, 0, 0, 680, 300)
ctx.font = '32px Arial';
ctx.fillStyle = '#00ebff';
ctx.font = '40px "Comic Sans"';
ctx.fillText(`${user.username}`, 225, 105)
ctx.fillStyle = '0x000000';
ctx.font = '20px "Comic Sans"';
ctx.fillText("#"+user.discriminator, 225, 135)
ctx.fillStyle = '#00ff06';
ctx.font = '25px"Comic Sans"';
ctx.fillText("Nivel", 60, 216)
ctx.fillText("Experiencia", 260, 216)
ctx.fillText("Dinero", 530, 216)
ctx.fillStyle = '0x000000';
ctx.font = '19px '
ctx.fillText(curlvl, 78, 250) 
ctx.fillText(curxp, 308, 250)
ctx.fillText(cantidad, 550, 250)

      ctx.beginPath();
      ctx.arc(100, 100, 75, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.clip();
       let avatar = await Canvas.loadImage(user.displayAvatarURL)
       ctx.drawImage(avatar, 25, 25, 150, 150);
     let attach = new Discord.Attachment(canvas.toBuffer(), "rankcard.png")
      
   //return 
  message.channel.send(attach)

}

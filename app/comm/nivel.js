const Discord = require("discord.js")
const Canvas = require("canvas")
const { createCanvas, loadImage } = require('canvas')
const db = require("megadb");
let levels_db = new db.crearDB("niveles");
exports.run = async (client, message, args, member,) => {

let usuario = message.mentions.users.first() || message.author


 if (!levels_db.tiene(message.guild.id))
    levels_db.establecer(message.guild.id, {});
  if (!levels_db.tiene(`${message.guild.id}.${usuario.id}`))
    levels_db.establecer(`${message.guild.id}.${usuario.id}`, {
      xp: 0,
      nivel: 1
    });
  let { xp, nivel } = await levels_db.obtener(
    `${message.guild.id}.${usuario.id}`
  );
  let randomxp = Math.floor(Math.random() * 4) + 2;
  let levelup = 5 * nivel ** 2 + 50 * nivel + 100; 

//como ejemplo, agregé 2 fuentes custom
const canvas = Canvas.createCanvas(370,110)
const ctx = canvas.getContext('2d')

//Fondo 
const background = await loadImage('https://i.pinimg.com/originals/a7/af/2c/a7af2c849f33b2b7aa1d381da948fa9b.jpg');
ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
	// Selecciona el color del trazo
	ctx.strokeStyle = '#fa00e8';
	// Dibuja un rectángulo con las dimensiones de todo el canvas 
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

//Rectangulo de la izquierda 
ctx.globalAlpha = 0.9
ctx.fillStyle = "#fff"
ctx.fillRect(82,9,280,91)
ctx.globalAlpha = 1

//Borde del avatar
ctx.fillStyle = "#756e6d"
ctx.lineWidth = 0.5
ctx.strokeRect(42,16,78,78)

//Avatar
const foto = usuario.displayAvatarURL
const avatar = await loadImage(foto)
ctx.drawImage(avatar, 44, 18, 74, 74);
ctx.restore()
  
//Borde de la barra de exp
ctx.fillStyle = "#756e6d"
ctx.lineWidth = 0.2
ctx.strokeRect(143,32,212,15)

ctx.lineWidth = 1

//Fondo de la barra de exp
ctx.fillStyle = "#fff"
ctx.fillRect(145,34,208,11)

//Barra de exp
ctx.fillStyle = "#9cff00"
let x = xp
ctx.fillRect(145,34,Math.round((x*208/levelup)),11)

//EXP encima de la barra de EXP
ctx.font = "10px Texta"
ctx.fillStyle = "#999999"
ctx.textAlign='center'
ctx.fillText(`XP: ${xp} / ${levelup}`, 250, 43)

//Linea divisora
ctx.fillStyle = "#000"
ctx.lineWidth = 0.5
ctx.moveTo(218,52)
ctx.lineTo(218,96)
ctx.stroke()

ctx.lineWidth = 1

//Tag del usuario
ctx.font = "13px Aspira"
ctx.fillStyle = "#0d0d16"
ctx.textAlign='left'
ctx.fillText(usuario.tag, 143, 25);

/*
"Server Rank"
ctx.font = "13px Texta"
ctx.fillStyle = "#606060"
ctx.textAlign='left'
ctx.fillText("Server Rank:", 227, 69)//nice

//El rango
ctx.font = "13px Texta"
ctx.fillStyle = "#606060"
ctx.textAlign='right'
ctx.fillText("# 1", 354, 69)//nice
 */
  
//"Server Exp"
ctx.font = "13px Texta"
ctx.fillStyle = "#606060"
ctx.textAlign='left'
ctx.fillText("SERVIDOR XP:", 227, 69)

//El Exp
ctx.font = "13px Texta"
ctx.fillStyle = "#606060"
ctx.textAlign='right'
ctx.fillText(xp, 354, 69)

//"Level"
ctx.font = "17px Texta"
ctx.fillStyle = "#999999"
ctx.textAlign='left'
ctx.fillText("NIVEL", 155, 66)

//El nivel actual
ctx.font = "bold 35px Texta" 
ctx.fillStyle = "#ff7d00"
ctx.textAlign='center'
ctx.fillText(nivel, 179, 94)  

//en discord.js 11 se llama Attachment
let attachment = new Discord.Attachment(canvas.toBuffer(),"profile.png")
message.channel.send(attachment)
}
 const Discord = require('discord.js')
exports.run = async (client, message, args, color) => {

var Weez = require("weez");

var weez = new Weez.WeezAPI("S8pePoRiHb9LnS5ZkFDsOHtc7vV0zGrMjC0e"); 
      
if(!args[0]) return message.reply("お・⇢ Tienes que poner un mensaje para poder enviarlo ⇠・お");

              
let img = await weez.trump(args.join(" "));
   message.delete()
  
  message.channel.send(new Discord.RichEmbed()
                     .attachFiles([{
                     attachment: img,
                     name: "img.jpg"
                      }])
                    .setColor("RED")
                    .setImage("attachment://img.jpg")
                    .setFooter(message.author.tag))
  
    }  


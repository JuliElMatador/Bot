//funcional
const Discord = require("discord.js");
const malScraper = require("mal-scraper");
let translate2 = require("google-translate-api");

exports.run = (client, message, args) => {
  const emoji = client.emojis.find(x => x.name ===  "reiniciando", ); 
  const search = args[0];

  const embed = new Discord.RichEmbed()
    .setDescription(
      "🍙**╎INGRESA UN NOMBRE DE UN ANIME, PARA BUSCARLO**"
    )
    .setColor("RANDOM")
    .setImage("")
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp(message.createdAt);

  if (!search) return message.channel.send({ embed });

  const dembed = new Discord.RichEmbed()
    .setAuthor("AKUMA╎ANIMES", client.user.avatarURL)
    .setTitle(
      "🌲╎BUSCANDO INFO DEL ANIME: \n \n · " + args.join(" ")
    )
    .setDescription(
      " 🌺╎ESPERA UNOS SEGUNDOS"
    )
    .setImage("")
    .setColor("RANDOM");

  message.channel.send(dembed).then(m => {
    malScraper
      .getInfoFromName(search)
      .then(data => {
        const malEmbed = new Discord.RichEmbed()

          .setAuthor("AKUMA╎ANIMES", client.user.avatarURL)
          .setDescription("🍘╎INFO DEL ANIME")
          .addField(
            "**🍹╎NOMBRE:**",
            "· " + args.join(" "),
            true
          )
          .addField(
            "**🥂╎NOMBRE EN JAPONES:**",
            data.japaneseTitle,
            true
          )
          .addField(
            "**⛩️╎FECHA DE TRANSMISION:**",
            data.aired,
            true
          )
          .addField("**🍥╎TIPO:** ", data.type, true)
          .addField("**🍣╎EDAD:**", data.rating, true)
          .addField("**🍱╎GENERO:**", data.genres, true)
          .addField("**🍜╎CAPITULOS:**", data.episodes, true)
          .addField(
            "**🍾╎PUNTUACION MEDIA:**",
            data.score,
            true
          )
          .addField(
            "**🥃╎PUNTUACION TOTAL:**",
            data.scoreStats,
            true
          )
          .addField(
            "**🥡╎VER ANIME:**",
            "[» Click Aquí «](" + data.url + ")",
            true
          )
          .addField(
            "**🍚╎TRAILER DEL ANIME:**",
            data.trailer || "~~___**¡No hay ningún trailer disponible!**___~~",
            true
          )
          .setColor("RANDOM")
          .setImage(data.picture)
          .setFooter(message.author.tag, message.author.avatarURL);

        m.edit(malEmbed);
      })
      .catch(err => {
        const error = new Discord.RichEmbed()
          .setAuthor("AKUMA╎ANIMES", client.user.avatarURL)
          .setTitle("🍲╎ANIME NO ENCONTRADO \n")
          .setDescription(
            "___ · Lo siento **" +
              message.author +
              "**🍞╎NO HAY INFO SOBRE:**" +
              args.join(" ") +
              "** \n \n \n · `🍭╎ESCRIBA BIEN EL NOMBRE DEL ANIME**"
          )
          .setThumbnail("")
          .setColor("#ff0000");
        m.edit(error);
      });
  });
};

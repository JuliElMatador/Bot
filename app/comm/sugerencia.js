const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let mensaje = args.join(" ");

  if (!mensaje)
    return     message.channel.send({embed: {
      color: 3447003,
      description: "**Debes de ingresar una sugerencia, para el servidor**"
    }});

      

  let msgChannel = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(message.author.avatarURL)
    .setTitle("**__AKUMA__ · __SUGERENCIA__**")
    .addField("**SUGERENCIA DE**", message.author)
    .addField("**:cherry_blossom: Me Gusta ┆ :hibiscus:  No me Gusta ┆ :tanabata_tree: Ya esta**", "** **")
    .setDescription(args.join(" "));
  message.delete();

  let channel = client.channels.get("720037526978429000");

  channel.send(msgChannel).then(m => {
    m.react("\🌸");
    m.react("\🌺");
    m.react("\🎋");
  });
};
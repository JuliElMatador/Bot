const math = require("math-expression-evaluator");

const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  const embed = new Discord.RichEmbed().setColor(`RANDOM`);

  if (!args[0]) {
    embed.setFooter("Por favor ingrese una `expresion`.");
    return await message.channel.send(embed);
  }
  let resultado;
  try {
    resultado = math.eval(args.join(" "));
  } catch (e) {
    resultado = "error: Entrada Invalida";
  }
  embed
    .addField(
      ":outbox_tray: Entrada:",
      `\`\`\`js\n${args.join(" ")}\`\`\``,
      false
    )
    .setTitle(" Calculadora")
    .setColor("RANDOM")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTimestamp()
    .addField(":inbox_tray: Resultado", `\`\`\`js\n${resultado}\`\`\``, false);
  await message.channel.send(embed);
};

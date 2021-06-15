const reglas = {
  name: "reglas",
  description: "Muestra las reglas del servidor",
  run: (msg, args) => {
    const messageEmbed = require("../utils/messageEmbed");
    const { customMessage, rules } = require("../messages/rules.json");
    const author = msg.author.username;

    msg.channel.send(
      messageEmbed({
        authorName: author,
        title: customMessage,
        content: rules,
      })
    );
  },
};

module.exports = reglas;

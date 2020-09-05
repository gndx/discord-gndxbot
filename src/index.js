const Discord = require('discord.js');
const client = new Discord.Client();
const messageEmbed = require('./utils/messageEmbed');

require('dotenv').config();

const rules = require('./messages/rules.json');


const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

client.on('message', msg => {
  console.log(msg.content)

  // if (msg.channel.type === 'dm') {
  //   console.log('Enviaste un DM.')
  //   msg.reply(':thinking:');
  //   msg.react('👍');
  // }

  // if (msg.content.toLocaleLowerCase() === 'hola') {
  //   msg.channel.send(messageEmbed());
  //   msg.react('👍');
  // }

  if (msg.content.toLocaleLowerCase() === '!reglas') {
    const author = msg.author.username
    // msg.channel.send(`Estas son las reglas, ${author}`)
    msg.channel.send(messageEmbed({
      authorName: author,
      title: rules.customMessage,
      content: rules.rules
    }))
  }

});

client.on('ready', () => {
  console.log(`Conectado... ${client.user.tag}`);
});

client.login(DISCORD_TOKEN);
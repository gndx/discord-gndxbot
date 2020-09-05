const Discord = require('discord.js');

const messageEmbed = ({ authorName, title, content }) => {
  const parseContent = content.map(i => `${i}\n`)
  const msgEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`Hola ${authorName}`)
    .setDescription(`${title} ${parseContent}`)
    .setFooter('Comunidad de GNDX')

  return msgEmbed;
};

module.exports = messageEmbed;
const Discord = require("discord.js");
const client = new Discord.Client();

require("dotenv").config();

const DISCORD_PREFIX = "!";
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

client.on("ready", () => {
  console.log(`Conectado... ${client.user.tag}`);
});

client.on("message", (msg) => {
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;
  if (!msg.content.startsWith(DISCORD_PREFIX)) return;

  // Arguments are all messages after prefix and command
  const ARGUMENTS = msg.content;
  const PREFIX_LENGTH = DISCORD_PREFIX.length;
  const NO_PREFIX_ARGUMENTS = ARGUMENTS.slice(PREFIX_LENGTH);
  const ARGUMENTS_ARRAY = NO_PREFIX_ARGUMENTS.trim().split(/ +/g);
  const COMMAND = ARGUMENTS_ARRAY.shift().toLowerCase();

  // Command Handler
  try {
    const COMMAND_FILE = require(`./commands/${COMMAND}.js`);
    if (COMMAND_FILE) COMMAND_FILE.run(msg, ARGUMENTS_ARRAY);
  } catch (error) {
    console.error(error);
  }
});

client.login(DISCORD_TOKEN);

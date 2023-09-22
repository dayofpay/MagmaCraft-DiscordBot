
require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const config = require('./config/env');
const commands = require('./commands/commands');
const initCommands = require('./initCommands');
client.on('ready', async () => {
  console.log(`=== BOT AUTHENTICATION READY ===  \r\n\ Logged in as - ${client.user.tag}!`);
  initCommands.initCommands();
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'magmatokens') {
    commands.getTokens(interaction);
  }
  else if(commandName === 'magmalastjoin'){
    commands.lastJoin(interaction);
  }
  else if(commandName === 'magmaprefix'){
    commands.getPrefix(interaction);
  }
});

// Log in your bot
client.login(config.APP_TOKEN);

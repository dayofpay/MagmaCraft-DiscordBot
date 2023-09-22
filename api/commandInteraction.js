function onInteraction(){
    client.on('interactionCreate', async (interaction) => {
        if (!interaction.isCommand()) return;
        const commandName = interaction.commandName;
    
        const parsedCommands = JSON.parse(commands);
        const command = parsedCommands.find((cmd) => cmd.name === commandName);
    
        if (!command) {
          await interaction.reply(config.LOCALES.INVALID_COMMAND);
          return;
        }
    
        await interaction.reply(command.reply);
      });
}

module.exports = onInteraction;
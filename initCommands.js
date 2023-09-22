const {
    SlashCommandBuilder
} = require('discord.js');
const {
    REST,
    Routes
} = require('discord.js');
const config = require('./config/env')
const rest = new REST({
    version: '10'
}).setToken(config.APP_TOKEN);
async function initCommands() {
    const data = new SlashCommandBuilder()
        .setName('magmatokens')
        .setDescription('Взима токените на играч')
        .addStringOption(option =>
            option.setName('player')
            .setDescription('Играч, на когото искате да проверите токените'));
    const lastJoinCommand = new SlashCommandBuilder()
        .setName('magmalastjoin')
        .setDescription('Показва последното присъединяване на играч')
        .addStringOption(option =>
            option.setName('player')
            .setDescription('Играч, на когото искате да проверите последното присъединяване'));
    const getPrefix = new SlashCommandBuilder()
        .setName('magmaprefix')
        .setDescription('Показва prefix-a на играч')
        .addStringOption(option =>
            option.setName('player')
            .setDescription('Играч, на когото искате да проверите prefix-a'));
    const getUsers = new SlashCommandBuilder()
            .setName('onlineusers')
                .setDescription('Показва онлайн играчите')

    try {
        await rest.put(
            Routes.applicationGuildCommands(config.CLIENT_ID, config.GUILD_ID), {
                body: [data.toJSON(), lastJoinCommand.toJSON(), getPrefix.toJSON(),getUsers.toJSON()]
            }
        );
    } catch (error) {
        console.error('Error registering slash command:', error);
    }
}

module.exports = {
    initCommands
};
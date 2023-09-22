const services = require('../api/services');

async function getTokens(interaction) {
    const playerName = interaction.options.getString('player');

    if (!playerName) {
        await interaction.reply('Моля, въведете потребител.');
        return;
    }

    try {
        const tokens = await services.getPlayerTokens(playerName);
        await interaction.reply(`Играч ${playerName} разполага с ${tokens} токени`);
    } catch (error) {
        console.error('Грешка при опит да се извлекат данните:', error);
        await interaction.reply('Възникна грешка при опит да проверим токените на ' + playerName);
    }
}


async function lastJoin(interaction) {

    const playerName = interaction.options.getString('player');

    if (!playerName) {
        await interaction.reply('Моля, въведете потребител.');
        return;
    }

    try {
        const lastJoin = await services.getLastJoin(playerName);
        await interaction.reply(`Играч ${playerName} е влязал последно на ${lastJoin}`);
    } catch (error) {
        console.error('Грешка при опит да се извлекат данните:', error);
        await interaction.reply('Възникна грешка при опит да проверим данните на ' + playerName);
    }
}

async function getPrefix(interaction){

    const playerName = interaction.options.getString('player');

    if (!playerName) {
        await interaction.reply('Моля, въведете потребител.');
        return;
    }

    try {
        const userPrefix = await services.getPrefix(playerName);
        await interaction.reply(`Префикса на играч ${playerName} е  ${userPrefix}`);
    } catch (error) {
        console.error('Грешка при опит да се извлекат данните:', error);
        await interaction.reply('Възникна грешка при опит да проверим данните на ' + playerName);
    }
}

module.exports = {
    getTokens,
    lastJoin,
    getPrefix,
};
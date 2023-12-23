const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('sendmessage')
        .setDescription('Sends a message to the current channel'),
    async execute(interaction) {
        const { channel, options } = interaction;
        const message = options.getString('message');

        if (!message) {
            return interaction.reply({ content: 'Please provide a message to send.' });
        }

       
    },
};


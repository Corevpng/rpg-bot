const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('yetkili-davet-log')
        .setDescription('Davet loglarının atılacağı kanalı ayarlar.')
        .addChannelOption(option =>
            option.setName('kanal')
                .setDescription('Davet loglarının atılacağı kanal')
                .setRequired(true)),
    async execute(interaction) {
        const channel = interaction.options.getChannel('kanal');

        const embed = new EmbedBuilder()
            .setTitle('Davet Log Kanalı Ayarlandı 📋')
            .setDescription(`Davet loglarının bu kanalda yayınlanması ayarlandı: ${channel}.`)
            .setColor('#7289DA');

        await interaction.reply({ embeds: [embed] });
    }
};

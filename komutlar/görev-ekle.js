const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('görev-ekle')
        .setDescription('Yeni bir görev ekler.')
        .addStringOption(option =>
            option.setName('açıklama')
                .setDescription('Yeni görevin açıklaması')
                .setRequired(true)),
    async execute(interaction) {
        const description = interaction.options.getString('açıklama');
        const filePath = path.join(__dirname, '../veri/görevler.json');
        let quests = [];

        if (fs.existsSync(filePath)) {
            quests = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        }

        quests.push({ description });
        fs.writeFileSync(filePath, JSON.stringify(quests, null, 2));

        const embed = new EmbedBuilder()
            .setTitle('Yeni Görev Eklendi! 📝')
            .setDescription(`**Savaşçı**, yeni görev başarıyla eklendi! 🎉`)
            .setColor('#7289DA');

        await interaction.reply({ embeds: [embed] });
    }
};

const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('görevler')
        .setDescription('Mevcut görevleri listeler.'),
    async execute(interaction) {
        const filePath = path.join(__dirname, '../veri/görevler.json');
        let quests = {};

        if (fs.existsSync(filePath)) {
            quests = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        }

        if (Object.keys(quests).length === 0) {
            return interaction.reply({ content: 'Şu an aktif görev bulunmuyor, **Savaşçı**!', ephemeral: true });
        }

        const questList = Object.entries(quests).map(([quest, description]) => `• **${quest}**: ${description}`).join('\n');

        const embed = new EmbedBuilder()
            .setTitle('Aktif Görevler 🗺️')
            .setDescription(`**Sevgili Savaşçı** ${interaction.user.username}, işte mevcut görevler:`)
            .addFields({ name: 'Görevler:', value: questList || 'Boş', inline: false })
            .setColor('#7289DA');

        await interaction.reply({ embeds: [embed] });
    }
};
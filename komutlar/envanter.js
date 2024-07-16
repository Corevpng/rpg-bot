const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('envanter')
        .setDescription('Savaşçının envanterindeki eşyaları gösterir.'),
    async execute(interaction) {
        const userId = interaction.user.id;
        const filePath = path.join(__dirname, '../veri/envanter.json');
        let inventory = {};

        if (fs.existsSync(filePath)) {
            inventory = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        }

        if (!inventory[userId] || inventory[userId].length === 0) {
            return interaction.reply({ content: 'Envanterinde hiç eşya bulunmuyor, **Savaşçı**! 🎒', ephemeral: true });
        }

        const items = inventory[userId].map(item => `• ${item}`).join('\n');

        const embed = new EmbedBuilder()
            .setTitle('Envanter 🛡️')
            .setDescription(`**Sevgili Savaşçı** ${interaction.user.username}, işte envanterindeki eşyalar:`)
            .addFields({ name: 'Eşyalar:', value: items || 'Boş', inline: true })
            .setColor('#7289DA');

        await interaction.reply({ embeds: [embed] });
    }
};
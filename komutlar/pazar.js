const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pazar')
        .setDescription('Pazardaki eşyaları gösterir.'),
    async execute(interaction) {
        const filePath = path.join(__dirname, '../veri/pazar.json');
        let market = {};

        if (fs.existsSync(filePath)) {
            market = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        }

        if (Object.keys(market).length === 0) {
            return interaction.reply({ content: 'Pazar boş, **Savaşçı**! 🛒', ephemeral: true });
        }

        const items = Object.entries(market).map(([item, price]) => `• ${item} - ${price} pcoin`).join('\n');

        const embed = new EmbedBuilder()
            .setTitle('Pazar 🏷️')
            .setDescription(`**Sevgili Savaşçı** ${interaction.user.username}, işte pazardaki eşyalar:`)
            .addFields({ name: 'Eşyalar:', value: items || 'Boş', inline: true })
            .setColor('#7289DA');

        await interaction.reply({ embeds: [embed] });
    }
};
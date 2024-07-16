const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('karakter')
        .setDescription('Savaşçının karakter bilgilerini gösterir.'),
    async execute(interaction) {
        const userId = interaction.user.id;
        const filePath = path.join(__dirname, '../veri/karakterler.json');
        let characters = {};

        if (fs.existsSync(filePath)) {
            characters = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        }

        if (!characters[userId]) {
            characters[userId] = {
                level: 1,
                experience: 0,
                health: 100,
                attack: 10
            };
        }

        const character = characters[userId];

        const embed = new EmbedBuilder()
            .setTitle('Karakter Bilgileri ⚔️')
            .setDescription(`**Sevgili Savaşçı** ${interaction.user.username}, işte karakter bilgilerin:`)
            .addFields(
                { name: 'Level:', value: `${character.level}`, inline: true },
                { name: 'Deneyim:', value: `${character.experience}`, inline: true },
                { name: 'Sağlık:', value: `${character.health}`, inline: true },
                { name: 'Saldırı:', value: `${character.attack}`, inline: true }
            )
            .setColor('#7289DA');

        await interaction.reply({ embeds: [embed] });
    }
};
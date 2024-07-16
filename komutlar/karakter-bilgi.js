const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('karakter-bilgi')
        .setDescription('Karakterinizin mevcut bilgilerini gösterir.'),
    async execute(interaction) {
        const userId = interaction.user.id;
        const filePath = path.join(__dirname, '../veri/karakterler.json');
        let characters = {};

        if (!fs.existsSync(filePath)) {
            return interaction.reply({ content: 'Henüz bir karakter oluşturmadınız!', ephemeral: true });
        }

        characters = JSON.parse(fs.readFileSync(filePath, 'utf8'));

        if (!characters[userId]) {
            return interaction.reply({ content: 'Henüz bir karakter oluşturmadınız!', ephemeral: true });
        }

        const character = characters[userId];
        const embed = new EmbedBuilder()
            .setTitle('Karakter Bilgileri')
            .addFields(
                { name: 'İsim', value: character.name, inline: true },
                { name: 'Seviye', value: `${character.level}`, inline: true },
                { name: 'Sağlık', value: `${character.health}`, inline: true },
                { name: 'Mana', value: `${character.mana}`, inline: true }
            )
            .setColor('#7289DA');

        await interaction.reply({ embeds: [embed] });
    }
};

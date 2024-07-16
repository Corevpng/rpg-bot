const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('karakter-olustur')
        .setDescription('Yeni bir karakter oluşturur.')
        .addStringOption(option =>
            option.setName('isim')
                .setDescription('Karakterinizin ismi')
                .setRequired(true)),
    async execute(interaction) {
        const name = interaction.options.getString('isim');
        const userId = interaction.user.id;
        const filePath = path.join(__dirname, '../veri/karakterler.json');
        let characters = {};

        if (fs.existsSync(filePath)) {
            characters = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        }

        if (characters[userId]) {
            return interaction.reply({ content: 'Zaten bir karakteriniz var!', ephemeral: true });
        }

        characters[userId] = { name: name, level: 1, health: 100, mana: 100 };
        fs.writeFileSync(filePath, JSON.stringify(characters, null, 2));

        const embed = new EmbedBuilder()
            .setTitle('Karakter Oluşturuldu!')
            .setDescription(`Karakteriniz **${name}** olarak başarıyla oluşturuldu!`)
            .setColor('#7289DA');

        await interaction.reply({ embeds: [embed] });
    }
};

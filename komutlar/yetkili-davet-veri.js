const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('yetkili-davet-veri')
        .setDescription('Genel davet verilerini gösterir.'),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('Genel Davet Verileri 📊')
            .setDescription(`**Sevgili Savaşçı** ${interaction.user.username}, genel davet verilerini burada görebilirsiniz.`)
            .setColor('#7289DA');

        await interaction.reply({ embeds: [embed] });
    }
};

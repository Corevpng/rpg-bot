const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('yetkili-davet')
        .setDescription('Davet ayarlarını yönetir.'),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('Davet Yönetimi ⚙️')
            .setDescription(`**Sevgili Savaşçı** ${interaction.user.username}, davet ayarlarını buradan yönetebilirsiniz.`)
            .setColor('#7289DA');

        await interaction.reply({ embeds: [embed] });
    }
};

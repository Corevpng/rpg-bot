const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('yetkili-giriş-çıkış')
        .setDescription('Giriş ve çıkış ayarlarını yönetir.'),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('Giriş & Çıkış Ayarları ⚙️')
            .setDescription(`**Sevgili Savaşçı** ${interaction.user.username}, giriş ve çıkış ayarlarını buradan yönetebilirsiniz.`)
            .setColor('#7289DA');

        await interaction.reply({ embeds: [embed] });
    }
};

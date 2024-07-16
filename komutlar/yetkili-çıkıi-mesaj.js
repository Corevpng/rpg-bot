const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('yetkili-çıkış-mesaj')
        .setDescription('Kullanıcı çıkış mesajını ayarlar.')
        .addChannelOption(option =>
            option.setName('kanal')
                .setDescription('Çıkış mesajının gönderileceği kanal')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('mesaj')
                .setDescription('Çıkış mesajı')
                .setRequired(true))
        .addBooleanOption(option =>
            option.setName('açık')
                .setDescription('Mesajı etkinleştirir veya devre dışı bırakır')
                .setRequired(true)),
    async execute(interaction) {
        const channel = interaction.options.getChannel('kanal');
        const message = interaction.options.getString('mesaj');
        const isEnabled = interaction.options.getBoolean('açık');

        const embed = new EmbedBuilder()
            .setTitle('Çıkış Mesajı Ayarlandı 📝')
            .setDescription(`Çıkış mesajı ${channel} kanalına gönderilecektir: ${message}`)
            .addFields({ name: 'Durum:', value: isEnabled ? 'Açık' : 'Kapalı', inline: true })
            .setColor('#7289DA');

        await interaction.reply({ embeds: [embed] });
    }
};

const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('yetkili-giriş-mesaj')
        .setDescription('Kullanıcı giriş mesajını ayarlar.')
        .addChannelOption(option =>
            option.setName('kanal')
                .setDescription('Giriş mesajının gönderileceği kanal')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('mesaj')
                .setDescription('Giriş mesajı')
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
            .setTitle('Giriş Mesajı Ayarlandı 📨')
            .setDescription(`Giriş mesajı ${channel} kanalına gönderilecektir: ${message}`)
            .addFields({ name: 'Durum:', value: isEnabled ? 'Açık' : 'Kapalı', inline: true })
            .setColor('#7289DA');

        await interaction.reply({ embeds: [embed] });
    }
};

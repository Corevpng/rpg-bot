const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('düşman')
        .setDescription('Savaşçıları düşmanlarla karşılaştırır.')
        .addUserOption(option =>
            option.setName('hedef')
                .setDescription('Düşman olarak karşılaştırmak istediğiniz kullanıcı')
                .setRequired(true)),
    async execute(interaction) {
        const target = interaction.options.getUser('hedef');
        const embed = new EmbedBuilder()
            .setTitle('Düşman Karşılaştırması ⚔️')
            .setDescription(`**Sevgili Savaşçı** ${interaction.user.username}, **${target.username}** ile karşı karşıyasın!`)
            .setColor('#7289DA');

        await interaction.reply({ embeds: [embed] });
    }
};

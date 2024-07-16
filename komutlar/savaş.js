const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('savaş')
        .setDescription('Savaş başlatır.')
        .addUserOption(option =>
            option.setName('hedef')
                .setDescription('Savaşa katılmak istediğiniz hedef kullanıcı')
                .setRequired(true)),
    async execute(interaction) {
        const target = interaction.options.getUser('hedef');
        const embed = new EmbedBuilder()
            .setTitle('Savaş Başladı! ⚔️')
            .setDescription(`**Sevgili Savaşçı** ${interaction.user.username}, **${target.username}** ile savaşa girdin!`)
            .setColor('#7289DA');

        await interaction.reply({ embeds: [embed] });
    }
};

const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('görev-tamamla')
        .setDescription('Bir görevi tamamlar.')
        .addStringOption(option =>
            option.setName('görev-id')
                .setDescription('Tamamlamak istediğiniz görev ID\'si')
                .setRequired(true)),
    async execute(interaction) {
        const questId = interaction.options.getString('görev-id');
        const userId = interaction.user.id;
        const questsPath = path.join(__dirname, '../veri/görevler.json');
        const userQuestsPath = path.join(__dirname, '../veri/kullanici-görevler.json');
        let quests = {};
        let userQuests = {};

        if (fs.existsSync(questsPath)) {
            quests = JSON.parse(fs.readFileSync(questsPath, 'utf8'));
        } else {
            return interaction.reply({ content: 'Görevler mevcut değil.', ephemeral: true });
        }

        if (fs.existsSync(userQuestsPath)) {
            userQuests = JSON.parse(fs.readFileSync(userQuestsPath, 'utf8'));
        } else {
            return interaction.reply({ content: 'Kullanıcı görev verisi bulunamadı.', ephemeral: true });
        }

        if (!userQuests[userId] || !userQuests[userId].includes(questId)) {
            return interaction.reply({ content: 'Bu görevi kabul etmediniz veya zaten tamamladınız.', ephemeral: true });
        }

        // Remove quest from user's active quests
        userQuests[userId] = userQuests[userId].filter(id => id !== questId);
        fs.writeFileSync(userQuestsPath, JSON.stringify(userQuests, null, 2));

        // TODO: Add reward to user

        const embed = new EmbedBuilder()
            .setTitle('Görev Tamamlandı!')
            .setDescription(`Görev **${questId}** başarıyla tamamlandı!`)
            .setColor('#7289DA');

        await interaction.reply({ embeds: [embed] });
    }
};

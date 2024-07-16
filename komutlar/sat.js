const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('sat')
        .setDescription('Kendi envanterinizden bir eşyayı satışa çıkarır.')
        .addStringOption(option =>
            option.setName('eşya')
                .setDescription('Satışa çıkarmak istediğiniz eşya')
                .setRequired(true)),
    async execute(interaction) {
        const item = interaction.options.getString('eşya');
        const userId = interaction.user.id;
        const inventoryPath = path.join(__dirname, '../veri/envanter.json');
        const marketPath = path.join(__dirname, '../veri/pazar.json');
        let inventory = {};
        let market = {};

        if (fs.existsSync(inventoryPath)) {
            inventory = JSON.parse(fs.readFileSync(inventoryPath, 'utf8'));
        } else {
            return interaction.reply({ content: 'Envanterinizde hiç eşya yok!', ephemeral: true });
        }

        if (!inventory[userId] || !inventory[userId].includes(item)) {
            return interaction.reply({ content: 'Bu eşya envanterinizde mevcut değil.', ephemeral: true });
        }

        if (fs.existsSync(marketPath)) {
            market = JSON.parse(fs.readFileSync(marketPath, 'utf8'));
        }

        market[item] = 100; // Default price, modify as needed
        fs.writeFileSync(marketPath, JSON.stringify(market, null, 2));

        inventory[userId] = inventory[userId].filter(i => i !== item);
        fs.writeFileSync(inventoryPath, JSON.stringify(inventory, null, 2));

        const embed = new EmbedBuilder()
            .setTitle('Eşya Satışa Çıkarıldı!')
            .setDescription(`**${item}** başarıyla satışa çıkarıldı.`)
            .setColor('#7289DA');

        await interaction.reply({ embeds: [embed] });
    }
};

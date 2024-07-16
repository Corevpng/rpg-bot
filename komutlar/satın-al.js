const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('satın-al')
        .setDescription('Pazardan bir eşyayı satın alır.')
        .addStringOption(option =>
            option.setName('eşya')
                .setDescription('Satın almak istediğiniz eşya')
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
            inventory = {};
        }

        if (fs.existsSync(marketPath)) {
            market = JSON.parse(fs.readFileSync(marketPath, 'utf8'));
        } else {
            return interaction.reply({ content: 'Pazarda bu eşya bulunmuyor!', ephemeral: true });
        }

        if (!market[item]) {
            return interaction.reply({ content: 'Bu eşya pazarımızda bulunmuyor, **Savaşçı**! 🛒', ephemeral: true });
        }

        // Add item to inventory
        if (!inventory[userId]) {
            inventory[userId] = [];
        }

        inventory[userId].push(item);
        fs.writeFileSync(inventoryPath, JSON.stringify(inventory, null, 2));

        // Remove item from market
        delete market[item];
        fs.writeFileSync(marketPath, JSON.stringify(market, null, 2));

        const embed = new EmbedBuilder()
            .setTitle('Eşya Satın Alındı! 🛡️')
            .setDescription(`**${item}** başarıyla satın alındı! 🎉`)
            .setColor('#7289DA');

        await interaction.reply({ embeds: [embed] });
    }
};
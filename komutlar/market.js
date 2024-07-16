const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('market')
        .setDescription('Pazar yerindeki mevcut eşyaları gösterir.'),
    async execute(interaction) {
        // Örnek ürün listesi
        const items = [
            { name: 'Kılıç', description: 'Keskin ve güçlü bir kılıç.', price: '100 pcoin' },
            { name: 'Kalkan', description: 'Zırhınızı koruyan sağlam bir kalkan.', price: '150 pcoin' },
            { name: 'Zırh', description: 'Savaşta sizi koruyacak ağır zırh.', price: '200 pcoin' },
            { name: 'Okçuluk Seti', description: 'Mükemmel atışlar için bir okçuluk seti.', price: '120 pcoin' },
            { name: 'Büyü Kitabı', description: 'Güçlü büyüler öğrenebileceğiniz bir kitap.', price: '180 pcoin' },
            { name: 'Hız İksiri', description: 'Sizi hızlandıracak büyülü bir iksir.', price: '80 pcoin' },
            { name: 'Görünmezlik Pelerini', description: 'Sizi görünmez yapacak bir pelerin.', price: '250 pcoin' },
            { name: 'Alevli Kılıç', description: 'Alevlerle kaplı güçlü bir kılıç.', price: '300 pcoin' },
            { name: 'Yıldırım Okları', description: 'Yıldırım gücüne sahip oklar.', price: '150 pcoin' },
            { name: 'İksir Cebi', description: 'Birçok iksiri taşıyabileceğiniz özel bir cephane.', price: '90 pcoin' },
            { name: 'Savaş Helmı', description: 'Sizi savaşta koruyacak bir kask.', price: '160 pcoin' },
            { name: 'Gölge Çelengi', description: 'Gölge gibi sessiz bir hareket kabiliyeti sağlar.', price: '210 pcoin' },
            { name: 'Ejderha Pençesi', description: 'Ejderha temalı etkili bir savaş eşyası.', price: '350 pcoin' },
            { name: 'Kritik Vuruş Eşarpı', description: 'Kritik vuruşlar yapmanıza yardımcı olacak bir eşarp.', price: '140 pcoin' },
            { name: 'Şifa İksiri', description: 'Savaşta sizi iyileştirecek bir iksir.', price: '100 pcoin' },
            { name: 'Rüzgar Yüzüğü', description: 'Sizi hızlandıran sihirli bir yüzük.', price: '130 pcoin' },
            { name: 'Zehirli Kılıç', description: 'Zehir etkili bir kılıç.', price: '250 pcoin' },
            { name: 'Büyü Kafesi', description: 'Büyüleri depolayabileceğiniz bir kafes.', price: '200 pcoin' },
            { name: 'Ölümcül Kalkan', description: 'Savaşta ölümcül koruma sağlar.', price: '280 pcoin' },
            { name: 'Güç Yüzüğü', description: 'Savaş gücünüzü artıran bir yüzük.', price: '150 pcoin' },
            { name: 'Karanlık Zırh', description: 'Karanlık güçlerle güçlendirilmiş bir zırh.', price: '220 pcoin' },
            { name: 'Büyü Kitabı 2', description: 'Daha güçlü büyüler öğrenebileceğiniz ikinci bir kitap.', price: '250 pcoin' },
            { name: 'Ateş İksiri', description: 'Ateş gücünü artıran bir iksir.', price: '110 pcoin' },
            { name: 'Sihirli Asa', description: 'Sihirli güçlere sahip bir asa.', price: '300 pcoin' },
            { name: 'Ejderha Kafası', description: 'Ejderha temalı bir kafalık.', price: '270 pcoin' },
            { name: 'Kritik Vuruş Zırhı', description: 'Kritik vuruşlar için özel olarak tasarlanmış bir zırh.', price: '230 pcoin' },
            { name: 'Hızlandırıcı İksir', description: 'Hızınızı geçici olarak artıran bir iksir.', price: '90 pcoin' },
            { name: 'Gizli Kalkan', description: 'Sizi gizleyecek bir kalkan.', price: '200 pcoin' },
            { name: 'Büyülü Gözlük', description: 'Görüşünüzü artıran büyülü gözlükler.', price: '140 pcoin' },
            { name: 'Alevli Ok', description: 'Alevlerle kaplı oklar.', price: '160 pcoin' },
            { name: 'Karanlık Pelerin', description: 'Karanlık güçlerle kaplı bir pelerin.', price: '260 pcoin' },
            { name: 'Savaş Kafası', description: 'Savaş için tasarlanmış özel bir kask.', price: '180 pcoin' },
            { name: 'Şimşek Kılıcı', description: 'Şimşek gücüne sahip bir kılıç.', price: '300 pcoin' },
            { name: 'Sihirli Yüzük', description: 'Gizli sihirleri barındıran bir yüzük.', price: '170 pcoin' },
            { name: 'Efsunlu Kafalık', description: 'Efsunlarla güçlendirilmiş bir kafalık.', price: '220 pcoin' },
            { name: 'Işınlanma İksiri', description: 'Sizi uzak noktalara ışınlayacak bir iksir.', price: '350 pcoin' },
            { name: 'Büyülü Kalkan', description: 'Büyülerle güçlendirilmiş bir kalkan.', price: '290 pcoin' },
            { name: 'Ejderha Kanatları', description: 'Ejderha kanatlarıyla uçmanıza izin verir.', price: '400 pcoin' },
            { name: 'Ateş Pelerini', description: 'Ateş gücünü artıran bir pelerin.', price: '250 pcoin' },
        ];

        const embed = new EmbedBuilder()
            .setTitle('Pazar Yeri 🛒')
            .setDescription('**Savaşçı**, işte pazar yerindeki mevcut eşyalar:')
            .setColor('#7289DA');

        items.forEach((item, index) => {
            embed.addFields({
                name: `Ürün ${index + 1}: ${item.name} 🏷️`,
                value: `**Açıklama:** ${item.description}\n**Fiyat:** ${item.price}`,
            });
        });

        await interaction.reply({ embeds: [embed] });
    }
};
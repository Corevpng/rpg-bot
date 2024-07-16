# RPG Discord Bot

🎮 **RPG Discord Bot** - Discord sunucunuz için dinamik ve eğlenceli bir RPG botu! Bu bot, çeşitli komutlar ve özelliklerle sunucunuza RPG havası katmak için tasarlanmıştır.

## Özellikler

✨ **Temel Özellikler:**
- **/market**: Pazar yerindeki eşyaları gösterir. (Kılıçlar, kalkanlar, zırhlar ve daha fazlası! 🛡️⚔️)
- **/fight**: Diğer oyuncularla savaşın ve ödüller kazanın! ⚔️💥
- **/inventory**: Envanterinizi görüntüleyin ve eşyalarınızı yönetin. 🎒🧩
- **/stats**: Kişisel istatistiklerinizi görüntüleyin. 💪📈
- **/quests**: Görevler alın ve ödüller kazanın! 🏆📜

✨ **Yetkili Komutlar:**
- **/setmarket**: Pazar yerinin ayarlarını yapılandırın. 🔧🛒
- **/setfight**: Savaş ayarlarını yapılandırın. ⚔️🛠️
- **/setinventory**: Envanter ayarlarını yapılandırın. 🎒🔧

## Kurulum

1. **Gereksinimler:**
   - Node.js (v18.x veya üzeri)
   - Discord.js (v14.x)

2. **Yükleme:**
   - Bu proje için gerekli bağımlılıkları yüklemek için terminalde şu komutu çalıştırın:
     ```bash
     npm install
     ```

3. **Yapılandırma:**
   - Bir `.env` dosyası oluşturun ve botunuzun token'ını ekleyin:
     ```env
     TOKEN=your-bot-token
     ```

4. **Komutları Dağıtma:**
   - Komutları Discord API'ye kaydetmek için aşağıdaki komutu çalıştırın:
     ```bash
     node deploy-commands.js
     ```

5. **Botu Başlatma:**
   - Botu başlatmak için aşağıdaki komutu kullanın:
     ```bash
     node code.js
     ```

## Kullanım

- **/market** komutunu kullanarak pazar yerindeki eşyaları görüntüleyebilirsiniz.
- **/fight** komutu ile diğer oyuncularla savaşabilirsiniz.
- **/inventory** komutu ile envanterinizi kontrol edebilir ve yönetebilirsiniz.
- **/stats** komutunu kullanarak kişisel istatistiklerinizi görebilirsiniz.
- **/quests** komutu ile görevler alabilir ve ödüller kazanabilirsiniz.

## Katkıda Bulunma

- Her türlü katkı ve iyileştirme önerilerine açığız! Lütfen **pull request** gönderin veya **issue** açın.

## Lisans

Bu proje [MIT Lisansı](LICENSE) altında lisanslanmıştır.

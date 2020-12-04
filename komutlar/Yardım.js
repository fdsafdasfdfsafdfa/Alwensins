const Discord = require ("discord.js");

exports.run = (client, message) => {

const Embedmatador = new Discord.MessageEmbed()

.setColor("BLUE")
.setTitle("**------[** ©? **Eğlence Botu** ©? **]------**  \n \n **Şuanda kullanılan prefix** `a.`")
.setThumbnail("")
.setDescription(`

------[ :closed_lock_with_key: **Eğlence Komutları** :closed_lock_with_key: ]------

**»  a.ailemiz :** Botun kaç sunucuda olduğunu gösterir
**»  a.ascii :** İstediğiniz şeyi bota yazdırıyor
**»  a.atam :** Atamın fotoğrafını kapak yapar 
**»  a.atla :** Atlarsınız 
**»  a.avatarr :** Avatarınızı atar 
**»  a.avatarım :** Başka bir üyeyi etiketleyerek avatarına bakabilirsiniz 
**»  a.aşkölçer :** Aşkınızı ölçer 
**»  a.balıktut :** Balık tutar 
**»  a.inek :** İnek yazısı 
**»  a.davetoluştur :** Sunucunun davetini oluşturur
**»  a.duyuru :** Duyurur 
**»  a.emojiler :** Emojileri gösterir
**»  a.espiri :** Espiri yapar 
**»  a.havadurumu :** Hava durumu 
**»  a.hesapla :** Hesaplar
**»  a.istatistik :** İstatistik botudur
**»  a.kanalismideğiş :** Kanalın adını değiştirir
**»  a.korkut :** Korkutur 
**»  a.kulannıcıbilgim :** Kullanıcı bilgini gösterir 
**»  a.mesajdöndür :** Mesajınızı döndürür 
**»  a.oylama :** Oylama başlatır 
**»  a.ping :** Botun pingini gösterir
**»  a.roller :** Rolleri gösterir 
**»  a.slowmode :** Chate süre sınırlması koyar 
**»  a.sorusor :** Soru sorar 
**»  a.söv :** Etiketlediğiniz kişiye söver 
**»  a.temizle :** Mesajları siler 
**»  a.top10 :** Botun olduğu ilk 10 sunucuyu gösterir
**»  a.uyar :** Belirledğiniz bir üyeyi uyarır 
**»  a.winner :** Kazanırsınız 
**»  a.yaz :** Yazı yazar
**»  a.yazıkanalaç :** Yazı kanalı açar 
**»  a.yetkilerim :** Yetkilerinizi gösterir 

   **Fikirleriniz** **değerlidir, Belirtmekten asla çekinmeyin!**
   **Botun Destek Sunucusuna Gelmek İçin [Tıkla!](https://discord.gg/YqFRxpPA2R)**
   **Komut hakkında detaylı bilgi için: a.yardım**
   **Aktif discord.js sürümüm: v12.2.0**

**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/YqFRxpPA2R)** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=783811549331456022&scope=bot&permissions=8)** **•** **[Web-Site](https://discord.com/oauth2/authorize?client_id=783811549331456022&scope=bot&permissions=8)**
`)
 
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(Embedmatador)
.then; //Alwen

};
exports.conf = {
enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardım', 
    description: 'The Help Command',
    usage: 'yardım'
};

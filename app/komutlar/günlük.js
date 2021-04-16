const Discord = require('discord.js');//Fiber <3 LysteX
const db = require('quick.db')
  const ms = require('parse-ms');
exports.run = async(client, message, args) => {
let cooldown = 1.728e+8, // 24 Saat
        amount = Math.floor(Math.random() * 10) + 200;      

    let lastDaily = await db.fetch(`süre_${message.author.id}`);
    if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastDaily));
        var hesapd = db.fetch(`hesapismi_${message.author.id}`)
        if(!hesapd) return message.channel.send("İlk önce hesap oluşturmalısın\nHesap oluşturmak için `!hesap-oluştur <isim>`")


        const embed = new Discord.RichEmbed()
        .setTitle('Günlük Ödül!')
        .setColor('#FF0000')
        .setDescription(`Bu Komutu **${timeObj.hours} Saat, ${timeObj.minutes} Dakika, ${timeObj.seconds} Saniye Sonra Tekrar Kullanabilirsin**!`)
        message.channel.send(embed);
        return
    } else {
  let coin = db.fetch(`para_${message.author.id}`)
  var coin2 = ['`' + `${coin}` + '`']
db.add(`para_${message.author.id}`, 150)
  const HysteX = new Discord.RichEmbed()
  .setColor('GREEN')
  .setTitle('Başarılı!')
  .setFooter('LysteX Code')
  .setThumbnail(client.user.avatarURL)
  .setDescription('**<a:doru:741701910448439356> Günlük Paran Hesabına Yatırıldı**')
  .addField('**Hesabındaki Coin Sayısı •**', coin)
  message.channel.send({embed: HysteX})
db.set(`süre_${message.author.id}`, Date.now());
}//Fiber <3 LysteX
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['günlük-para','günlük','gunluk'],
  permLevel: 0
};

exports.help = {
  name: 'para', 
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: 'botekle <botid> <prefix>'
};//LysteX Code








//LysteX Code
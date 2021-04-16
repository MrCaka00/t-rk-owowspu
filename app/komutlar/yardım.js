const Discord = require('discord.js');//Fiber <3 LysteX
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
  const ms = require('parse-ms');
exports.run = async(client, message, args) => {
  var prefix = ayarlar.prefix
message.channel.send(new Discord.RichEmbed()
                    .setTitle("Yardım Menüsü")
                    .setDescription(`
•${prefix}günlük: Günlük paranızı alırsınız.
•${prefix}bakiye: Bakiyenizi öğrenirsiniz.
•${prefix}hesap-oluştur: Hesap oluşturursunuz.
•${prefix}slots: Slots oynarsınız.
•${prefix}para-çal: Para çalarsınız.
•${prefix}çalış: Çalışıp para kazanırsınız.
•${prefix}transfer: Para transfer edersiniz.
•${prefix}parasil: Para silinir sahip özeldir.
•${prefix}paraekle: Para eklenir sahip özeldir.
`))
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0
};

exports.help = {
  name: 'yardım', 
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: 'botekle <botid> <prefix>'
};//Fiber <3 LysteX








//Fiber <3 LysteX
const Discord = require('discord.js');//Fiber <3 LysteX
const db = require('quick.db')
  const ms = require('parse-ms');
exports.run = async(client, message, args) => {
let para = args[1]
let giden = message.mentions.users.first();
let bakiye = db.fetch(`para_${message.author.id}`)
var hesapd = db.fetch(`hesapismi_${message.author.id}`)
if(message.author.id !== "SAHIP ID") return message.channel.send("Bu komut sahibe özeldir.")//SAHIP ID GİRİN
if(!hesapd) return message.channel.send("İlk önce hesap oluşturmalısın\nHesap oluşturmak için `!hesap-oluştur <isim>`")
if(!giden) return message.channel.send(`Parasını silmek istediğin kişiyi etiketle.`)
if(!para) return message.channel.send("Silincek parayı yaz.")
if(isNaN(args[1])) return message.channel.send("Bir sayı girmelisin.")
if(para < 0) return message.channel.send("- Geçerli bir değer değil.")
  db.subtract(`para_${giden.id}`, para)
  message.channel.send(`Para Silindi..`)
        
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['parasil'],
  permLevel: 0
};

exports.help = {
  name: 'para-sil', 
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: 'botekle <botid> <prefix>'
};//Fiber <3 LysteX








//Fiber <3 LysteX
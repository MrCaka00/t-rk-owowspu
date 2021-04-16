const Discord = require('discord.js');//Fiber <3 LysteX
const db = require('quick.db')
  const ms = require('parse-ms');
exports.run = async(client, message, args) => {
var bakiye = db.fetch(`para_${message.author.id}`)|| '0'
var hesapd = db.fetch(`hesapismi_${message.author.id}`)
let suure = 1800000 //30 dk şuan kendinize göre ayarlayınız
var calinan = message.mentions.users.first()
var bcalinan = db.fetch(`para_${calinan.id}`)
let sure = await db.fetch(`soygunsüre_${message.member.id}`)
 let gelcekpara = Math.round(Math.random() * 200)
       
     
      if (sure !== null && suure - (Date.now() - sure) > 0) {
        let timeObj = ms(suure - (Date.now() - sure))
      message.channel.send(`Para çalmak için beklemen lazım.**${timeObj.hours} saat ${timeObj.minutes} dakika** sonra tekrar dene!`)
    } else {
        if(!hesapd) return message.channel.send("İlk önce hesap oluşturmalısın\nHesap oluşturmak için `!hesap-oluştur <isim>`")
        if(!calinan) return message.channel.send("Para çalacağın kişiyi etiketlemelisin")
        if (calinan.bot) return message.reply("Bottan Para Çalamazsın")
        if(bcalinan < 500) return message.channel.send("Bu kişiden para çalamazsın parası az.")
        if (db.fetch(`para_${calinan.id}`) <= '0') return message.reply("Para çalmak istediğin kişi fakirin teki!!")
        if (message.author.id === calinan.id) return message.reply("Kendinden para çalmayı denemekmi nE!")
        let ceza = bakiye / 2
        if(gelcekpara === 18){ return message.channel.send(`Eyvah polise yakalandın ve ${ceza} para ceza yedin`)
         db.subtract(`para_${message.author.id}`, ceza)                    }
        db.subtract(`para_${calinan.id}`, gelcekpara)
        db.add(`para_${message.author.id}`, gelcekpara)
        
   
      message.channel.send('Para çalarak`'+gelcekpara +"` para kazandın !")
       

  
   db.set(`soygunsüre_${message.member.id}`, Date.now())
                     }}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['soygun'],
  permLevel: 0
};

exports.help = {
  name: 'para-çal', 
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: 'botekle <botid> <prefix>'
};//Fiber <3 LysteX








//Fiber <3 LysteX
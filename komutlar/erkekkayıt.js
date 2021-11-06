const Discord = require("discord.js");
const db = require('wio.db');
exports.run = (client, message, args) => {
    const narcosmisafir = message.guild.roles.cache.find(r => r.id === "888901682816229376"); 
    const nkayıterkek = message.guild.roles.cache.find(r => r.id === "875866245948391496"); 
  
  const log = message.guild.channels.cache.find(c => c.id === "902298985472069632"); 
  if(!message.member.roles.cache.array().filter(r => r.id === "888905076666662912")[0]) { 
    return message.channel.send("<a:hayir:888909439204212767> Maalesef **yetkili** değilsin.");
  } else {
    let member = message.mentions.users.first() || client.users.cache.get(args.join(' '))
      if(!member) return message.channel.send("<a:hayir:888909439204212767> Bir **kullanıcı** etiketleyiniz.")
    const c = message.guild.member(member)
    c.roles.add(nkayıterkek)
    c.roles.remove(narcosmisafir)
     const narcoscode = new Discord.MessageEmbed()
.setThumbnail(client.user.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
.setTimestamp()
.setColor("BLACK")
.setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
    .setDescription(`
**Bir Üye Kayıt Oldu! Aşağıda Bilgiler Yazmakta.**

<a:yildiz:888909764053053461> **Kaydı Yapılan Üye:** **${c.user}**

<a:hype:888909639008264212> **Kaydı Yapan Yetkili:** ${message.author}

<a:rainbow:888909258471645185> **Alınan Rol:** ${narcosmisafir}

<a:gold:888909277559930891> **Verilen Rol:** ${nkayıterkek}
`)
         .setFooter('Forza Gaming')
     message.channel.send(narcoscode)
     
    

    const narcosc = new Discord.MessageEmbed()
    .setDescription(`
**Bir Erkek Üye Kayıt Oldu! Aşağıda Bilgiler Yazmakta.**

• Kaydı Yapılan Üye: **${c.user.tag}**
• Kaydı Yapan Yetkili: ${message.author}

**Rol Bilgileri Aşağıda Yazmakta.**

• Alınan Rol: ${narcosmisafir}
• Verilen Rol: ${nkayıterkek}

`)
    .setFooter('Forza Gaming Kayıt Sistemi')
   
    log.send(narcosc)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k","kayit"],
  permLevel: 0
};
exports.help = {
  name: "kayıt",
  description: "",
  usage: ""
};
   

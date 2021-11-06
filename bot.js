const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const { Client, Util } = require('discord.js');
require('./util/eventLoader.js')(client);
const fs = require('fs');
const chalk = require('chalk');//
const moment = require('moment');//
var Jimp = require('jimp');//
const  db  = require('wio.db')


var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.on("guildMemberAdd", member => {
  member.roles.add('888901682816229376'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
});

client.on("guildMemberAdd", member => {
    require("moment-duration-format")
      var Argana = member.guild.members.cache.size.toString().replace(/ /g, "    ")
      var Arg = Argana.match(/([0-9])/g)
      Argana = Argana.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
      if(Arg) {
        Argana = Argana.replace(/([0-9])/g, d => {
          return {
          '0': `<a:0_:889061665310642177>`,
          '1': `<a:1_:889061852926050344>`,
          '2': `<a:2_:889061603155247154>`,
          '3': `<a:3_:889061734374055936>`,
          '4': `<a:4_:889061579017052200>`,                       
          '5': `<a:5_:889061636214759434>`,
          '6': `<a:6_:889061511891410995>`,
          '7': `<a:7_:889062013991542784>`,
          '8': `<a:8_:889061651121311744>`,
          '9': `<a:9_:889061794608463872>`}[d];})}
      const kanal = member.guild.channels.cache.find(r => r.id === "889066405713051698");
      let register = '888905076666662912'
    let user = client.users.cache.get(member.id);
    require("moment-duration-format");
      const Berat = new Date().getTime() - user.createdAt.getTime();  
     const gecen = moment.duration(Berat).format(` YY **[Yıl -]** DD **[Gün -]** HH **[Saat -]** mm **[Dakika -]** ss **[Saniye]**`) 
    var kontrol;
  if (Berat < 1296000000) kontrol = '<:guvenilirdegil:889056745262047242> **Güvenilir Değil.**'
  if (Berat > 1296000000) kontrol = '<:guvenilir:889056716401037312> **Güvenilir Gözüküyor.**'
    moment.locale("tr");
  const embed = new Discord.MessageEmbed()
  .setAuthor(member.guild.name, member.guild.iconURL({dynamic:true}))
  .setDescription(`
<a:ates:904774323800256552> **Sunucumuza Hoş Geldin** <@`+member.id+`>
  
<a:gold:888909277559930891> **Senin İle Beraber :** `+Argana+` **Kişiyiz.**
  
<a:mor:888908227260055552> **Hesap Durumu :** `+kontrol+`

<a:partner:904774732723933194> **Hesap Geçmiş :** \``+gecen+`\`

<a:yukleniyor:888909729768804372> <@&888905076666662912> **Rolüne Sahip Yetkililerimiz Ses Kanallarına Geçtiğin Taktirde Seninle İlgilenecektir.**`)

  .setImage(`https://media.discordapp.net/attachments/728715188936900662/904783168270401606/forza1.png?width=768&height=432`)
  kanal.send(embed)
  kanal.send(`<@&888905076666662912>`)

});
    
    client.login(ayarlar.token);

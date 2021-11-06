const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {

    if(message.author.id !== '478934279540441099') return message.channel.send("**Sen önce botun sahibi ol sonra bu komutu kullanirsin.**")
  let emojiname = args[0];
  const emoji = message.guild.emojis.cache.find(
    motion => motion.name === `${emojiname}`
  );
  if (!emojiname)
    return message.channel.send(
      " **Emoji ismi yazmalisin!**"
    );
  const lewis = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail(`${emoji.url}`)
    .addField("• Emojinin ismi", `${emojiname}`)
    .addField("• Emoji ID", `${emoji.id}`)
    .addField("• Link", `${emoji.url}`)
    .setTimestamp();
  message.channel.send(lewis);
  console.log(lewis);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["emoji-info"],
  permLevel: 0
};

exports.help = {
  name: "emoji-bilgi",
  description: "",
  usage: ""
};//LEWIS
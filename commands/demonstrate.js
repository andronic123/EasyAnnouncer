const Discord = require("discord.js");
let letterid = require(`../configs/letters.json`);
let info = require(`../configs/info.json`);
const toemojis = require(`../events/toemojis.js`)


module.exports.run =  async(bot, message, args, prefix) => {
    message.delete(200)

    let uicon = message.author.displayAvatarURL
    let sayembed = new Discord.RichEmbed()
      .setColor(info.color)
      .setTitle(`${toemojis.run(bot,"hack week")}`)
      .setImage(`https://discordemoji.com/assets/emoji/9879_hackerman.gif`)
      .setFooter(info.version,info.icon)
      .setTimestamp();
      message.channel.send(sayembed)



}

module.exports.help = {
    name: "demonstrate",
    aliases: []
  }
  
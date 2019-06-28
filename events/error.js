const Discord = require("discord.js");
const fs = require("fs");
const info = require("../configs/info.json");


module.exports.run = function (bot, message, channel) {
    //Simple error emoji
    let errorem = bot.emojis.get("593968958508630035")
    //Simple error embed for all error usages
    let error = new Discord.RichEmbed()
     .setColor(info.color)
     .setDescription(`${errorem} ${message}`)
     .setFooter(info.version)
     .setTimestamp();
     channel.send(error)

}
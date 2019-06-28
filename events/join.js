const Discord = require("discord.js");
const toemojis = require(`./toemojis.js`)
let info = require(`../configs/info.json`);
const time = require(`../events/time.js`)
const bot = new Discord.Client();

module.exports.run = function (bot) {

bot.on('guildMemberAdd', async member => {
    //Get a welcome channel
    const wb = member.guild.channels.find(c=> c.name === "general") //Change channel with yours welcome channel
    //Simple emojis
    let wc1 = bot.emojis.get("593974863459516416");
    let wc2 = bot.emojis.get("593974942760960000");
    //Welcome embed with Emoji message
    let membed = new Discord.RichEmbed()
        .setAuthor(`${member.user.tag}`,member.user.displayAvatarURL)
        .setColor(info.color)
        .setThumbnail(member.user.displayAvatarURL)
        .setDescription(`${toemojis.run(bot,"Welcome to")}\n\n${toemojis.run(bot,"the server")}\n${time.run()}`)
        .setImage(`https://discordemoji.com/assets/emoji/welcomeglitch.gif`)
        .setFooter(info.version,info.icon)
        .setTimestamp();
    wb.send(membed);
   
    
});
    
}
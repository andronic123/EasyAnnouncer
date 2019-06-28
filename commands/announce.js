const Discord = require("discord.js");
let info = require(`../configs/info.json`);
let letterid = require(`../configs/letters.json`);
let error = require(`../events/error.js`)
const toemojis = require(`../events/toemojis.js`)


module.exports.run =  async(bot, message, args, prefix) => {
    //Delete the message
    message.delete(200)
    //Define the channel
    let anchannel = message.mentions.channels.first()
    //Error if channel does not exist
    if(!anchannel){
        error.run(bot,`Required argument missing!\n\n Usage !announce **<channel>** <title> <(announce text)>`,message.channel)
        return;
    }
    //Check for announce text
    if(!message.content.includes(`(`)){
        error.run(bot,`Required argument missing!\n\n Usage !announce <channel> **<title>** <(announce text)>`,message.channel)
        return;
    }
    //String processing
    let cmsg = args.join(" ").split(" ");
    cmsg.shift()
    let temp = cmsg.join(` `).split(`(`)
    //Check for syntax
    if(!temp[1].includes(`)`)){
    error.run(bot,`Required argument missing!\n\n Usage !announce <channel> <title> **<(announce text)>**`,message.channel)
    return;
    }
    message1 = temp[1].replace(')','');
    //Check for text in "()"
    if(!cmsg[1]){
    error.run(bot,`Required argument missing!\nPlsease specify some text!announce <channel> <title> **<(announce text)>**`,message.channel)
        return;
    }
    //Build The main embed
    let uicon = message.author.displayAvatarURL
    let sayembed = new Discord.RichEmbed()
    .setColor(info.color)
    .setTitle(`**${anchannel.name.toUpperCase()}**`)
    .setFooter(info.version,uicon)
    .setTimestamp();
    let none = temp[0].toLowerCase()
    //Check for Title
    if(none === "none "){
        //if none then default announcement
        sayembed.setDescription(`${message1}\n\n${announceem} Announcement by: ${message.author}`)
    }else{
        //Uses function to process the string
        let x =  toemojis.run(bot,temp[0]);
        //Simple emoji
        let announceem = bot.emojis.get("593965952513605648")
        await sayembed.setDescription(`${x}\n\n${message1}\n\n${announceem} Announcement by: ${message.author}`)
        
    }
    //sends the final embed
    anchannel.send(sayembed)


}


module.exports.help = {
  name: "announce",
  aliases: ["say"]
}

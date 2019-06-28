const Discord = require("discord.js");
const fs = require("fs");
const prefix = "!"


module.exports.run = function (bot) {

bot.on("message", async message => {
    //Return if message is in DM
    if (message.channel.type === 'dm' ){
      return;
    }
    let args = message.content.slice(prefix.length).trim().split(` `)
    let cmd = args.shift().toLowerCase()
    let commandfile
    if(bot.commands.has(cmd)){
      commandfile = bot.commands.get(cmd)
    }else{
      commandfile = bot.commands.get(bot.aliases.get(cmd))
    }
    if(commandfile) commandfile.run(bot,message,args,prefix);
    if(!message.content.startsWith(prefix)) return;

  });
}
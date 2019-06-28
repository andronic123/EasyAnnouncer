const botconfig = require("./configs/botconfig.json");
const wb = require("./events/join.js");
const messageevent = require("./events/onmessage.js");
const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const prefix = '-';
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

/*
The bot's command handler for Further Commands
*/
fs.readdir("./commands/",(err, files) => {
    if(err) console.log(err);
  
    let jsfile = files.filter(f => f.split(".").pop() === "js")
  
    if(jsfile.length <= 0){
      console.log("Could not find commands.");
      return;
    }
    jsfile.forEach((f,i) =>{
        let props = require(`./commands/${f}`);
      
        console.log(`${i}: ${f} loaded!`);
        i = i+1
        bot.commands.set(props.help.name, props);
        props.help.aliases.forEach(alias =>{
        bot.aliases.set(alias, props.help.name);
        });
      });
    });

    //This makes the bot change activities every 9000 ticks
    const activities_list = [
      "!announce to make an announcement", 
      "This bot has been made for Discord Hack Week",
      "with baby Wumpus", 
      "!demonstrate",
      "with a rock",
      "with my code",
      ];
//Console log that runs everytime you start the bot
    bot.on("ready", async () => {
        console.log(`${bot.user.username} is online!`);
        console.log(`Bot is online in ${bot.guilds.size} guilds`)
        //Run the join event
        wb.run(bot);
        messageevent.run(bot)
          
            setInterval(() => {
                const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
                bot.user.setActivity(activities_list[index]);
            }, 9000);
    });










bot.login(botconfig.token);
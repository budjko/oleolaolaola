const Discord = require("discord.js")
const bot = new Discord.Client();
const token = require(`./token.json`);
const { CommandHandler } = require(`djs-commands`);
const CH = new CommandHandler({
  folder: __dirname + "/komande/",
  prefix: [`,`]
});

bot.on("ready", () => {
  console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`);
  bot.user.setActivity(`Serving ${bot.guilds.size} servers`);
});

bot.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  bot.user.setActivity(`Serving ${bot.guilds.size} servers`);
});

bot.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  bot.user.setActivity(`ISKORO |${bot.guilds.size}server`);
});
bot.on("message", (message) => {
  if(message.channel.type === `dm`) return;
  if(message.author.type === `bot`) return;
  let args = message.content.split(" ");
  let command = args[0];
  let cmd = CH.getCommand(command);
  if(!cmd) return;
  try{
    cmd.run(bot, message, args);
  }catch(e){
    console.log(e)
  }

})


bot.login(token.token)

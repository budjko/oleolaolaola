const Discord = require("discord.js");

module.exports = class test {
  constructor(){
    this.name = `developer`,
    this.alias = [`dev`],
    this.usage = `,developer`
  }

  run(bot, message, args){
    let devembed = new Discord.RichEmbed()
    .setTitle("Developed by :" + "okokokrip#7260")
    .addField("Zasluge : ", "Lolz#9300")
    .setColor("#42f4aa")
    message.channel.send(devembed);
  }
}

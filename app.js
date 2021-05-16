const Discord = require("discord.js");
const { prefix, token } = require("./config.json");
const client = new Discord.Client();

client.once("ready", () => {
  console.log("ready apde");
});

client.on("message", (message) => {
  if (message.content.startsWith(`${prefix}swear`)) {
    const gali = ["pagal", "haramkhor", "salla", "pucker", "bitch"];
    const randomNumber = Math.floor(Math.random() * 4);
    const randomGali = gali[randomNumber];
    message.channel.send(randomGali);
  }
  //   swear command end

  if (message.content.startsWith(`${prefix}hello`)) {
    const answer = ["mereko bat nai karni", "hello", "nice to meet u"];
    const randomAnswer = Math.floor(Math.random() * 3);
    const ans = answer[randomAnswer];
    message.channel.send(ans);
  } //hello command end
  //new commands here

  // -------------------------------x-------------------------------------x---------------------------------------------x---
  if (message.content.startsWith(prefix)) {
    if (
      message.member.hasPermission([
        "KICK_MEMBERS",
        "BAN_MEMBERS",
        "CHANGE_NICKNAME",
      ])
    ) {
      if (message.content.startsWith(`${prefix}kick`)) {
        var member = message.mentions.members.first();

        member.kick().then((member) => {
          message.channel.send("kicked");
        });
      } else if (message.content.startsWith(`${prefix}ban`)) {
        var member = message.mentions.members.first();

        member.ban().then((member) => {
          message.channel.send("banned ");
        });
      }
    } else {
      message.channel.send("permission nai hai");
    }
  } //ban and kick command end
}); //msg listener end

// -----------------------------x--------------------------------------x-----------------------------x---------------------
client.login(token);

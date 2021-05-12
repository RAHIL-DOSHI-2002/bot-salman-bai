const Discord = require("discord.js");
const{prefix,token}=require("./config.json");
const client= new Discord.Client();


client.once("ready",()=>{
    console.log("ready apde")
   
})

client.on("message",message=>{
  if(message.content.startsWith(prefix)){

 if(message.content === "-swear"){
  const gali = ["pagal","haramkhor","salla","pucker","bitch"];
const randomNumber= Math.floor( Math.random() * 5);
const randomGali=gali[randomNumber];
  message.channel.send(randomGali)
  console.log(randomNumber);
}





   else if(message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS','CHANGE_NICKNAME'])){



 if(message.content.startsWith(`${prefix}kick`)){


  var member= message.mentions.members.first();
   
  member.kick().then((member) =>{ 
    message.channel.send("chala ja bsdk ")
    
 })
}

 else if(message.content.startsWith(`${prefix}ban`)){


   var member= message.mentions.members.first();
   
    member.ban().then((member) =>{ 
      message.channel.send("mar gaya madarchod ")





})
 }

 }
else {
  message.channel.send("You do not have the permission")
  
}



  }
 })

// client.on("message",message=>{
//   if(message.content === "-swear"){
//   const gali = ["chu***a","haramkhor","salla","prathan","bitch"];
// const randomNumber= Math.floor( Math.random() * 4);
// const randomGali=gali[randomNumber];
//   message.channel.send(randomGali)
//   console.log(randomNumber);
// }
// })



client.login(token);
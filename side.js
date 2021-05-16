{




    if(message.content === "_swear"){
     const gali = ["pagal","haramkhor","salla","pucker","bitch"];
   const randomNumber= Math.floor( Math.random() *4 );
   const randomGali=gali[randomNumber];
     message.channel.send(randomGali)
     console.log(randomNumber);
   }
   
   
   
   if(message.content.startsWith(prefix)){
 
 
 
 
 
 
 
   if(message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS','CHANGE_NICKNAME'])){
 
 
 
  if(message.content.startsWith(`${prefix}kick`)){
 
 
   var member= message.mentions.members.first();
    
   member.kick().then((member) =>{ 
     message.channel.send("kicked")
     
  })
 }
 
  else if(message.content.startsWith(`${prefix}ban`)){
 
 
    var member= message.mentions.members.first();
    
     member.ban().then((member) =>{ 
       message.channel.send("banned ")
 
 
 
 
 
 })
  }
 
  }
 else {
   message.channel.send("You do not have the permission")
   
 }
 
 
 
   }
  }
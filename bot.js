const Discord = require('discord.js');
const fs = require("fs"); 
const client = new Discord.Client();
//////////////////////////////////////////////////////////////////////////////////////////
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('The Prince : MdAx77x')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('Created by: MdAx7zx .')
  console.log('')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Sl-Rp Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Welcome to evil gates.`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} servers.`);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
 
});

const prefix = "&"
//////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
if (message.content.startsWith('السلام عليكم')){
     let ra3d = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription("**وعليكم السلام ورحمة الله وبركاتة**")
     
     
  message.channel.sendEmbed(ra3d);
    }
});


client.on('message', message => {
if (message.content.startsWith('السلام عليكم ورحمة الله')){
     let ra31d = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription("**وعليكم السلام ورحمة الله وبركاتة**")
     
     
  message.channel.sendEmbed(ra31d);
    }
});



client.on('message', message => {
if (message.content.startsWith('السلام عليكم ورحمه ')){
     let ra32d = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription("**وعليكم السلام ورحمة الله وبركاتة**")
     
     
  message.channel.sendEmbed(ra32d);
    }
});
///////////////////////////////////////////////
client.on('message', async msg =>{
    if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;
   
    let args = msg.content.split(' ');
 
    let command = msg.content.toLowerCase().split(" ")[0];
    command = command.slice(prefix.length)
 
    if(command === `ping`) {
    let embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setTitle("Pong!!")
    .setDescription(`${client.ping} ms,`)
    .setFooter(`Requested by | ${msg.author.tag}`);
    msg.delete().catch(O_o=>{})
    msg.channel.send(embed);
    }
});
//////////////////////////////////////////////////////////////////////
client.on("message", message => {
 
            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {//حقوق دايموند كودز
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`);
 message.delete();
};    
});
/////////////////////////////////////////////////



const adminprefix = "&";
const devs = ['340580530951290880','340580530951290880'];
client.on('message', message => {
 var argresult = message.content.split(` `).slice(1).join(' ');
   if (!devs.includes(message.author.id)) return;
   
if (message.content.startsWith(adminprefix + 'setg')) {
 client.user.setGame(argresult);
   message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else
 if (message.content.startsWith(adminprefix + 'xdmaisamsd8129')) {
client.user.setUsername(argresult).then
   message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
 if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
 message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
     } else    
if (message.content.startsWith(adminprefix + 'sets')) {
 client.user.setGame(argresult, "https://www.twitch.tv/Mdax77xR1");//حقوق دايموند كودز
   message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)//حقوق دايموند كودز
}
});




client.login(process.env.BOT_TOKEN);

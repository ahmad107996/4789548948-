const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "البرفركس"

client.on('ready', () => {
console.log(`سجل الدخول ${client.user.tag}!`);
console.log('')
console.log('')
console.log('╔[═════════════════════════════════════════════════════════════════]╗')
console.log(`[Start] ${new Date()}`);
console.log('╚[═════════════════════════════════════════════════════════════════]╝')
console.log('')
console.log('╔[════════════════════════════════════]╗');
console.log(`تسجيل الدخول ل * [ " ${client.user.username} " ]`);
console.log('')
console.log('معلومات : ')
console.log('')
console.log(`عدد السيرفرات♤ [ " ${client.guilds.size} " ]`);
console.log(`المستخدمين♡ [ " ${client.users.size} " ]`);
console.log(`الرومات♧ [ " ${client.channels.size} " ]`);
console.log('╚[════════════════════════════════════]╝')
console.log('By Jackeo')
console.log('╔[════════════]╗')
console.log(' البوت اون لاين')
console.log('╚[════════════]╝')
console.log('V2 العربية arap ')
console.log('Dev Narox by Jackeo')


//النسخة المعربة من جاكيو 


});

//حط الاكواد تحت ↓↓↓



//هنا التوكن اذا ما تبغا لهيروكو شيلprocess.env.BOT_TOKEN وحط توكنك بدالها 

client.login(process.env.BOT_TOKEN);

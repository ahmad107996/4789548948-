client.on("message",async message => {
if(message.content === 'shop'){//الامر
let staff = message.guild.member(message.author).roles.find('name' ,"اسم رتبت البيع");
      if(!staff) return message.reply(**Only Sellers | :x:**)
var shopc = message.guild.channels.find("name","اسم الروم")
  if(!shopc) return message.reply("لا اجد الروم المخصص للبيع")
    let shop = '';
      let fillter = m => m.author.id === message.author.id



      await message.channel.send("اكتب الاشياء الذي سوف تبيعها").then(e => {
           message.channel.awaitMessages(fillter, { time: 60000, max: 1
})
     .then(co => {
       shop = co.first().content;
        co.first().delete();

let desc = '';

e.edit("اكتب الدفع عند مين؟").then(e => {
  message.channel.awaitMessages(fillter, { time: 60000, max: 1 })

     .then(co => {
       desc = co.first().content;
        co.first().delete();
e.edit("Done").then(e => {
  shopc.send(@everyone <$> @here
${message.guild.name}:tm: Shop :arrow_down:
======================
${shop}
=================
**الدفع عند:** **${desc}**

**تم الارسال بواسطة:** ${message.author}
@everyone </> @here)
  })
})
  })
})
  })







}
});
client.login(token here);

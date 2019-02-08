client.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find('name', '・text');

    const millis = new Date().getTime() - member.user.createdAt.getTime();
    const now = new Date();
    const createdAt = millis / 1000 / 60 / 60 / 24;





    const embed = new Discord.RichEmbed()

    .setColor("black")
    .setDescription(**تاريخ دخولك للدسكورد منذ ${createdAt.toFixed(0)} يوم**)
    .setAuthor(member.user.tag, member.user.avatarURL);
    channel.sendEmbed(embed);


});
client.login("token here");

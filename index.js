const Discord = require('discord.js');
const { Client, MessageEmbed, Collection, MessageAttachment  } = require('discord.js');
const bot = new Discord.Client()
const fetch = require("node-fetch")
const https = require("https")

bot.on('ready', () => {
    console.info(`mitko's discord bot ${bot.user.tag}!`);
});

bot.login("ODQ2ODM3NDMzMDA1ODk5ODM2.YK1U0Q.2OzhmMzJLxZWqzkONb6qyCSy7AI")

bot.on('message', msg => {

     if(msg.content.startsWith("^info")){

        let servericon = msg.guild.iconURL;
        let serverembed = new MessageEmbed()
        .setTitle("❓ Информация за сървъра ❓")
        .setColor("#ff0000")
        .setThumbnail(servericon)
        .addField("Име:", msg.guild.name)
        .addField("🆔 Сървър ID:", msg.guild.id)
        .addField("🔒 Собственик:", `<@223783309874823170>`)
        .addField("🕘 Създаден на:", msg.guild.createdAt)
        .addField("🔙 Вие влязохте на:", msg.member.joinedAt)
        .addField("👥 Общо хора:", msg.guild.memberCount)
        .addField("🌍 Сървър регион:", msg.guild.region)
        .addField("🔒 ip", `<195.201.39.167:30120>`)
        .setTimestamp()
        .setFooter(msg.author.tag, msg.author.avatarURL());

        msg.channel.send(serverembed);

    }else if(msg.content.startsWith("^site")){

        let servericon = msg.guild.iconURL;
        let serverembed = new MessageEmbed()
        .setTitle("⬆️ВАШИЯ ЛИНК АКО ИМАТЕ САЙТ! ⬆️")
        .setColor("#ff0000")
        .setThumbnail(servericon)
        .setTimestamp()
        .setFooter(msg.author.tag, msg.author.avatarURL());

        msg.channel.send(serverembed);

    }else if(msg.content.startsWith("^help")){

        let servericon = msg.guild.iconURL;
        let serverembed = new MessageEmbed()
        .addField("⬆️ ^info Тази команда дава инфо за сървара ⬆️")
        .addField("⬆️ ^ip Тази команда казва ip-то на сървара ⬆️")
        .addField("⬆️ ^site Тази команда казва сайта на сървара ⬆️")
        .setColor("#ff0000")
        .setFooter(msg.author.tag, msg.author.avatarURL());

        msg.channel.send(serverembed);

    }else if(msg.content.startsWith("^ip")){

        let servericon = msg.guild.iconURL;
        let serverembed = new MessageEmbed()
        .setTitle("⬆️195.201.39.167:30120⬆️")
        .setColor("#ff0000")
        .setThumbnail(servericon)
        .setTimestamp()
        .setFooter(msg.author.tag, msg.author.avatarURL());

        msg.channel.send(serverembed);

    }
    


})

//БОТ НАПРАВЕН ОТ mitko#7777 
//БОТ НАПРАВЕН ОТ mitko#7777 
//БОТ НАПРАВЕН ОТ mitko#7777 
//БОТ НАПРАВЕН ОТ mitko#7777 
//БОТ НАПРАВЕН ОТ mitko#7777 
//БОТ НАПРАВЕН ОТ mitko#7777 
//БОТ НАПРАВЕН ОТ mitko#7777 
//БОТ НАПРАВЕН ОТ mitko#7777 
//БОТ НАПРАВЕН ОТ mitko#7777 
//БОТ НАПРАВЕН ОТ mitko#7777 
//БОТ НАПРАВЕН ОТ mitko#7777 
//БОТ НАПРАВЕН ОТ mitko#7777 
//БОТ НАПРАВЕН ОТ mitko#7777 
//БОТ НАПРАВЕН ОТ mitko#7777 
//БОТ НАПРАВЕН ОТ mitko#7777 
//БОТ НАПРАВЕН ОТ mitko#7777 
//БОТ НАПРАВЕН ОТ mitko#7777 
//БОТ НАПРАВЕН ОТ mitko#7777 
//БОТ НАПРАВЕН ОТ mitko#7777 
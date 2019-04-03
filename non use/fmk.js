const discord = require(`discord.js`);
exports.run = async (client, message, args, ops) => {
var membed = new discord.RichEmbed()
        var kembed = new discord.RichEmbed()
        var fembed = new discord.RichEmbed()

        membed.setDescription(`**${args[0]} has been chosen by <@${message.author.id}>**`)
        membed.setColor('RANDOM')
        membed.addField(`You choosed:`, `MARRY :ring:`)
        membed.setFooter('Fuck, Marry, Kill!', message.author.displayAvatarURL);

        fembed.setDescription(`**${args[0]} has been chosen by <@${message.author.id}>**`)
        fembed.setColor('RANDOM')
        fembed.addField(`You choosed:`, `FUCK :sweat_drops: :eggplant:`)
        fembed.setFooter('Fuck, Marry, Kill!', message.author.displayAvatarURL);

        kembed.setDescription(`**${args[0]} has been chosen by <@${message.author.id}>**`)
        kembed.setColor('RANDOM')
        kembed.addField(`You choosed:`, `KILL :knife: :bomb: :person_frowning: :gun:`)
        kembed.setFooter('Fuck, Marry, Kill!', message.author.displayAvatarURL);

        if (!message.mentions.users.first()) return message.channel.send(`<@${message.author.id}>, please mention a user you wanna choose!`).then(message => {
            message.delete(10000)
        })

        number = 3;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random) {
            case 1: message.channel.sendEmbed(kembed); break;
            case 2: message.channel.sendEmbed(membed); break;
            case 3: message.channel.sendEmbed(fembed); break;
        }
    }
    exports.settings = {
        name: `fmk`,
        aliases: [`fuckmarrykill`, `fmk`]
    }
const discord = require(`discord.js`);
exports.run = async (client, message, args, ops) => {
    let user = message.mentions.users.first();
    //if (!user) let user = message.author;
    const embed = new discord.RichEmbed()
    embed.setColor(`BLUE`)
    embed.setTitle(`${user}'s Profile!`)
    
}

exports.settings = {
    name: `userinfo`,
    aliases: [`user`, `info`, `profile`, `information`, `usercard`, `card`]
}
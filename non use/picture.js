const discord = require(`discord.js`);
exports.run = async (client, message, args, ops) => {
    var randomm = Math.floor (Math.random() * (1084 - 1 + 1)) + 1;
        let args7 = message.content.split(" ").slice(1);
        const embed = new discord.RichEmbed()
        embed.setColor(`BLUE`)
        embed.setImage(`https://picsum.photos/500/500/?image=${randomm}`)
        message.channel.send(embed)
}
exports.settings = {
    name: `picture`,
    aliases: [`randomimage`, `randompicture`, `image`]
}
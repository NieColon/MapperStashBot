const discord = require(`discord.js`);
const jimp = require(`jimp`)
exports.run = async (client, message, args, ops) => {
    const aLink = `https://www.minecraftskinstealer.com/achievement/a.php?i=16&h=Achievement+get%21&t=`;
        const margs = message.content.split(" ").slice(1);
        if(margs.length > 22) return message.channel.send(`Please make it 22 characters or lower!`)
        const mmargs = margs.join("+");
        const mmmargs = (`https://www.minecraftskinstealer.com/achievement/a.php?i=16&h=Achievement+get%21&t=` + mmargs.toUpperCase())
        let embed = new discord.RichEmbed()
        embed.setAuthor (`Congratulations!`)
        embed.setImage(mmmargs)
        message.channel.send(embed)
}
exports.settings = {
    name: `achievement`,
    aliases: [`achievement`, `achieve`, `congrats`]
}

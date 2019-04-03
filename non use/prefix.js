const db = require(`quick.db`);
const discord = require(`discord.js`);
exports.run = async (client, message, args, ops) => {
    if(!args) message.channel.send(`Please enter a valid prefix!`);
    db.set(`prefix_${message.author.id}`, args.join(` `)).then(i => {
        message.channel.send(`Prefix has been set to **${i}**`);
    });
}
exports.settings = {
    name: `prefix`,
    aliases: [`setprefix`, `prefix`, `prefixset`, `newprefix`]
}
        
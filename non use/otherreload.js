const discord = require(`discord.js`);
exports.run = async (client, message, args, ops) => {
    const bargs = message.content.split(" ").slice(1)
    try {
        delete require.cache[require.resolve(`./commands/${f}`)];
     } catch (e) {
         console.log(e)
         return message.channel.send(`Unable to reload!`)
     }  
     message.channel.send(`Command has been reloaded!`);
     console.log(`I'm done!`)
}
exports.settings = {
    name: `otherreload`,
    aliases: [`otherreload`, `othereload`]
}
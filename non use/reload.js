const discord = require(`discord.js`)
var client = new discord.Client()
exports.run = async(client, message, args, ops) => {
    client.destroy();
    client.login(`NDY0MjMzMjM3MzY0MDgwNjUx.Dh7-Zw.V0jMaI5w4O8ODw4OniKDqHkD5C4`);
    message.channel.send(`Reloaded!`);
}
exports.settings = {
    name: `reload`,
    aliases: [`reload`, `restart`, `reboot`]
}
const discord = require(`discord.js`);
exports.run = async (client, message, args, ops) => {
message.channel.send(args)
}
exports.settings = {
    name: `say`,
    aliases: [`say`, `said`, `talk`, `speak`]
}
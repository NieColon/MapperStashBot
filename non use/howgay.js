const discord = require(`discord.js`);
const Jimp = require(`jimp`)
exports.run = async (client, message, args, ops) => {
    const user = message.mentions.users.first()
    const percentage = Math.random() * (100 - 0) + 0;
    if (percentage == 0) {
        message.channel.send()
    }

}
exports.settings = {
    name: `howgay`,
    aliases: [`howgay`, `howmuchgay`]
}
var Attachment = (message.attachments).array();
const discord = require(`discord.js`);
exports.run = async (client, message, args, ops) => {
    var attachment = (message.attachments).array();
    message.channel.send(attachment[0].url)
}
exports.settings = {
    name: `attachment`,
    aliases: [`attach`]
}
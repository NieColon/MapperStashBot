const discord = require(`discord.js`)
var client = new discord.Client()
exports.run = async(client, message, args, ops) => {
    const channel = message.channel.id;
    const collector = new discord.MessageCollector(channel, m =>
        m.author.id === "234692528761208832" ||
        m.author.id === "213777276775563264"
   , { max: 20, maxMatches: 20 });
}
exports.settings = {
    name: `staffreport`,
    aliases: [`staff`, `staffr`, `reporter`]
}
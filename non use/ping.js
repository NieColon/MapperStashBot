exports.run = (client, message, args) => message.channel.send(`Pong!`);

exports.settings = {
    name: `ping`,
    aliases: [`ping`, `bing`],
    category: `hidden`
}

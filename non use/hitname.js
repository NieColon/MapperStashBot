const discord = require(`discord.js`);
exports.run = async (client, message, args, ops) => {
    let user1 = message.mentions.users.first()
    let user2 = message.mentions.users.last()
    number = 2;
    var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    if (!user1) return message.channel.send(`Pleae mention two users next time!`)
    if (!user2) return message.channel.send(`Pleae mention two users next time!`)
    switch (random) {
        case 1: message.channel.send(`${user1.toString()} has been hit!`); break;
        case 2: message.channel.send(`${user2.toString()} has been hit!`); break;
    }
}
exports.settings = {
    name: `hitname`,
    aliases: [`hit`,`bet`,`dare`]
}
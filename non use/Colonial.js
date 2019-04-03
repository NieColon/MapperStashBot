const discord = require('discord.js');
exports.run = (client, message, args) => message.channel.send('Colonial');
exports.settings = {
name: 'Colonial',
aliases: ['Colonial']
}
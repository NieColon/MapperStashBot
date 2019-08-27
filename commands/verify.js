const discord = require(`discord.js`);
exports.run = async (client, message, args, ops) => {
    if(message.member.roles.find(r => r.name == "Moderators")) {
        let member = message.mentions.members.first();
        let role = message.guild.roles.find(r => r.name === "Peasant");
        member.addRole(role).catch(console.error);
    } else {
        return;
    }

}
exports.settings = {
    name: `verify`,
    aliases: [`verification`]
}

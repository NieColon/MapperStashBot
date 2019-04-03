const discord = require(`discord.js`);
exports.run = async (client, message, args, ops) => {
    try {
        const bargs = message.content.split(" ").slice(1)
        eval(bargs)
        message.channel.send("Code, I choose you!" + eval(bargs));
    } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${(err)}\n\`\`\``);
    }
}
exports.settings = {
    name: "eval",
    aliases: ["eval"]
}
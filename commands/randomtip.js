const discord = require(`discord.js`);
const fs = require(`fs`);
var client = new discord.Client()
exports.run = async (client, message, args, ops) => {
    message.channel.send(`Please give me your random mapping tip.`);
    const filter = m => m.author.equals(message.author);
    message.channel.awaitMessages(filter, {
            max: 1,
            time: 1000000,
            errors: ['time']
        })
        .then(collected => {
            const sayMessage1 = collected.first().content;
            message.channel.send(`Thank you for submitting a Tip.\nYour Tip is now under review and if accepted, it wil show up on the site within some time.`);
                    const user = client.users.get(`532724702838390798`);
                    fs.readFile(`./tip.html`, function(err, data) {
                        const args2 = '<div class="f">sayMessage1</div>'
                        var args3 = args2.replace(`sayMessage1`, `${sayMessage1}`)
                        fs.appendFile('./tip.html', args3, function(err) {
                            if (err) console.log(err);
                            console.log('Updated!');
                        });
                    })
                    const dataquote = "```"
                    fs.readFile(`./tip.html`, function(err, data) {
                    user.send(`Hi <@532724702838390798>, you have a new tip to review! \n**Tip**: ${sayMessage1}`);
                    })
        })
}
exports.settings = {
    name: `randomtip`,
    aliases: [`tip`, `addtip`, `tipadder`, `tipadding`, `tipadd`, `randomadd`, `addrandomtip`],
    category: `Resource Submitters`,
    info: `A basic command to add tips to the MapperStash Website`,
    usage: `m!randomtip`
}
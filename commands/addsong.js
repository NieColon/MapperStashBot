const discord = require(`discord.js`);
const fs = require(`fs`);
var client = new discord.Client()
exports.run = async (client, message, args, ops) => {
    message.channel.send(`What is the name of the song you are trying to submit?`);
    const filter = m => m.author.equals(message.author);
    message.channel.awaitMessages(filter, {
            max: 1,
            time: 100000,
            errors: ['time']
        })
        .then(collected => {
            const sayMessage1 = collected.first().content;
            message.channel.send(`Please give the author of the song.`);
            const filter2 = m => m.author.equals(message.author);
            message.channel.awaitMessages(filter2, {
                    max: 1,
                    time: 1000000,
                    errors: ['time']
                })
                .then(collected => {
                    const sayMessage2 = collected.first(2).pop().content;
                    message.channel.send(`Please give a **YouTube** link for the given song.`);
                    const filter3 = m => m.author.equals(message.author);
                    message.channel.awaitMessages(filter3, {
                        max: 1,
                        time: 1000000,
                        errors: ['time']
                    })
                    .then(collected => {
                        const sayMessage3 = collected.first(3).pop().content;
                        const user = client.users.get(`532724702838390798`);
                    fs.readFile(`./song.html`, function(err, data) {
                        const args2 = '<div class="column all"> <div class="content"> <a href="sayMessage3"><img src="Link.png" alt="Good" style="width:100%"></a> <h4>sayMessage1</h4> <p>sayMessage2</p> </div> </div>'
                        var args3 = args2.replace(`sayMessage1`, `${sayMessage1}`)
                        var args4 = args3.replace(/sayMessage2/g, `${sayMessage2}`)
                        var args5 = args4.replace(/sayMessage3/g, `${sayMessage3}`)
                        fs.writeFile('./song.html', args5, function(err) {
                            if (err) console.log(err);
                            console.log('Updated!');
                        });
                        message.channel.send(`Thank you for submitting a Song.\nYour Song requested is now under review and if accepted, it wil show up on the site within some time.`);
                    })
                    fs.readFile(`./song.html`, function(err, data) {
                        const dataquote = "```"
                        user.send(`Hi <@532724702838390798>, you have a new song to review! \n**Song Name**: ${sayMessage1}\nSong Link: ${sayMessage2}`);
                        })
                    })

                })
        })
}
exports.settings = {
    name: `addsong`,
    aliases: [`songadder`, `songadd`, `addingsong`],
    category: `Resource Submitters`,
    info: `A basic command to add songs to the MapperStash Website`,
    usage: `m!addSong`
}
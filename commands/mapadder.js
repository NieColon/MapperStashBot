const discord = require(`discord.js`);
const fs = require(`fs`);
var client = new discord.Client()
exports.run = async (client, message, args, ops) => {
    message.channel.send(`What is the name of the map you are submitting?\n(ex: "Victoria II Coloured Base")`);
    const filter = m => m.author.equals(message.author);
    message.channel.awaitMessages(filter, {
            max: 1,
            time: 100000,
            errors: ['time']
        })
        .then(collected => {
            const sayMessage1 = collected.first().content;
            message.channel.send(`Please give the discord link of the Map.\n(Must be a direct Discord Link otherwise you will be ignored.)\n(best way to do this is to paste the image in another channel and copy the link)`);
            const filter2 = m => m.author.equals(message.author);
            message.channel.awaitMessages(filter2, {
                    max: 1,
                    time: 10000000,
                    errors: ['time']
                })
                .then(collected => {
                    const sayMessage2 = collected.first(2).pop().content;
                    message.channel.send(`Please list all tags for this map. Tags can be changed based on mods discrimination. \nValid Tags: **[**modern, historical, topography, world, na, sa, eu, aS, af, au, provinces, night**]**`);
                    const filter3 = m => m.author.equals(message.author);
                    message.channel.awaitMessages(filter3, {
                        max: 1,
                        time: 10000000,
                        errors: ['time']
                    }).then(collected => {
                      const sayMessage3 = collected.first(3).pop().content;
                        message.channel.send(`Thank you for submitting a Map.\nYour Map is now under review and if accepted, it wil show up on the site within some time.`);
                        const user = client.users.get(`532724702838390798`);
                            const args2 = '<div class="hoverImg sayMessage3"> <a href="sayMessage2"><img class="imgSrc" src="sayMessage2" alt="image" style="background: white;"></a> <div class="img-details fadeIn-right"> <h3>sayMessage1</h3> <p>UPLOADER_USERNAME</p> </div> </div> <!--New Map-->'
                            var args3 = args2.replace(/sayMessage1/g, `${sayMessage1}`);
                            var args4 = args3.replace(/sayMessage2/g, `${sayMessage2}`);
                            var args5 = args4.replace(/sayMessage3/g, `${sayMessage3}`);
                            var args6 = args5.replace("UPLOADER_USERNAME", `${message.author.username}`);
                            const dataquote = "```";
                            user.send(`Hi <@532724702838390798>, you have a new map to review! **Code**:${dataquote}html\n${args6}${dataquote}`);

                    })

                })
        })
}
exports.settings = {
    name: `mapadder`,
    aliases: [`addmap`, `addmaps`, `mapadd`, `mapadding`],
    category: `Resource Submitters`,
    info: `A basic command to add Maps to the MapperStash Website`,
    usage: `m!mapadder`
}

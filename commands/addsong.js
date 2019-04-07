const discord = require(`discord.js`);
const fs = require(`fs`);
var client = new discord.Client()
exports.run = async (client, message, args, ops) => {
    message.channel.send(`What is the name of the song you are trying to add?`)
    const filter = m => m.author.equals(message.author);
    message.channel.awaitMessages(filter, {
            max: 1,
            time: 60000000,
            errors: ['time']
        })
        .then(collected => {
            const sayMessage1 = collected.first().content;
            message.channel.send(`What is the name of the Channel that produced this song?`);
            const filter2 = m => m.author.equals(message.author);
            message.channel.awaitMessages(filter2, {
                    max: 1,
                    time: 60000000,
                    errors: ['time']
                })
                .then(collected => {
                    const sayMessage2 = collected.first(2).pop().content
                    console.log(sayMessage2);
                    message.channel.send(`Please give me the YouTube link of the song.`);
                    const filter3 = m => m.author.equals(message.author);
                    message.channel.awaitMessages(filter3, {
                            max: 1,
                            time: 60000000,
                            errors: ['time']
                        })
                        .then(collected => {
                            const sayMessage3 = collected.first(3).pop().content;
                            console.log(sayMessage3);
                            message.channel.send(`How long is this song?`)
                            const filter4 = m => m.author.equals(message.author);
                            message.channel.awaitMessages(filter4, {
                                    max: 1,
                                    time: 600000000,
                                    errors: ['time']
                                })
                                .then(collected => {
                                    const sayMessage4 = collected.first(4).pop().content;
                                    console.log(sayMessage4);
                                    message.channel.send(`Is this song copyright free? (Yes/No)\n**Please respond with only "Yes" or "No".**`);
                                    const filter5 = m => m.author.equals(message.author);
                                    message.channel.awaitMessages(filter5, {
                                            max: 1,
                                            time: 60000000,
                                            errors: ['time']
                                        })
                                        .then(collected => {
                                            message.channel.send()
                                            const sayMessage5 = collected.first(5).pop().content;
                                            console.log(sayMessage5);
                                            if (sayMessage5 == "Yes") {
                                                message.channel.send(`Is this song overused? (Yes/No)\n**Please respond with only "Yes" or "No".**`);
                                                const filter6 = m => m.author.equals(message.author);
                                                message.channel.awaitMessages(filter6, {
                                                    max: 1,
                                                    time: 60000000,
                                                    errors: ['time']
                                                }).then(collected => {
                                                    const sayMessage6 = collected.first(6).pop().content;
                                                    const filter7 = m => m.author.equals(message.author);
                                                    message.channel.send(`What is the category of this song? \nWhat you put here can be anything as long as it fits the song.\nYou can add more than category if you separate it with commas. Try to avoid using more than two categories.\n \nExample: Dark, Dramatic, Intense`);
                                                    message.channel.awaitMessages(filter7, {
                                                        max: 1,
                                                        time: 60000000,
                                                        errors: ['time']
                                                    }).then(collected => {
                                                        const sayMessage7 = collected.first(7).pop().content;
                                                        console.log(sayMessage7)
                                                        fs.readFile(`./song.json`, function(err, data) {
                                                            //sayMessage1= Song Name
                                                            //sayMessage2= Song Author
                                                            //sayMessage3= Song Link
                                                            //sayMessage4= Song Length
                                                            //sayMessage5= Song Copyright
                                                            //saymessage6= Song Usage
                                                            const args2 = '<tr> <td><a href="sayMessage3">sayMessage1</a></td> <td>sayMessage2</td> <td>sayMessage4</td> <td>Copyright Free</td> <td>sayMessage7</td> <td>sayMessage6</td> </tr>'
                                                            var args3 = args2.replace(`sayMessage1`, `${sayMessage1}`)
                                                            var args4 = args3.replace(/sayMessage2/g, `${sayMessage2}`)
                                                            var args5 = args4.replace(/sayMessage3/g, `${sayMessage3}`)
                                                            var args6 = args5.replace(/sayMessage4/g, `${sayMessage4}`)
                                                            var args7 = args6.replace(/sayMessage5/g, `${sayMessage5}`)
                                                            var args8 = args7.replace(/sayMessage6/g, `${sayMessage6}`)
                                                            var args9 = args8.replace(/sayMessage7/g, `${sayMessage7}`)
                                                            fs.appendFile('./song.html', args9, function(err) {
                                                                if (err) console.log(err);
                                                                console.log('Updated!');
                                                            });
                                                            message.channel.send(`Thank you for submitting a Song.\nYour Song requested is now under review and if accepted, it wil show up on the site within some time.`);
                                                        })
                                                        fs.readFile(`./song.json`, function(err, data) {
                                                            const dataquote = "```"
                                                            const user = client.users.get(`532724702838390798`);
                                                            user.send(`Hi <@532724702838390798>, you have a new song to review! \n**Song Name**: ${sayMessage1}\nSong Link: ${sayMessage3}`);
                                                        })
                                                    })
                                                })
                                            } else if (sayMessage5 == "No") {
                                                message.channel.send(`Is this song overused? (Yes/No)\n**Please respond with only "Yes" or "No".**`);
                                                const filter6 = m => m.author.equals(message.author);
                                                message.channel.awaitMessages(filter6, {
                                                    max: 1,
                                                    time: 60000000,
                                                    errors: ['time']
                                                }).then(collected => {
                                                    const sayMessage6 = collected.first(6).pop().content;
                                                    message.channel.send(`What is the category of this song? \nWhat you put here can be anything as long as it fits the song.\nYou can add more than category if you separate it with commas. Try to avoid using more than two categories.\n \nExample: Dark, Dramatic, Intense`);
                                                    const filter7 = m => m.author.equals(message.author);
                                                    message.channel.awaitMessages(filter7, {
                                                        max: 1,
                                                        time: 60000000,
                                                        errors: ['time']
                                                    }).then(collected => {
                                                        const sayMessage7 = collected.first(7).pop().content;
                                                        fs.readFile(`./song.html`, function(err, data) {
                                                            //sayMessage1= Song Name
                                                            //sayMessage2= Song Author
                                                            //sayMessage3= Song Link
                                                            //sayMessage4= Song Length
                                                            //sayMessage5= Song Copyright
                                                            //saymessage6= Song Usage
                                                            const args2 = '<tr> <td><a href="sayMessage3">sayMessage1</a></td> <td>sayMessage2</td> <td>sayMessage4</td> <td>Copyright Free</td> <td>sayMessage7</td> <td>sayMessage6</td> </tr>'
                                                            var args3 = args2.replace(`sayMessage1`, `${sayMessage1}`)
                                                            var args4 = args3.replace(/sayMessage2/g, `${sayMessage2}`)
                                                            var args5 = args4.replace(/sayMessage3/g, `${sayMessage3}`)
                                                            var args6 = args5.replace(/sayMessage4/g, `${sayMessage4}`)
                                                            var args7 = args6.replace(/sayMessage5/g, `${sayMessage5}`)
                                                            var args8 = args7.replace(/sayMessage6/g, `${sayMessage6}`)
                                                            var args9 = args8.replace(/sayMessage7/g, `${sayMessage7}`)
                                                            fs.appendFile('./song.json', args9, function(err) {
                                                                if (err) console.log(err);
                                                                console.log('Updated!');
                                                            });
                                                            message.channel.send(`Thank you for submitting a Song.\nYour Song requested is now under review and if accepted, it wil show up on the site within some time.`);
                                                        })
                                                        fs.readFile(`./song.json`, function(err, data) {
                                                            const dataquote = "```"
                                                            const user = client.users.get(`532724702838390798`);
                                                            user.send(`Hi <@532724702838390798>, you have a new song to review! \n**Song Name**: ${sayMessage1}\nSong Link: ${sayMessage3}`);
                                                        })
                                                    })
                                                })
                                            } else {
                                                return message.channel.send("Incorrect format. Please repeat the whole command process again for not listening.")
                                            }
                                        })
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

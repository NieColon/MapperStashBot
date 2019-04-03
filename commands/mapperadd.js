const discord = require(`discord.js`);
const fs = require(`fs`);
var client = new discord.Client()
exports.run = async (client, message, args, ops) => {
    message.channel.send(`What is the name of the channel you are trying to add?`)
    const filter = m => m.author.equals(message.author);
    message.channel.awaitMessages(filter, {
            max: 1,
            time: 60000,
            errors: ['time']
        })
        .then(collected => {
            const sayMessage1 = collected.first().content;
            message.channel.send(`What is the style of the Mapper you are requesting? (**Edgy**, **Clasical**, **Countryballs**)`);
            const filter2 = m => m.author.equals(message.author);
            message.channel.awaitMessages(filter2, {
                    max: 1,
                    time: 60000,
                    errors: ['time']
                })
                .then(collected => {
                    const sayMessage2 = collected.first(2).pop().content;
                    if (sayMessage2 == `Classical`) {
                        console.log(sayMessage2);
                        message.channel.send(`Please give me the Mapper's Logo (In a Discord Link). If you do not send it accordingly your request will be ignored.`);
                        const filter3 = m => m.author.equals(message.author);
                        message.channel.awaitMessages(filter3, {
                                max: 1,
                                time: 60000,
                                errors: ['time']
                            })
                            .then(collected => {
                                const sayMessage3 = collected.first(3).pop().content;
                                console.log(sayMessage3);
                                const filter4 = m => m.author.equals(message.author);
                                message.channel.awaitMessages(filter4, {
                                        max: 1,
                                        time: 60000,
                                        errors: ['time']
                                    })
                                    .then(collected => {
                                        message.channel.send(`What is the Mapper's most popular series? (Please use Acronyms such as AHOE and AFOW)`)
                                        const sayMessage4 = collected.first(4).pop().content;
                                        console.log(sayMessage4);
                                        const filter5 = m => m.author.equals(message.author);
                                        message.channel.awaitMessages(filter5, {
                                                max: 1,
                                                time: 60000,
                                                errors: ['time']
                                            })
                                            .then(collected => {
                                                const sayMessage5 = collected.first(5).pop().content;
                                                console.log(sayMessage5);

                                            })
                                    })
                            })
                    } else if (sayMessage2 == `Countryballs`) {
                        console.log(sayMessage2);
                        message.channel.send(`Please give me the Mapper's Logo (In a Discord Link). If you do not send it accordingly your request will be ignored.`);
                        const filter3 = m => m.author.equals(message.author);
                        message.channel.awaitMessages(filter3, {
                                max: 1,
                                time: 60000,
                                errors: ['time']
                            })
                            .then(collected => {
                                message.channel.send(`What is the Mapper's most popular series? (Please use Acronyms such as AHOE and AFOW)`)
                                const sayMessage4 = collected.first(4).pop().content;
                                console.log(sayMessage4);
                                const filter4 = m => m.author.equals(message.author);
                                message.channel.awaitMessages(filter4, {
                                        max: 1,
                                        time: 60000,
                                        errors: ['time']
                                    })
                                    .then(collected => {
                                        const sayMessage4 = collected.first(4).pop().content;
                                        console.log(sayMessage4);
                                        const filter5 = m => m.author.equals(message.author);
                                        message.channel.awaitMessages(filter5, {
                                                max: 1,
                                                time: 60000,
                                                errors: ['time']
                                            })
                                            .then(collected => {
                                                const sayMessage5 = collected.first(5).pop().content;
                                                console.log(sayMessage5);

                                            })
                                    })
                            })
                    } else if (sayMessage2 == `Edgy`) {
                        console.log(sayMessage2);
                        message.channel.send(`Please give me the Mapper's Logo (In a Discord Link). If you do not send it accordingly your request will be ignored.`);
                        const filter3 = m => m.author.equals(message.author);
                        message.channel.awaitMessages(filter3, {
                                max: 1,
                                time: 60000,
                                errors: ['time']
                            })
                            .then(collected => {
                                const sayMessage3 = collected.first(3).pop().content;
                                console.log(sayMessage3);
                                message.channel.send(`What is the Mapper's most popular series? (Please use Acronyms such as AHOE and AFOW)`)
                                const filter4 = m => m.author.equals(message.author);
                                message.channel.awaitMessages(filter4, {
                                        max: 1,
                                        time: 60000,
                                        errors: ['time']
                                    })
                                    .then(collected => {
                                        const sayMessage4 = collected.first(4).pop().content;
                                        console.log(sayMessage4);
                                        message.channel.send(`Please give me the url of the Mapper. (YOUTUBE URL)`);
                                        const filter5 = m => m.author.equals(message.author);
                                        message.channel.awaitMessages(filter5, {
                                                max: 1,
                                                time: 60000,
                                                errors: ['time']
                                            })
                                            .then(collected => {
                                                const sayMessage5 = collected.first(5).pop().content;
                                                console.log(sayMessage5);
                                                message.channel.send(`Thank you for giving me the details of the Mapper. We are now reviewing the requested Mapper and if accepted, your request will be on the page shortly.`);
                                                const user = client.users.get(`532724702838390798`);
                                                user.send('Hi <@532724702838390798>, you have a new mapper to review!')
                                                //sayMessage1= MapperName
                                                //sayMessage2= Mapper Style
                                                //sayMessage3= Image Source
                                                //sayMessage4= Series
                                                //sayMessage5= YT Link
                                                fs.readFile(`./update.html`, function(err, data) {
                                                    const args2 = '<div class="column sayMessage2"><div class="content"><a href="sayMessage5"><img src="sayMessage3" alt="MADLAD!" style="width:100%"></a><h4>sayMessage1</h4><p>sayMessage4</p></div></div>'
                                                    var args3 = args2.replace(`sayMessage1`, `${sayMessage1}`)
                                                    var args4 = args3.replace(`sayMessage2`, `${sayMessage2}`)
                                                    var args5 = args4.replace(`sayMessage3`, `${sayMessage3}`)
                                                    var args6 = args5.replace(`sayMessage4`, `${sayMessage4}`)
                                                    var args7 = args6.replace(`sayMessage5`, `${sayMessage5}`)
                                                    fs.appendFile('./update.html', args7, function(err) {
                                                        if (err) console.log(err);
                                                        console.log('Updated!');
                                                    });
                                                })
                                            })
                                    })
                            })
                    } else {
                        return message.channel.send(`Not the correct format! Please restart the whole adding process.`)
                    }
                })
        })
}
exports.settings = {
    name: `mapperadd`,
    aliases: [`mapperadd`, `addmapper`, `mapperadder`],
    category: `Resource Submitters`,
    info: `A basic command to add Mappers to the MapperStash Mapper List`,
    usage: `m!mapperadd`
}
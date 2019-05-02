const discord = require(`discord.js`);
const fs = require(`fs`);
var client = new discord.Client()
exports.run = async (client, message, args, ops) => {
    message.channel.send(`What is the name of the Mapper you are submitting? [1/5]`);
    const filter = m => m.author.equals(message.author);
    message.channel.awaitMessages(filter, {
            max: 1,
            time: 100000,
            errors: ['time']
        })
        .then(collected => {
            const sayMessage1 = collected.first().content;
            message.channel.send(`What is the acronym of the ${sayMessage1}'s main series? [2/5]`);
            const filter2 = m => m.author.equals(message.author);
            message.channel.awaitMessages(filter2, {
                    max: 1,
                    time: 10000000,
                    errors: ['time']
                })
                .then(collected => {
                    const sayMessage2 = collected.first(2).pop().content;
                    message.channel.send('Please select all of the Mappers tags. These tags will be used to sort the mapper. Please separate the tags with just a space inbetween them. You can have as many as you wish. The following tags are: ```active, inactive, quit, historical, fictional, modern, countryballs, classical, edgy``` [3/5]');
                    const filter3 = m => m.author.equals(message.author);
                    message.channel.awaitMessages(filter2, {
                            max: 1,
                            time: 10000000,
                            errors: ['time']
                        })
                        .then(collected => {
                            const sayMessage3 = collected.first(3).pop().content;
                            message.channel.send('Please give me a direct link to the Mappers profile picture. (Recommended to paste it in a different channel and copy its link. [4/5]');
                            const filter4 = m => m.author.equals(message.author);
                            message.channel.awaitMessages(filter2, {
                                    max: 1,
                                    time: 10000000,
                                    errors: ['time']
                                })
                                .then(collected => {
                                    const sayMessage4 = collected.first(4).pop().content;
                                    message.channel.send('Please send a youtube link to the Mappers channel. [5/5]');
                                    const filter5 = m => m.author.equals(message.author);
                                    message.channel.awaitMessages(filter2, {
                                        max: 1,
                                        time: 10000000,
                                        errors: ['time']
                                    }).then(collected => {
                                        const sayMessage5 = collected.first(5).pop().content;
                                        message.channel.send('What is the status of the Mapper? ```inactive, active, quit``` **LOWERCASE**');
                                    const filter5 = m => m.author.equals(message.author);
                                    message.channel.awaitMessages(filter2, {
                                        max: 1,
                                        time: 10000000,
                                        errors: ['time']
                                    }).then(collected => {
                                        const sayMessage6 = collected.first(6).pop().content;
                                        message.channel.send(`Thank you for submitting a Map.\nYour Map is now under review and if accepted, it wil show up on the site within some time.`);
                                        const user = client.users.get(`532724702838390798`);
                                        if(sayMessage6 == "inactive") {
                                            let newSayMessage6 = "ydot";
                                            const args2 = '<div class="color-shape sayMessage3"> <div class="content"> <a href="sayMessage5"><img src="sayMessage4" alt="MADLAD!" style="width:100%"></a> <h4>sayMessage1</h4> <p>sayMessage2</p> <span class="ydot" title="This mapper is inactive."></span> </div> </div>'
                                        var args3 = args2.replace(`sayMessage1`, `${sayMessage1}`);
                                        var args4 = args3.replace(/sayMessage2/g, `${sayMessage2}`);
                                        var args5 = args4.replace(/sayMessage3/g, `${sayMessage3}`);
                                        var args6 = args5.replace(/sayMessage4/g, `${sayMessage4}`);
                                        var args7 = args6.replace(/sayMessage5/g, `${sayMessage5}`);
                                        var args8 = args7.replace(/newSayMessage6/g, `${sayMessage6}`);
                                        const dataquote = "```";
                                        user.send(`Hi <@532724702838390798>, you have a new map to review! \nName: ${sayMessage1}\n\n**Code**:${dataquote}html\n${args7}${dataquote}`);
                                        }
                                        if(sayMessage6 == "active") {
                                            let newSayMessage6 = "adot";
                                            const args2 = '<div class="color-shape sayMessage3"> <div class="content"> <a href="sayMessage5"><img src="sayMessage4" alt="MADLAD!" style="width:100%"></a> <h4>sayMessage1</h4> <p>sayMessage2</p> <span class="adot" title="This mapper is active."></span> </div> </div>'
                                        var args3 = args2.replace(`sayMessage1`, `${sayMessage1}`);
                                        var args4 = args3.replace(/sayMessage2/g, `${sayMessage2}`);
                                        var args5 = args4.replace(/sayMessage3/g, `${sayMessage3}`);
                                        var args6 = args5.replace(/sayMessage4/g, `${sayMessage4}`);
                                        var args7 = args6.replace(/sayMessage5/g, `${sayMessage5}`);
                                        const dataquote = "```";
                                        user.send(`Hi <@532724702838390798>, you have a new map to review! \nName: ${sayMessage1}\n\n**Code**:${dataquote}html\n${args7}${dataquote}`);
                                        }
                                        if(sayMessage6 == "quit") {
                                            let newSayMessage6 = "reddot";
                                            const args2 = '<div class="color-shape sayMessage3"> <div class="content"> <a href="sayMessage5"><img src="sayMessage4" alt="MADLAD!" style="width:100%"></a> <h4>sayMessage1</h4> <p>sayMessage2</p> <span class="reddot" title="This mapper is no longer making videos."></span> </div> </div>'
                                        var args3 = args2.replace(`sayMessage1`, `${sayMessage1}`);
                                        var args4 = args3.replace(/sayMessage2/g, `${sayMessage2}`);
                                        var args5 = args4.replace(/sayMessage3/g, `${sayMessage3}`);
                                        var args6 = args5.replace(/sayMessage4/g, `${sayMessage4}`);
                                        var args7 = args6.replace(/sayMessage5/g, `${sayMessage5}`);
                                        const dataquote = "```";
                                        user.send(`Hi <@532724702838390798>, you have a new map to review! \nName: ${sayMessage1}\n\n**Code**:${dataquote}html\n${args7}${dataquote}`);
                                        }

                                    })


                                    })

                                });

                        })

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

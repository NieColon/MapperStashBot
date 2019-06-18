const discord = require(`discord.js`);
const fs = require(`fs`);
var client = new discord.Client()
exports.run = async (client, message, args, ops) => {
    message.channel.send(`What is the name of the Mapper you are uploading? (ex: Ceplio)`);
    const filter = m => m.author.equals(message.author);
    message.channel.awaitMessages(filter, {
            max: 1,
            time: 100000,
            errors: ['time']
        })
        .then(collected => {
            const sayMessage1 = collected.first().content;
            message.channel.send(`Please give a direct link to the channel.`);
            const filter2 = m => m.author.equals(message.author);
            message.channel.awaitMessages(filter2, {
                    max: 1,
                    time: 10000000,
                    errors: ['time']
                })
                .then(collected => {
                    const sayMessage2 = collected.first(2).pop().content;
                    message.channel.send(`Please list all tags for this mapper. Tags can be changed based on mods discrimination. \nValid Tags: **[**classical, edgy, countryballs**]**, **[**active, inactive, quit**]**, **[**average, popular**]**, **[**traditional, animated**]**, and **[**future, modern, history**]** \nPLEASE DONT PUT COMMAS OR BRACKETS, JUST WRITE OUT EACH TAG WITH A SPACE INBETWEEN -COLON`);
                    const filter3 = m => m.author.equals(message.author);
                    message.channel.awaitMessages(filter3, {
                        max: 1,
                        time: 10000000,
                        errors: ['time']
                    }).then(collected => {
                      const sayMessage3 = collected.first(3).pop().content;
                      message.channel.send(`Please give me a direct link to this mapper's profile picture. \n\nThe easiest way to do this is right click their youtube profile picture and click "copy image address".`);
                      const filter4 = m => m.author.equals(message.author);
                      message.channel.awaitMessages(filter4, {
                          max: 1,
                          time: 10000000,
                          errors: ['time']
                      }).then(collected => {
                        const sayMessage4 = collected.first(4).pop().content;
                        message.channel.send("Please give me the mapper's main series. \n\nA valid response would be**:**AFOE, AHOW (use series abreviations)")
                        const filter5 = m => m.author.equals(message.author);
                        message.channel.awaitMessages(filter5, {
                            max: 1,
                            time: 10000000,
                            errors: ['time']
                        }).then(collected => {
                          const sayMessage5 = collected.first(5).pop().content;
                          message.channel.send(`Thank you for submitting a Mapper.\nYour requested Mapper is now under review and if accepted, it wil show up on the site within some time.`);
                          const user = client.users.get(`214744198044188673`);
                              const args2 = '<div class="hoverImg sayMessage3"> <div class="imgoverlay"></div> <a href="sayMessage2"><img class="imgSrc" src="sayMessage4" alt="image"style="background: white;" ></a> <div class="img-details fadeIn-right"> <h3>sayMessage1</h3> <p>sayMessage5</p> </div> </div>'
                              var args3 = args2.replace(/sayMessage1/g, `${sayMessage1}`);
                              var args4 = args3.replace(/sayMessage2/g, `${sayMessage2}`);
                              var args5 = args4.replace(/sayMessage3/g, `${sayMessage3}`);
                              var args6 = args5.replace(/sayMessage4/g, `${sayMessage4}`);
                              var args7 = args6.replace(/sayMessage5/g, `${sayMessage5}`);
                            const dataquote = "```";
                            console.log(sayMessage3);
                              user.send(`Hi <@214744198044188673>, you have a new mapper to review! **Code**:${dataquote}html\n${args7}${dataquote}`);


                        })

                      })

                    });

                });
        });
}
exports.settings = {
    name: `mapperadd`,
    aliases: [`mapperadd`, `addmapper`, `mapperadder`],
    category: `Resource Submitters`,
    info: `A basic command to add Mappers to the MapperStash Mapper List`,
    usage: `m!mapperadd`
}

const discord = require(`discord.js`);
const Jimp = require(`jimp`)
exports.run = async (client, message, args, ops) => {
    //let randomnumber = Math.floor(Math.random() * 10) + 1;
    
    let nekopic = Math.floor(Math.random() * 4) + 1;
    if(nekopic == 1) {
        let pic = Math.floor(Math.random() * 45) + 1;
        message.channel.send({files: ["./nou/gif/" + pic + "owo.gif"]})
    }
    if(nekopic == 2) {
        let pic = Math.floor(Math.random() * 538) + 1;
        message.channel.send({files: ["./nou/png/" + pic + "owo.png"]})
    }
    if(nekopic == 3) {
        let pic = Math.floor(Math.random() * 80) + 1;
        message.channel.send({files: ["./nou/jpg/" + pic + "owo.jpg"]})
    }
    if(nekopic == 4) {
        let pic = Math.floor(Math.random() * 34) + 1;
        message.channel.send({files: ["./nou/jpeg/" + pic + "owo.jpeg"]})
    }
}
exports.settings = {
    name: `animegirl`,
    aliases: [`neko`, `animegirl`]
}

const discord = require(`discord.js`)
const Jimp = require(`jimp`)
exports.run = async(client, message, args, ops) => {
    let mUser = message.mentions.users.first()
        let mUser2 = message.mentions.users.last() 
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://cdn.discordapp.com/attachments/463426578135908352/463503583539625984/shutterstock_127994624.jpg`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .resize(655, 655)
                      .write("shove1.jpg");
            Jimp.read(mUser2.avatarURL, function (err, imagetouse2) {
                if (err) throw err;
                imagetouse2.quality(60)
                           .resize(792, 792)
                           .write("shove2.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .composite( imagetouse, 89, 220 )
                      .composite( imagetouse2, 1273, 256)
                      .write("shoved.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'shoved.jpg'}]})
                }
            )})}
        )})
}

exports.settings = {
    name: `tranny`,
    aliases: [`tranny`] 
}
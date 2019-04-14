const Jimp = require(`jimp`);
const discord = require(`discord.js`);
exports.run = async (client, message, args, ops) => {
    let replies = [`Will Never Work`, `Slight Chance of Working`, `👀`, `Can Work`, `Could Work`, `High Chance of Working`, `Will Work `, `A Great Match `, `PERFECT MATCH ❤`]
        let result = Math.floor(Math.random() * replies.length);
        let mUser = message.mentions.users.first()
        let mUser2 = message.mentions.users.last()
        const username1 = mUser.username
        const username2 = mUser2.username;
        //const ship1 = username1.length; ship1/2
        const ship1 = username1.slice(0, username1.length / 2)
        const ship2 = username2.slice(username2.length / 2);
        const shipname = ship1 + ship2
        if(!mUser) return message.channel.send(`Please specifify two users next time!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://cdn.discordapp.com/attachments/470109023807602699/471821113261817866/Shipping.png`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.resize(866, 866)
                      .write("imagetouse.jpg");
            Jimp.read(mUser2.avatarURL, function (err, imagetouse2) {
            if (err) throw err;
            imagetouse2.resize(866, 866)
                      .write("imagetouse2.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .composite( imagetouse, 784, 797 )
                      .composite( imagetouse2, 2191, 797)
                      .write("commie.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'commie.jpg'}]})
                    message.channel.send(`${replies[result]}, ${shipname}.`)
                }
            )})}
        )})

}
exports.settings = {
    name: `ship`,
    aliases: [`ship`, `match`, `love`],
    category: `Fun`,
    info: `A basic command that ships two mentioned users`,
    usage: `m!ship @user1 @user2`
}

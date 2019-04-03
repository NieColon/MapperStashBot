var stringSimilarity = require('string-similarity');
var similarity = stringSimilarity.compareTwoStrings('healed', 'sealed'); 
var matches = stringSimilarity.findBestMatch('healed', ['edward', 'sealed', 'theatre']);const discord = require(`discord.js`);
exports.run = async (client, message, args, ops) => {
    let stringfinder = stringSimilarity.findBestMatch(`${args}`, [
        'layer basics', 
        'resizing image', 
        'image size resolution',
        `creating opening importing images`,
        `viewing images`,
        `layer basics`,
        `create layer groups`,
        `layer opacity blending`,
        `making selections`,
        `selecting lasso tools`,
        `selecting color range image`,
        `adjusting image sharpness blur`,
        `color adjustments`,
        `formatting paragraphs`,
        `editing text`,
        `create type effects`,
        `formatting characters`,
        `line character spacing`,
        `curves-adjustment`
      ]);
    let stringnames = stringfinder.bestMatch.target;
    stringnames = stringnames.replace(/ /g, '-');
    let stringnames2 = args;
    stringnames2 = message.content.replace(/ /g, `+`);
    if(args == `opening images`) {
        stringnames = `creating-opening-importing-images`;
    }
    if(args == `creating images`) {
        stringnames = `creating-opening-importing-images`;
    }
    let stringrating = stringfinder.bestMatch.rating;
    console.log(stringfinder.bestMatch.rating)
    if (stringfinder.bestMatch.rating < 0.30) {
        message.channel.send(`Sorry, I couldn't find any matches. \n\nI searched your request on Photoshops User Guide Page, do see if this article works. \nhttps://helpx.adobe.com/search-results.html?q=` + stringnames2 + `\n\nDid that help you? (yes/no)`);
        const user = client.users.get(`532724702838390798`)
        const filter = m => m.author.equals(message.author);
        message.channel.awaitMessages(filter, { max: 1, time: 80000, errors: ['time'] })
        .then(collected => {
            const sayMessage1 = collected.first().content;
            if (sayMessage1 == `no`) {
                user.send(`Hi <@532724702838390798>, ${message.author} has tried to get support, however, I could not find the support they were looking for. \nHere are the details: \n    What they sent: ${args}\n    Discord Info: ${message.author}\n\nPlease look into the issue when you have the time, Nicolon.`, {files: ["./nico.gif"]});
                message.channel.send(`Thanks, I have dmmed the bot owner the details of the incident.`)

            }
            if (sayMessage1 == `No`) {
                user.send(`Hi <@532724702838390798>, ${message.author} has tried to get support, however, I could not find the support they were looking for. \nHere are the details: \n    What they sent: ${args}\n    Discord Info: ${message.author}\n\nPlease look into the issue when you have the time, Nicolon.`, {files: ["./nico.gif"]});
                message.channel.send(`Thanks, I have dmmed the bot owner the details of the incident.`)

            }
        })
    } 
    if (stringfinder.bestMatch.rating >= 0.30) {
        message.channel.send(`https://helpx.adobe.com/photoshop/using/` + stringnames + `.html \n\nDid that help you? (yes/no)`);
        const user = client.users.get(`532724702838390798`)
        const filter = m => m.author.equals(message.author);
        message.channel.awaitMessages(filter, { max: 1, time: 80000, errors: ['time'] })
        .then(collected => {
            const sayMessage1 = collected.first().content;
            if (sayMessage1 == `no`) {
                user.send(`Hi <@532724702838390798>, ${message.author} has tried to get support, however, I could not find the support they were looking for. \nHere are the details: \n    What they sent: ${args}\n    Discord Info: ${message.author}\n\nPlease look into the issue when you have the time, Nicolon.`, {files: ["./nico.gif"]});
                message.channel.send(`Thanks, I have dmmed the bot owner the details of the incident.`)

            }
            if (sayMessage1 == `No`) {
                user.send(`Hi <@532724702838390798>, ${message.author} has tried to get support, however, I could not find the support they were looking for. \nHere are the details: \n    What they sent: ${args}\n    Discord Info: ${message.author}\n\nPlease look into the issue when you have the time, Nicolon.`, {files: ["./nico.gif"]});
                message.channel.send(`Thanks, I have dmmed the bot owner the details of the incident.`)

            }
        })
    };


    
}
exports.settings = {
    name: `pssupport`,
    aliases: [`photoshop`, `ps`, `supportphotoshop`, `supportps`],
    category: `Support`,
    info: `A basic command to research how to do things in Photoshop`,
    usage: `m!pssupport [text]`
}

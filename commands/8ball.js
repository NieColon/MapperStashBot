exports.run = async (client, message, args, ops) => {
    ballMessage = message.content.slice (8); // n ! 8 b a l l [your message]
    if(!ballMessage) {
        message.channel.send(`You're an idiot, ${message.author}`)
    } else{
        number = 20;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random) {
            case 1: message.channel.send ("It is certain."); break;
            case 2: message.channel.send ("As I see it, yes."); break;
            case 3: message.channel.send ("Reply hazy, please try again."); break;
            case 4: message.channel.send ("Don't count on it."); break;
            case 5: message.channel.send ("It is decidedly so."); break;
            case 6: message.channel.send ("Yes, definitely."); break;
            case 7: message.channel.send ("Without a doubt."); break;
            case 8: message.channel.send ("Most likely."); break;
            case 9: message.channel.send ("Outlook is good."); break;
            case 10: message.channel.send ("Ask again later. (Watch Korean Rage)"); break;
            case 11: message.channel.send ("Better not tell you."); break;
            case 12: message.channel.send ("My reply is no."); break;
            case 13: message.channel.send ("My sources say no.."); break;
            case 14: message.channel.send ("You may rely on it."); break;
            case 15: message.channel.send ("Signs point to yes."); break;
            case 16: message.channel.send ("Concetrate and ask again."); break;
            case 17: message.channel.send ("Very doubtful."); break;
            case 18: message.channel.send ("Yes."); break;
            case 19: message.channel.send ("Cannot predict now."); break;
            case 20: message.channel.send ("Outlook is not so good."); break;
        }

    }
    }
exports.settings = {
    name: `8ball`,
    aliases: [`8ball`,`future`,`futureball`],
    category: `Fun`,
    info: `A basic command to see your future`,
    usage: `m!8ball [text]`
}
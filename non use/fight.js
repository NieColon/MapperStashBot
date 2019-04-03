const moment = require(`moment`);
const discord = require(`discord.js`)
exports.run = async (client, message, args, ops) => {
    const sender = message.author;
  let user = message.mentions.users.first();

  let fighting = new Set()

  if (!user || user.bot || sender.id == user.id) {
    message.reply('Mention a **VALID** user if you want to figghttt!')
      .then(message => {
        message.delete(5000);
      })
    return;
  };

  if (fighting.has(message.guild.id)) return message.channel.send('Only one fight may be occurring per server.')
  fighting.add(message.guild.id)

  const embed = new discord.RichEmbed()
    .setColor(0xe56e32)
    .setDescription(`${user}, ${sender} wants to fight you!
  Do you want to fight back, **yes** or **no**?`);
  message.channel.send({
      embed
    })
    .then(() => {
      message.channel.awaitMessages(response => ['yes','no'].includes(response.content.toLowerCase()) && response.author.id === user.id, {
          max: 1,
          time: 60000,
          errors: ['time']
        })
        .then((collected) => {
          if (collected.first().content.includes(`no`)) {
            message.channel.send(`Awh ${sender}, ${user} doesn\'t want to fight you!😡`)
            fighting.delete(message.guild.id)
          } else if (collected.first().content.includes(`yes`)) {

            let user1 = user.username
            let user1Number = [`2`, `1`]
            let sender1 = sender.username

            var userHP = 500
            var senderHP = 500
            var takerHP = senderHP;

            if (user1Number = `2`) {
                var fighter = user1
                var taker = sender1
            }
            if (user1Number = `1`) {
                var fighter = sender1
                var taker = user1
            }

            function TheGame() {
              let random = Math.floor((Math.random() * 150) + 75);

              if (fighter == user1) {
                takerHP = userHP
                userHP = (takerHP - random)
                fighter = sender1
                taker = user1
              } else {
                takerHP = senderHP
                senderHP = (takerHP - random)
                fighter = user1
                taker = sender1
              }

              let hitted = (takerHP - random)

              var randomm = Math.floor (Math.random() * (9 - 1 + 1)) + 1;

              if (randomm == 1) {
                  var hMethod = `thew a stick at ${taker}`
              }

              if (randomm == 2) {
                var hMethod = `threw a rock at ${taker}`
              }

              if (randomm == 3) {
                var hMethod = `threw a meteor at ${taker}`
              }

              if (randomm == 4) {
                var hMethod = `sliced ${taker} with a sword`
              }

              if (randomm == 5) {
                var hMethod = `showed ${taker} ${fighter}'s face`
              }

              if (randomm == 6) {
                var hMethod = `said nou to ${taker}`
              }

              if (randomm == 7) {
                var hMethod = `forced ${taker} to watch anime`
              }

              if (randomm == 8) {
                var hMethod = `called their buddy Jesus on ${taker}`
              }

              if (randomm == 9) {
                var hMethod = `used the Infinity Guantlet on ${taker}`
              }

              if (hitted < 0) {
                const dembed = new discord.RichEmbed()
                  .setTitle(`${fighter} ${hMethod} and killed ${taker}`)
                  .setDescription(`${fighter} has won!`)
                  .setThumbnail(fighter.displayAvatarURL)
                  .setColor('RED')
                  .setTimestamp();
                message.channel.send({
                  embed: dembed
                })
                fighting.delete(message.guild.id)
                return;
              }
              
              const embed = new discord.RichEmbed()
                .setTitle(`${fighter} ${hMethod} and dealt ${random} damage!`)
                .setDescription(`HP Taken from ${taker}: ${hitted}`)
                .setColor('GREEN')
                .setTimestamp();
              message.channel.send({
                embed
              })

              if (userHP > 0 && senderHP > 0) {
                setTimeout(Timer, 3000);

                function Timer() {
                  TheGame();
                }
              }
            }
            TheGame();

          } else {
            console.log(collected.first().content)
          }
        })
    });
    
}
exports.settings = {
    name: `fight`,
    aliases: [`fight`, `challenge`, `hit`]
}
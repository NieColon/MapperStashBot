const {
    RichEmbed
  } = require(`discord.js`)
  
  exports.run = async (client, message, args, ops, cmd) => {
  
    const embed = new RichEmbed()
    const quotething = '`'
    embed.addField(`**Resource Submitters**`, `${client.commands.filter(cmd => cmd.settings.category === 'Resource Submitters').map(cmd => `**${cmd.settings.name}**\n${quotething}${cmd.settings.usage}${quotething}`).join("\n")}`)
    embed.setThumbnail(client.user.displayAvatarURL)
    embed.addField(`**Support Commands**`, `${client.commands.filter(cmd => cmd.settings.category === 'Support').map(cmd => `**${cmd.settings.name}**\n${quotething}${cmd.settings.usage}${quotething}`).join("\n")}`)
    embed.addField(`**Fun Commands**`, `${client.commands.filter(cmd => cmd.settings.category === 'Fun').map(cmd => `**${cmd.settings.name}**\n${quotething}${cmd.settings.usage}${quotething}`).join("\n")}`)
    embed.setTitle(`Usage Menu`)
    embed.setColor(`BLUE`)
    const user = client.users.get(`532724702838390798`);
    embed.setFooter(`Created by Holly ♡#1836`, user.displayAvatarURL)
    const eembed = new RichEmbed
    //eembed.addField('📒Commands', `${client.commands.filter(n => n.help.category != 'Owner' && n.conf.hidden == false).map(m => `\`${m.help.name}\``).join('\n')}`, true)
    //eembed.setDescription(client.commands.map(l => l.name + `\n`))
    message.channel.send(embed)
    //embed.addField(client.commands.map(l => l.settings.name).join('\n'), `Commands`)
  
  
  }
  
  exports.settings = {
    name: `usage`,
    aliases: [`commandusage`,`howtouse`],
    category: `hidden`,
    info: `A command listing all of the other ccommand usages`,
    usage: `m!usage`
  }
  
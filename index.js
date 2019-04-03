const discord = require ('discord.js');
const fs = require (`fs`);
const snek = require('snekfetch');
const Jimp = require(`jimp`);
const meme = require('memejs');
const gifSearch = require("gif-search");
const ms = require (`ms`);
const insertLine = require('insert-line')
const planets = require('planet-facts');
const db = require(`quick.db`);
const YouTube2 = require('simple-youtube-api');
const moment = require(`moment`);
const ffmpeg = require(`ffmpeg`);
var stringSimilarity = require('string-similarity');
var similarity = stringSimilarity.compareTwoStrings('healed', 'sealed'); 
var matches = stringSimilarity.findBestMatch('healed', ['edward', 'sealed', 'theatre']);
var opus = require('node-opus');
const money = require(`discord-money`);
const ownerID = `214744198044188673`;
const send = require(`quick.hook`);
const api = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
var client = new discord.Client();
let prefix = `m!`
/* global Map*/
const active = new Map();
//Command Handler
client.commands = new discord.Collection();
client.aliases = new discord.Collection();
fs.readdir('./commands/', (err, files) => {

  files.forEach(f => {

    try {
      let x = require(`./commands/${f}`);
      console.log(x.settings.name)
      client.commands.set(x.settings.name, x);
      x.settings.aliases.forEach(alias => {
        client.aliases.set(alias, x.settings.name);
      });
    } catch (e) {
      console.error(e.stack || e);
    };
  });
  console.log(`Loaded a total of ${files.length} commands.`);
});


client.on(`message`, async message => {
  let fetched = await db.fetch(`prefix_${message.author.id}`);
    if (fetched === null) prefix = `m!`;
    else prefix = fetched;

    

  let args = message.content.slice(prefix.length).trim().split(` `);
  let command = args.shift().toLowerCase();
  if (message.author.bot || !message.content.startsWith(prefix) || !message.guild) return;
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }

  try {
    let ops = {
      ownerID: ownerID,
      active: active
    }
    if (cmd) cmd.run(client, message, args, ops);
  } catch (e) {
    if (cmd) cmd.run(client, message, args);
    console.log(e.stack);
  }
  if (message.content.startsWith(`m!setprefix`)) {
    if(!args) message.channel.send(`Please enter a valid prefix!`);
    db.set(`prefix_${message.author.id}`, args.join(` `)).then(i => {
        message.channel.send(`Prefix has been set to **${i}**`);
    });
}
  

  if (!`./commands/${cmd}.js`) {
    message.channel.send(`This command does not exist!`)
  }
});
client.on(`guildCreate`, guild => {
  const user = guild.owner;
  user.send(`Hello, I am the official bot for MapperStash.net \n \n MapperStash.net is an online Mapping Resource Website to help Mappers of all kinds. With this bot you will be able to request features and upload Mappers to the site, to be found in the next update.`)
})
client.on(`ready`, () => {
  console.log(`Launched!`);
  client.user.setActivity ("Generating Maps...")
  client.user.setUsername(`MapperStash`)
  client.user.setAvatar(`https://cdn.discordapp.com/attachments/556842081537228820/562801149351297045/icoo.png`)
});
client.login(`NTQ2Njk4NzA3MTMxODI2MjA2.D0sAnw.4H7m6ONDi2nnu5Pj00_Nhc4nHrM`);
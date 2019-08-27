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
var listArray = ["item1", "item2", "item3"];
let prefix = `!`
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
  
  

  if (!`./commands/${cmd}.js`) {
    message.channel.send(`This command does not exist!`)
  }
});
client.on(`guildCreate`, guild => {
  const user = guild.owner;
  user.send(`Hello, I am the official bot for Japanese Mapping's **OFFFICIAL** Discord Server.`)
})
client.on(`ready`, () => {
  console.log(`Launched!`);
  client.user.setActivity ("Keeping Colo Sane");
  client.user.setUsername(`ModTools`);
  setTimeout(function(){ // in leftToEight() milliseconds run this:
    sendMessage(); // send the message once
    var ReminderMillseconds = 7200000;
    setInterval(function(){ // repeat this every 24 hours
        sendMessage();
    }, ReminderMillseconds)
}, leftToEight())
});
function leftToEight(){
  var d = new Date();
  return (-d + d.setHours(8,0,0,0));
}

function sendMessage(){
  var guild = client.guilds.get('307917498177552385');
  if(guild && guild.channels.get('587443274441031681')){
      guild.channels.get('587443274441031681').send("@everyone Make sure to verify yourselves!");
  }
}
client.login(`NjA0MDE3MTYzNTY4Njc2ODk0.XWQ46w.FT-WQH5VEV4z8btPmiZlqOzdsFM`);

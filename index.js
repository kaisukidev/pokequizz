const express = require('express'),
  app = express()

app.use(express.static('public'));

app.listen(process.env.PORT || 3000, () => console.log('Ambiente logado com sucesso!'));

const {Client, MessageAttachment} = require('discord.js'),
  client = new Client(),
  config = require('./config.json'),
  pokeQuizz = require('./src/js/pokequizz');

client.on('ready', () => {
  console.log(`${client.user.tag} logado com sucesso!`);
})

client.on('message', msg => {
  if(msg.content == `${config.prefix}pokequizz`){
    pokeQuizz(msg, MessageAttachment);
  }
})

client.login(config.token);
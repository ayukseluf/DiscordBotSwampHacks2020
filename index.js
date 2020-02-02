const path = require('path');
const commando = require('discord.js-commando');
const fs = require('fs');

var bot = new commando.CommandoClient({
    owner: '', // Your ID here.
    commandPrefix: '..', // The prefix of your bot.
    unknownCommandResponse: false, // Set this to true if you want to send a message when a user uses the prefix not followed by a command
})

const token = '';
bot.registry.registerDefaults()
	.registerGroups([
        ['random', 'Random Commands'],
        ['utility', 'Utility']
	])
	.registerCommandsIn(path.join(__dirname,"commands"));
bot.login(token);
console.log('Bot ran into no errors. :)');

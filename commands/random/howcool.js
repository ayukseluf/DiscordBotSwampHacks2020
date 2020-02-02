const commando = require('discord.js-commando');
const Discord = require('discord.js');

class howcool extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: 'howcool',
                group: 'random',
                memberName: 'howcool',
                description: 'tells the user or tagged user how cool they are'
                
            })
    }

    async run(message, args)
    { 
        let coolval = 100;
        const percent = Math.random();
        coolval *= percent;        
        coolval = Math.floor(coolval);
        if( args != '' && args.includes('@'))
        {
            try
            {
                const taggedUser = message.mentions.users.first();
                if (taggedUser.id == 213006957727055882 || taggedUser.id == 292161861372215297)
                {
                    coolval = 100;
                }
                    message.channel.send("<@!" + taggedUser.id + ">" + ' is ' + coolval + '% cool!');
            } catch(err)
            {
                message.channel.send("Invalid user!");
            }
        }
        else{
            message.channel.send("<@!" + message.author.id + ">" + ' is ' + coolval + '% cool!');
        }
    }
}

module.exports = howcool;
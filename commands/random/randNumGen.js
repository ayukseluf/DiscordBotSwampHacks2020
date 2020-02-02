const commando = require('discord.js-commando');

class randNumGen extends commando.Command
{
    constructor(client)
    {
        super(client, 
            {
                name: 'rand',
                group: 'random',
                memberName: 'random',
                description: 'Generates a random integer between min and max values. If no, parameters are provided generates a number between 1 and 10.'
            })
    }

    async run(message, args)
    {
        if(args != "")
        {
            let firstNum = parseInt(args.substring(0,1));
            let secondNum = parseInt(args.substring(1));
            firstNum = Math.ceil(firstNum);
            secondNum = Math.floor(secondNum);
            message.channel.send(Math.floor(Math.random() * (secondNum - firstNum)) + firstNum);
        } else
        {
            message.channel.send(Math.floor(Math.random() * 6) + 1);
        }

    }
}

module.exports = randNumGen;
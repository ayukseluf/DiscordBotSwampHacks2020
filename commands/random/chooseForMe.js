const commando = require('discord.js-commando');

class chooseForMe extends commando.Command
{
    constructor(client)
    {
        super(client, 
            {
                name: 'pick',
                group: 'random',
                memberName: 'randompicker',
                description: 'Takes in passed in list and chooses. Correct forma'
            })
    }

    async run(message, args)
    {
        if(args != "")
        {
            let stringArray = args.split(',');
            let firstNum = 0
            let secondNum = stringArray.length;
            message.channel.send(stringArray[Math.floor(Math.random() * (secondNum - firstNum)) + firstNum]);
        } else
        {
            message.channel.send("Make sure to specify your options in the format of: option1,option2,option3");
        }

    }
}

module.exports = chooseForMe;
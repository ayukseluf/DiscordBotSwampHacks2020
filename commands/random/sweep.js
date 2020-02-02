const commando = require('discord.js-commando');
const Discord = require('discord.js');

class sweep extends commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name: 'sweep',
            group: 'random',
            memberName: 'sweep',
            description: 'Sweeps the channel'
        });
    }
    async run(message, args)
    {
        const sweepEmbed = {
            title: 'Y\'all bitches dirty',
            image: {
                url: 'https://media1.tenor.com/images/00937b56da85ccc7bc3e5402f23ed6f2/tenor.gif?itemid=6195813',
            },
        };
        const image = new Discord.Attachment('https://media1.tenor.com/images/00937b56da85ccc7bc3e5402f23ed6f2/tenor.gif?itemid=6195813');
        for(let i = 0; i < 5; i++)
        {
            message.channel.send({image, embed: sweepEmbed});
        }
    }
}
module.exports = sweep;
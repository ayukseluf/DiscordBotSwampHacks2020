const commando = require('discord.js-commando');

class moment extends commando.Command
{
    constructor(client)
    {
        super(client, 
            {
                name: 'moment',
                group: 'random',
                memberName: 'moment',
                description: 'A real moment'
            })
    }

    async run(message, args)  
    {
        const{Attachment} = require('discord.js');  
        const attachment = new Attachment('https://i.imgur.com/GXZQxYi.jpg');
        message.channel.send(attachment);
    }
}

module.exports = moment;
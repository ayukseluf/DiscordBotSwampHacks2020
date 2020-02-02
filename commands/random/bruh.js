const commando = require('discord.js-commando');
const Discord = require('discord.js');

class bruhMoment extends commando.Command
{
    constructor(client)
    {
        super(client, 
            {
                name: 'bruh',
                group: 'random',
                memberName: 'bruhs',
                description: 'Generates a bruh moment'
            })
    }

    async run(message, args)
    {
        const bruh = {
            title: "BRUH MOMENT",
            image: {
                url: "https://media1.tenor.com/images/85caab51be730a4e1290cd99d7d6e085/tenor.gif?itemid=13248415",
            },
        };
        const image = new Discord.Attachment("https://media1.tenor.com/images/85caab51be730a4e1290cd99d7d6e085/tenor.gif?itemid=13248415");
        message.channel.send({image, embed: bruh});
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
        console.log(collector);
        collector.on('collect', postmessage => {
            let stringarray = postmessage.content.split('');
            for (let i = 0; i < stringarray.length; i++){
            message.channel.send(stringarray[i]);
            {time: 2000}
        }
            // if (message.content == 'bruh'){i
            //     message.channel.send('BRUH');
            // }
            // else if(message.content == 'nathan'){
            //     message.channel.send('is gay');
            // }
            // else{
            //     message.channel.send('sad bruh');
            // }
        })
    }
}

module.exports = bruhMoment;
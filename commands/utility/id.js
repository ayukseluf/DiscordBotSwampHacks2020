const commando = require('discord.js-commando');
const Discord = require('discord.js');

class id extends commando.Command
{
    constructor(client)
    {
        super(client, 
            {
                name: 'id',
                group: 'utility',
                memberName: 'id',
                description: 'Gets information on the user'
            })
    }

    async run(message, args)
    {
        if(args != "" && args.includes('@'))
        {
            try{
                const taggedUser = message.mentions.users.first();
                const embed = new Discord.RichEmbed()
                .setTitle('Profile of ' + taggedUser.username)
                .setDescription('ID: ' + taggedUser.id)
                .addField('Tag: ', taggedUser.tag , true)
                .addField('Creation: ', taggedUser.createdAt , false)
                .addField('Status: ' , taggedUser.presence.status)
                .addField('Currently Doing: ', taggedUser.presence.game)
                .setAuthor(taggedUser.username , taggedUser.avatarURL)
                .setColor('#ffffff')
                message.channel.send(embed);
            } catch(err)
            {
                message.channel.send("That is not a valid user!");
            }
        } else
        {
            const embed = new Discord.RichEmbed()
            .setTitle('Profile of ' + message.author.username)
            .setDescription('ID: ' + message.author.id)
            .addField('Tag: ', message.author.tag , true)
            .addField('Creation: ', message.author.createdAt , false)
            .addField('Status: ' , message.author.presence.status)
            .addField('Currently Doing: ', message.author.presence.game)
            .setAuthor(message.author.username , message.author.avatarURL)
            .setColor('#ffffff')
            message.channel.send(embed);
        }
    }
}

module.exports = id;
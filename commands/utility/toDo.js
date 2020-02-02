const commando = require('discord.js-commando');
const fs = require('fs');
const path = require('path');

let jsonData = require('./toDOLists.JSON');

class toDo extends commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name: 'todo',
            group: 'utility',
            memberName: 'todo',
            description: 'This is a text-based ToDo list.'
        });
    }

    async run(message, args)
    {
        if(args.startsWith(" write"))
        {
            let task = args.slice(7);
            jsonData[message.author.id] =
            {
                
            }
        } else if(args.startsWith(" list"))
        {

        } else if(args.startsWith(" delete"))
        {
        } else
        {
            message.channel.send("Invalid command arguments. Try ```..todo write```To write to your current list. ```..todo read``` To print your current list.```..todo delete``` For, either deleting your whole list, or a single entry.")
        }
    }
}
module.exports = toDo;
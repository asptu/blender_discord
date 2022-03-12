const Discord = require('discord.js');
//const { link } = require('ffmpeg-static');
const client = new Discord.Client();
const shell = require('shelljs') 
const prefix = '';

client.once('ready', () => {
    console.log('online');

});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    if (message.content.match('add cube')) {

    shell.exec('C:\\Users\\a\\Desktop\\blender_discord\\add-cube.ahk')

    message.channel.send('added cube')
    console.log('added cube');

}

});




client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    if (message.content.match('delete')) {

    shell.exec('C:\\Users\\a\\Desktop\\blender_discord\\del.ahk')
        
    message.channel.send(message.content+'d')
    console.log('deleted selected');
}

});




client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    if (message.content.match('move x')) {

        var ret = message.content.replace('move x','');

        var fs = require('fs')
        fs.readFile("move-x.ahk", {encoding: 'utf8'}, function (err,data) {
            var formatted = data.replace(/position = .+/, 'position ='+ ret);
        fs.writeFile("move-x.ahk", formatted, 'utf8', function (err) {
            if (err) return console.log(err);

            console.log('position ='+ ret)


            shell.exec('C:\\Users\\a\\Desktop\\blender_discord\\move-x.ahk')

            message.channel.send('moved'+ret+' meters')
            console.log('moved'+ret+' meters');

        
        
         });
        
        
    });

}
  


});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    if (message.content.match('move y')) {

        var ret = message.content.replace('move y','');

        var fs = require('fs')
        fs.readFile("move-y.ahk", {encoding: 'utf8'}, function (err,data) {
            var formatted = data.replace(/position = .+/, 'position ='+ ret);
        fs.writeFile("move-y.ahk", formatted, 'utf8', function (err) {
            if (err) return console.log(err);

            console.log('position ='+ ret)


            shell.exec('C:\\Users\\a\\Desktop\\blender_discord\\move-y.ahk')

            message.channel.send('moved'+ret+' meters')
            console.log('moved'+ret+' meters');

        
        
         });
        
        
    });

}
  


});


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    if (message.content.match('move z')) {

        var ret = message.content.replace('move z','');

        var fs = require('fs')
        fs.readFile("move-z.ahk", {encoding: 'utf8'}, function (err,data) {
            var formatted = data.replace(/position = .+/, 'position ='+ ret);
        fs.writeFile("move-z.ahk", formatted, 'utf8', function (err) {
            if (err) return console.log(err);

            console.log('position ='+ ret)


            shell.exec('C:\\Users\\a\\Desktop\\blender_discord\\move-z.ahk')

            message.channel.send('moved'+ret+' meters')
            console.log('moved'+ret+' meters');

        
        
         });
        
        
    });

}
  


});



client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    if (message.content.match('scale')) {

        var ret = message.content.replace('scale','');

        var fs = require('fs')
        fs.readFile("scale.ahk", {encoding: 'utf8'}, function (err,data) {
            var formatted = data.replace(/position = .+/, 'position ='+ ret);
        fs.writeFile("scale.ahk", formatted, 'utf8', function (err) {
            if (err) return console.log(err);

            console.log('scale ='+ ret)


            shell.exec('C:\\Users\\a\\Desktop\\blender_discord\\scale.ahk')

            message.channel.send('scaled '+ret+' meters')
            console.log('scaled '+ret+' meters');

        
        
         });
        
        
    });

}
  


});


client.login(token);

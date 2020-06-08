/*
* Main file for the discord bot, run this via node.js.
* 
* Copyright (C) 2020  Tyler Bialoblocki
* tylerbialoblocki@gmail.com
*
* This program is free software; you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation; either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
* GNU General Public License for more details.
* 
* You should have received a copy of the GNU General Public License along
* with this program; if not, write to the Free Software Foundation, Inc.,
* 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
* 
* Requires:
* discord.io - Discord bot API
* config.json - Configuration file for discord API key, hotkey, and enabled features
*/

const Discord = require('discord.io');
const config = require('./config.json');
const osu = require('node-os-utils')

// Initialize Discord Bot
const bot = new Discord.Client({
   token: config.token,
   autorun: true
});

// Let us know when the bot is ready
bot.on('ready', function (evt) {
    console.log('Ready! Logged in as: ' + bot.username + ' - (' + bot.id + ')');
});

// Main bot onMessage loop
bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.startsWith(config.hotkey)) {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            case 'cpu':
                var cpu = osu.cpu;
                var count = cpu.count();
                cpu.usage()
                .then(cpuPercentage => {
                    var threadCount = 'Number of threads: ' + count + '\n';
                    var cpuUsage = 'Server cpu usage: ' + cpuPercentage + '%\n';
                    bot.sendMessage({
                        to: channelID,
                        message: threadCount + cpuUsage
                    });
                });
                return;

                case 'ram':
                    var mem = osu.mem;
                    mem.info()
                    .then(info => {
                        // TODO: Add OS check here for mb / gb
                        var total = 'Total server memory: ' + info.totalMemMb + '\n';
                        var used = 'Used server memory: ' + info.usedMemMb + '\n';
                        var free = 'Free server memory: ' + info.freeMemMb + '\n';
                        var percentFree = 'Free server memory percentage: ' + info.freeMemPercentage + '%\n';
                        bot.sendMessage({
                            to: channelID,
                            message: total + used + free + percentFree
                        });
                    })
                    return;

                    case 'uptime':
                        var os = osu.os;
                        var total = os.uptime();

                        var hours = Math.floor(total / 60 / 60);
                        var minutes = Math.floor(total / 60) - (hours * 60);
                        var seconds = total % 60;
                        var formattedTime = hours + ':' + minutes + ':' + seconds

                        var uptime = 'Total server uptime: ' + formattedTime
                        bot.sendMessage({
                            to: channelID,
                            message: uptime
                        });
                        return;
         }
     }
});
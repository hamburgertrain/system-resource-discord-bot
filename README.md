# system-resource-discord-bot

## About

This node.js program is for reporting system resource usage to a Discord server. 

With this tool you can:

1. Retrieve the system cpu usage.

2. Retrieve the system memory usage.

3. Retrieve the system uptime.

## Setup

1. Install Node.JS and Node Package Manager

2. Clone this repo to the machine you want stats on.

3. Specify your Discord bot API key and command prefix in config.json

3. Run `npm install`

4. Run `node bot.js`

5. You should be up and running!

Included is a batch script (start.bat) for those on Windows who would like to get autostart on boot working.\
Create a shortcut to the batch script and place it in your startup directory and you should be good to go.

## Commands

`cpu`

Get the system cpu usage.

`ram`

Get the system memory usage.

`uptime`

Get the system uptime.

## Config

`hotkey: String`\
`Default: "!"`

The hotkey to mark commands that the bot should respond to.

`token: String`\
`Default: "None"`

Your Discord bot token.

## License

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program; if not, write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
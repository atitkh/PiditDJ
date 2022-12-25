const { MessageEmbed } = require('discord.js')

module.exports = {
  info: {
    name: "help",
    description: "To show all commands",
    usage: "[command]",
    aliases: ["commands", "help me", "pls help", "h"]
  },

  run: async function(client, message, args) {
    var allcmds = "";

    client.commands.forEach(cmd => {
      let cmdinfo = cmd.info
      allcmds += "`" + client.config.prefix + cmdinfo.name + " " + cmdinfo.usage + "` ~ " + cmdinfo.description + "\n"
    })

    let embed = new MessageEmbed()
      .setAuthor("Commands of " + client.user.username, "https://github.com/navaneethkm004/my-images/blob/main/giphy.gif?raw=true")
      .setColor("#fffdd0")
      .setDescription(allcmds)
      .setFooter(`Use ${client.config.prefix}help [command] MusicBot 24/7 - Pidit DJ`,"https://github.com/navaneethkm004/my-images/blob/main/giphy.gif?raw=true")

    if (!args[0]) return message.channel.send(embed)
    else {
      let cmd = args[0]
      let command = client.commands.get(cmd)
      if (!command) command = client.commands.find(x => x.info.aliases.includes(cmd))
      if (!command) return message.channel.send("Unknown Command")
      let commandinfo = new MessageEmbed()
        .setTitle("Command: " + command.info.name + " info")
        .setAuthor(client.user.username, 'https://github.com/navaneethkm004/my-images/blob/main/giphy.gif?raw=true')
        .setColor("#fffdd0")
        .setDescription(`
              Name: ${command.info.name}
              Description: ${command.info.description}
              Usage: \`\`${client.config.prefix}${command.info.name} ${command.info.usage}\`\`
              Aliases: ${command.info.aliases.join(", ")}
                            `)
      message.channel.send(commandinfo)
    }
  }
}

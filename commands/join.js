const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
    info: {
        name: "join",
        aliases: ["come", "connect", "hey"],
        description: "Join The Voice Channel!",
        usage: "Join",
    },

    run: async function (client, message, args) {
        let channel = message.member.voice.channel;
        if (!channel) return sendError("I'm sorry but you need to be in a voice channel!", message.channel);

        try {
            const connection = await channel.join();
            queueConstruct.connection = connection;
            play(queueConstruct.songs[0]);
        } catch (error) {
            console.error(`I could not join the voice channel: ${error}`);
        }

        const Embed = new MessageEmbed()
            .setAuthor("Joined Voice Channel", "https://github.com/navaneethkm004/my-images/blob/main/giphy.gif?raw=true")
            .setColor("#fffdd0")
            .setTitle("Hello Pidit Gang")
            .setDescription("🎶 Aye ma geet bajauna.")
            .setTimestamp();

        return message.channel.send(Embed).catch(() => message.channel.send("🎶 Aye ma geet bajauna :C"));
    },
};

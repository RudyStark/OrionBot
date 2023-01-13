import { SlashCommandBuilder} from "@discordjs/builders";
import { SlashCommand } from "../types";
import { EmbedBuilder } from "@discordjs/builders";

export const command: SlashCommand = {
    name: "ping",
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Replies with pong!"),
    execute: async (interaction) => {
        await interaction.reply({
            embeds: [
                new EmbedBuilder()
                .setAuthor({ name: "NoSkill"})
                .setDescription(`Pong!\nPing: ${interaction.client.ws.ping}ms`)
            ]
        })       
    }
}
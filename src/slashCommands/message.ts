import { SlashCommand } from "../types";
import { SlashCommandBuilder} from "@discordjs/builders";

export const command: SlashCommand = {
    name: "message",
    data: new SlashCommandBuilder()
        .setName("message")
        .setDescription("Replies with pong!")
        .addStringOption(option => {
            return option
            .setName("message")
            .setDescription("The message to send")
            .setRequired(true);
        }),
    execute: async (interaction) => {
            const message = interaction.options.get('message').value.toString();
            await interaction.reply({ content: `You said: ${message}`}); 
    }
}
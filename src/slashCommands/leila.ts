import { SlashCommand } from "../types";
import { Message, SlashCommandBuilder } from "discord.js";

export const command: SlashCommand = {
    name: "leila",
    data: new SlashCommandBuilder()
        .setName('leila')
        .setDescription("Renvoie une réaction de Leila"),
    execute: async (interaction) => {
        // on souhaites créer une commande qui renvoie des messages aléatoires de Leila
        // on va donc créer un tableau de messages
        const messages = [
            "Leila: Spidi t'es une merde, j'ai finis le chapitre 26 avant toi",
            "Leila: Spidi t'es une merde, je vais finir le chapitre 27 avant toi",
            "Leila: Orion, cette guilde qui me vole tout mes clients",
            "Leila: Aiden souviens toi de moi, je vais te tuer",
            "Leila: Tchege, humm humm humm, tchege, humm humm humm",
            "Leila: NoSkill c'est un gros noob, il a pas de skill",
            "Leila: J'ai un compte freetoplay, je suis une pro",
            "Leila: Mes tutos sont les meilleurs ! Je ne suis pas une arnaqueuse",
        ]

        const message: Message = await interaction.reply({
            content: messages[Math.floor(Math.random() * messages.length)],
            fetchReply: true
        })
        await message.react("🤢")       
    }

    }
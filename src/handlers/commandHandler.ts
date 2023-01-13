require('dotenv').config();
import { Client, REST, Routes } from "discord.js";
import { join } from "path";
import { readdirSync } from "fs";
import { SlashCommand } from "../types";

module.exports = async(client: Client) => {
    const body = []
    let slashCommandsDir = join(__dirname, "../slashCommands");

    readdirSync(slashCommandsDir).forEach(file => {
        if(!file.endsWith(".js")) return;
        
        const command: SlashCommand = require(`${slashCommandsDir}/${file}`).command;

        body.push(command.data.toJSON());
        console.log(`Slash command chargé: ${command.name}`)

        client.slashCommands.set(command.name, command);

    })

    const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

    // try {
    //     await rest.put(Routes.applicationCommands(process.env.CLIENT_ID),{ body: [] });
    //     console.log("Slash commands supprimés");

    // } catch (error) {
    //     console.error(error);
    // }

    try {
        await rest.put(Routes.applicationCommands(process.env.CLIENT_ID),{ body: body });
        console.log("Slash commands chargés");

    }
    catch (error) {
        console.error(error);
    }


}
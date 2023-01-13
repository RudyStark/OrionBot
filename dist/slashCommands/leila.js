"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = void 0;
const discord_js_1 = require("discord.js");
exports.command = {
    name: "leila",
    data: new discord_js_1.SlashCommandBuilder()
        .setName('leila')
        .setDescription("Renvoie une réaction de Leila"),
    execute: (interaction) => __awaiter(void 0, void 0, void 0, function* () {
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
        ];
        const message = yield interaction.reply({
            content: messages[Math.floor(Math.random() * messages.length)],
            fetchReply: true
        });
        yield message.react("🤢");
    })
};

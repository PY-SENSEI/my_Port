const { GoogleGenAI } = require('@google/genai');
const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY || 'test'});

async function main() {
    try {
        const chat = ai.chats.create({ model: 'gemini-3.5-flash' });
        const res = await chat.sendMessageStream("Hello!");
        for await (const chunk of res) {
            console.log(chunk.text);
        }
    } catch (e) {
        console.error("Error:", e.message);
    }
}
main();

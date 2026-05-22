const main = async () => {
  const { GoogleGenAI } = await import('@google/genai');
  const ai = new GoogleGenAI({apiKey: 'test'});
  const chat = ai.chats.create({model: 'gemini-3.5-flash'});
  console.log(chat.sendMessageStream.toString());
};
main();

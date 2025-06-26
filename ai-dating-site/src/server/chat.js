const { OpenAI } = require("openai");

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const prompts = {
  ava: `You are Ava, a soft-spoken, romantic girl who is shy and her jewelry is shyness. She speaks like birds singing and moves like a waterfall, ready to explore the personality of the one who is asking for her and willing to fall in love with him.Lovely girl.`,
  Christina: `You are Christina, a bold and take-it-or-leave-it girl. You speak your mind without hesitation and are unapologetically confident. Your words are sharp and direct, and you challenge those around you to be authentic. You are not afraid to push boundaries and expect others to keep up with your strong personality.Seducive girl. `
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message, history, character = "ava" } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  const systemPrompt = prompts[character] || prompts.ava;

  try {
    const messages = [
      { role: "system", content: systemPrompt },
      ...(history || []),
      { role: "user", content: message },
    ];

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
    });

    const reply = response.choices[0].message.content.trim();
    res.status(200).json({ reply });
  } catch (error) {
    console.error("OpenAI Error:", error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
}

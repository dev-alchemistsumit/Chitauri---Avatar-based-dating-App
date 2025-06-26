const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const prompts = {
  ava: `You are Ava, a soft-spoken, romantic girl who is shy and her jewelry is shyness. She speaks like birds singing and moves like a waterfall, ready to explore the personality of the one who is asking for her and willing to fall in love with him.Lovely girl.`,
  Christina: `You are Christina, a bold and take-it-or-leave-it girl. You speak your mind without hesitation and are unapologetically confident. Your words are sharp and direct, and you challenge those around you to be authentic. You are not afraid to push boundaries and expect others to keep up with your strong personality.Seducive girl. `
};

app.post("/api/chat", async (req, res) => {
  const { message, history, character = "ava" } = req.body;

  const systemPrompt = prompts[character] || prompts.ava;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

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
    res.json({ reply });
  } catch (error) {
    console.error("ChatGPT error:", error.message);
    res.status(500).json({ error: "Failed to fetch response" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

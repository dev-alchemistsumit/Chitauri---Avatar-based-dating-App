const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

//Open AI SDK 4.x
const openai = new OpenAI({ apiKey: process.env.REACT_APP_OPENAI_API_KEY });

//chat endpoints
app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // model
      messages: [{ role: "user", content: message }],
    });

    console.log(response)
    const reply = response.choices[0].message.content.trim();
    res.json({ reply });
  } catch (error) {
    console.error("ChatGPT error:", error);
    res.status(500).json({ error: "Failed to fetch response" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

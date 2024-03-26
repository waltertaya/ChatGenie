const { GoogleGenerativeAI } = require("@google/generative-ai");
const router = require('express').Router();
require('dotenv').config();


router.all('/', (req, res) => {
  res.render('index');
});


router.all('/api', async (req, res) => {
  const passedValue = req.query.value;
  console.log(passedValue);

  const API_KEY = process.env.API_KEY;

  const genAI = new GoogleGenerativeAI({ apiKey: API_KEY });
  
  async function run() {
      try {
          const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      
          const prompt = `${passedValue}`;

          const result = await model.generateContent(prompt);
          const response = await result.response;
          const text = await response.text();
          console.log(`Inside the function: ${text}`);
          return text;
      } catch (error) {
          console.error("Error in generating content:", error);
          throw error;
      }
  }

  try {
    const text = await run();
    console.log(text);
    const data = { message: text };
    res.json(data);
} catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send("Internal Server Error");
}
});


module.exports = router;
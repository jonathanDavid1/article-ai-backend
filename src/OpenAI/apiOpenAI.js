const OpenAI = require('openai');


const openai = new OpenAI();

async function main(question) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: question }],
    model: "gpt-3.5-turbo",
  });


  return completion.choices[0].message.content;
}

module.exports = {
    main,
};
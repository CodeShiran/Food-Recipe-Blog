import { CohereClient } from "cohere-ai";

const cohere = new CohereClient({
  token: process.env.CHAT_API_KEY,
});

export const generateRecipe = async (foodName) => {
  const response = await cohere.generate({
    model: "command",
    prompt: `Give me a detailed step-by-step recipe for making ${foodName}. Include ingredients and cooking instructions.`,
    max_tokens: 500,
    temperature: 0.8,
  });
  return response.generations[0].text.trim();
};
import { CohereClient } from "cohere-ai";

const cohere = new CohereClient({
  token: process.env.CHAT_API_KEY,
});

export const generateRecipe = async (foodName) => {
  // Simple check for food-related keywords
  const foodKeywords = ["recipe", "cook", "make", "prepare", "dish", "food", "ingredient"];
  const isFoodRelated = foodKeywords.some(keyword =>
    foodName.toLowerCase().includes(keyword)
  );

  if (!isFoodRelated) {
    return "Sorry, I can only provide information and recipes related to food. Please ask me about a dish or ingredient!";
  }

  const response = await cohere.generate({
    model: "command",
    prompt: `Give me a detailed step-by-step recipe for making ${foodName}. Include ingredients and cooking instructions.`,
    max_tokens: 1500,
    temperature: 0.8,
  });
  return response.generations[0].text.trim();
};
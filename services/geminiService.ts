
import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
  console.warn("API_KEY environment variable not set. Playground functionality will be limited.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export const generateText = async (prompt: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return Promise.resolve("API Key not configured. This is a mock response.");
  }
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating text:", error);
    return "An error occurred while generating the text. Please check the console.";
  }
};

export const generateImage = async (prompt: string): Promise<string> => {
    if (!process.env.API_KEY) {
        return Promise.resolve(`https://picsum.photos/seed/${Date.now()}/512/512`);
    }
    try {
        const response = await ai.models.generateImages({
            model: 'imagen-4.0-generate-001',
            prompt: prompt,
            config: {
                numberOfImages: 1,
                outputMimeType: 'image/png',
                aspectRatio: '1:1',
            },
        });
        const base64ImageBytes = response.generatedImages[0].image.imageBytes;
        return `data:image/png;base64,${base64ImageBytes}`;
    } catch (error) {
        console.error("Error generating image:", error);
        return "https://picsum.photos/512/512?grayscale"; // Return a placeholder on error
    }
};

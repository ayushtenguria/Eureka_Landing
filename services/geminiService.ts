import { GoogleGenAI, Type } from "@google/genai";
import { StrategyResponse } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateCreativeStrategy = async (brandDescription: string, goal: string): Promise<StrategyResponse> => {
  if (!apiKey) {
    throw new Error("API Key is missing");
  }

  const model = "gemini-2.5-flash";
  const prompt = `
    You are a world-class Social Media Strategist for Eureka Studios, a premier Gen Z / Millennial focused agency known for high-impact visual storytelling.
    Create a quick, high-impact mini-strategy for a prospective client.
    
    Client Description: ${brandDescription}
    Primary Goal: ${goal}

    Return the response in JSON format strictly adhering to the schema.
    Tone: Punchy, modern, marketing-savvy, slightly edgy.
    Make the "vibe" description evocative and visual.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            tagline: { type: Type.STRING, description: "A catchy, short campaign tagline" },
            platforms: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "Top 2 platforms to focus on" 
            },
            contentIdeas: {
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "3 specific video/post ideas"
            },
            vibe: { type: Type.STRING, description: "3 words describing the visual aesthetic" }
          },
          required: ["tagline", "platforms", "contentIdeas", "vibe"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as StrategyResponse;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
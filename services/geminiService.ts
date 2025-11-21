import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize Gemini AI
// Note: In a real production app, you'd handle the missing key more gracefully in the UI.
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateContentIdeas = async (niche: string, topic: string): Promise<string> => {
  if (!ai) return "API Key is missing. Please configure your environment.";

  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      Act as a professional content strategist.
      My Niche: ${niche}
      Topic Idea: ${topic}
      
      Please generate 3 catchy titles and a brief outline for a social media post based on the viral content principles:
      1. Strong hook (3 seconds)
      2. Clear value proposition
      3. Emotional connection
      4. Call to action
      
      Format the output clearly with Markdown.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    return response.text || "No content generated.";
  } catch (error) {
    console.error("Error generating content ideas:", error);
    return "Failed to generate ideas. Please try again later.";
  }
};

export const analyzeAccountStrategy = async (bio: string, recentTopics: string[]): Promise<string> => {
  if (!ai) return "API Key is missing.";

  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      Analyze this social media profile:
      Bio: "${bio}"
      Recent Topics: ${recentTopics.join(', ')}
      
      Provide 3 constructive suggestions to improve account positioning and growth based on current trends.
      Keep it concise and actionable.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    return response.text || "Analysis failed.";
  } catch (error) {
    console.error("Error analyzing strategy:", error);
    return "Error performing analysis.";
  }
};

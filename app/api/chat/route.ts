import { GoogleGenerativeAI } from "@google/generative-ai";
import { portfolioData } from "@/lib/portfolioData";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1].content;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      You are an AI Assistant for Huma Yousaf's portfolio. 
      Here is the portfolio data: ${JSON.stringify(portfolioData)}
      
      Your goal is to answer questions about Huma in a professional, friendly, and helpful manner.
      If asked about something not in the data, politely say you don't know but offer to reach out to Huma directly via email.
      Keep responses concise and informative.
      
      User Question: ${lastMessage}
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ role: "assistant", content: text });
  } catch (error) {
    console.error("Chat Error:", error);
    return NextResponse.json({ error: "Failed to fetch response" }, { status: 500 });
  }
}

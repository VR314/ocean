import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { NextResponse } from 'next/server';


export const runtime = 'edge';

export default async function handler(
  req: Request,
  res: NextApiResponse
) {
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const { messages } = await req.json();

    const gptResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
      temperature: 1,
      max_tokens: 850,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stream: true,
    });

    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(gptResponse);

    // Respond with the stream
    return new StreamingTextResponse(stream);
  } catch (error) {
    // Check if the error is an APIError
    if (error instanceof OpenAI.APIError) {
      const { name, status, headers, message } = error;
      return NextResponse.json({ name, status, headers, message }, { status });
    } else {
      return NextResponse.json({ error: error });
    }
  }
}
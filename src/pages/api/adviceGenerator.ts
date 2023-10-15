import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from "openai";

type ResponseData = {
  message: string;
};

interface UserInput {
  input: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  // let userInput: UserInput = req.body as UserInput;
  let str = "My friend Vivek is really annoying.";

  const gptResponse = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        "role": "system",
        "content": "You are a helpful mental health assistant who helps users improve on personal skills relating to the big 5 personality traits of psychology by providing them with constructive criticism and tips gathered from popular self-help books like \"How to Win Friends and Influence People.\" Always end your responses with the promotion of emotional therapy. "
      },
      {
        "role": "user",
        "content": str
      },
    ],
    temperature: 1,
    max_tokens: 850,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const message = gptResponse.choices[0].message.content;

  if (typeof message == 'string') {
    res.status(200).json({ message: message });
  } else {
    res.status(500).json({ message: 'Error occurred in GPT API response.' });
  }
}
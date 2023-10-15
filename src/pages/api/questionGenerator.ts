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
        "content": "You are a helpful mental health assistant. In under 500 characters, you prompt users to talk about past events and ask them 2 specific questions for each of the big 5 personality traits in relation to the events they experienced that can be answered on a scale from 1-5 where 1 is strong disagree and 5 is strongly agree. Ensure that all questions are not reverse scored and a 4 or 5 indicates a strong correlation with the trait in the question. Display the questions and answers in a JSON format without ANY plain text. JSON code should follow this example format \n\n{\n  \"questions\": [\n    {\n      \"question\": \"Did you enjoy meeting new people at the party?\",\n      \"trait\": \"extravertedness\",\n    },\n  ]\n}"
      },
      {
        "role": "user",
        "content": str
      }
    ],
    temperature: 1,
    max_tokens: 850,
    top_p: 1,
    frequency_penalty: 0.56,
    presence_penalty: 0,
  });

  const message = gptResponse.choices[0].message.content;

  if (typeof message == 'string') {
    res.status(200).json(JSON.parse(message));
  } else {
    res.status(500).json({ message: 'Error occurred in GPT API response.' });
  }
}
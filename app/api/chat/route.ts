import { google } from '@ai-sdk/google';
import { streamText } from 'ai';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    
    // Membaca file kepribadian jailbreak dari sifat.txt
    const filePath = path.join(process.cwd(), 'sifat.txt');
    const kepribadian = await fs.readFile(filePath, 'utf8');

    const result = await streamText({
      model: google('gemini-1.5-flash'),
      system: kepribadian, 
      messages,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Error backend:", error);
    return new Response("Server Error", { status: 500 });
  }
}

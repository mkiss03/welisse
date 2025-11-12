import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// System prompt for Alex
const SYSTEM_PROMPT = `Te Alex vagy, a Welisse barátságos AI asszisztense - egy modern webfejlesztő és AI integrációs cég.

Személyiséged:
- Barátságos, professzionális, kissé játékos
- Tech-tudatos, de nem túlzottan zsargonos
- Lelkes a projektekkel kapcsolatban
- Segítőkész és tanácsadó (nem tolakodó értékesítés)

Szereped:
- Válaszolj kérdésekre a Welisse szolgáltatásairól (webfejlesztés, egyedi szoftver, AI integráció)
- Kvalifikálj leadeket releváns kérdések feltevésével
- Mutass lelkesedést az érdekes projektek iránt
- Vezesd az ügyfeleket konzultáció időponthoz vagy ajánlatkéréshez

Szolgáltatások amiket megbeszélhetsz:

1. **Webfejlesztés**: Modern React/Next.js weboldalak, e-commerce, PWA-k, SEO optimalizálás
   - Árazás: 300k-1.5M Ft (komplexitástól függően)

2. **Egyedi Szoftver**: CRM rendszerek, admin dashboardok, API fejlesztés, workflow automatizálás
   - Árazás: 800k-2M Ft+

3. **AI Integráció**: ChatGPT/Claude chatbotok, email automatizálás, dokumentum feldolgozás, egyedi AI modellek
   - Árazás: 400k-2M Ft+

Portfólió kiemelések:
- HornetGarage (e-commerce + foglalás)
- Best Homes Espana (ingatlan platform)
- Vízvár Apartmanok (független foglalási rendszer)
- Mini CRM AI-jal (lead kezelés)

Tartsd a válaszokat társalgási stílusúnak, tömörnek (általában 2-4 mondat), és használj takarékosan emojikat.

Ha valaki az árakról kérdez, adj árréseket és magyarázd el, hogy a követelményektől függ, majd ajánld fel, hogy összekötöd őket a csapattal részletes ajánlatért.

Ha valaki projektet akar indítani, kérd el az email címét és mondd, hogy a csapat 24 órán belül jelentkezni fog.

Válaszolj mindig magyarul!`;

export async function POST(req: NextRequest) {
  try {
    // Initialize OpenAI client at runtime
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    const openai = new OpenAI({ apiKey });
    const { messages } = await req.json();

    const completion = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const assistantMessage = completion.choices[0]?.message?.content ||
      'Elnézést, nem tudtam választ generálni. Próbáld újra!';

    return NextResponse.json({ message: assistantMessage });

  } catch (error: any) {
    console.error('OpenAI API error:', error);
    return NextResponse.json(
      {
        error: 'Failed to get response from Alex',
        details: error.message
      },
      { status: 500 }
    );
  }
}

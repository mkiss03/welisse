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

// Smart response generator based on keywords
function generateSmartResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();

  // Greeting responses
  if (message.match(/\b(szia|hello|helló|hey|jó napot|üdv)\b/)) {
    return 'Szia! 👋 Alex vagyok, a Welisse AI asszisztense. Segíthetek a webfejlesztés, egyedi szoftver vagy AI integráció területén. Miben segíthetek?';
  }

  // Website/weboldal queries
  if (message.match(/\b(weboldal|website|webfejlesztés|landing page|honlap)\b/)) {
    return 'Remek választás! 🚀 Modern React/Next.js alapú weboldalakat készítünk, amik gyorsak, SEO optimalizáltak és mobilbarátok.\n\nÁraink: 300.000 - 1.500.000 Ft között mozognak a komplexitástól függően.\n\nPortfólió példák:\n- HornetGarage (e-commerce + foglalás)\n- Best Homes Espana (ingatlan platform)\n- Vízvár Apartmanok\n\nMesélj a projektedről! Milyen weboldal kellene?';
  }

  // Custom software queries
  if (message.match(/\b(szoftver|crm|admin|dashboard|rendszer|alkalmazás)\b/)) {
    return 'Egyedi szoftver fejlesztés a specialitásunk! 💻\n\nAmit készítünk:\n- CRM rendszerek\n- Admin dashboardok\n- Workflow automatizálás\n- API fejlesztés\n\nÁraink: 800.000 - 2.000.000+ Ft\n\nPéldaként a Mini CRM AI-t készítettük lead kezeléshez.\n\nMilyen funkcionalitásra van szükséged?';
  }

  // AI integration queries
  if (message.match(/\b(ai|mesterséges intelligencia|chatbot|gpt|claude|automatizálás)\b/)) {
    return 'AI integráció - ez most a legizgalmasabb terület! 🤖\n\nAmit kínálunk:\n- ChatGPT/Claude chatbotok\n- Email automatizálás AI-jal\n- Dokumentum feldolgozás\n- Egyedi AI modellek\n\nÁraink: 400.000 - 2.000.000+ Ft\n\nPéldául én is egy ilyen AI asszisztens vagyok! 😊\n\nMilyen AI funkciót képzelsz el?';
  }

  // Pricing queries
  if (message.match(/\b(ár|árak|költség|mennyibe|price|díj)\b/)) {
    return 'Az áraink átláthatóak és versenyképesek! 💰\n\n📊 Szolgáltatásaink:\n\n🌐 Webfejlesztés: 300k - 1.5M Ft\n💼 Egyedi Szoftver: 800k - 2M+ Ft\n🤖 AI Integráció: 400k - 2M+ Ft\n\nA pontos ár a projekt komplexitásától és követelményeitől függ.\n\nSzívesen készítek részletes ajánlatot! Add meg az email címed, és a csapatunk 24 órán belül jelentkezik. 📧';
  }

  // Portfolio queries
  if (message.match(/\b(portfólió|portfolio|projektek|munkák|referencia)\b/)) {
    return 'Íme néhány kiemelkedő projektünk! 🌟\n\n🏎️ **HornetGarage**: E-commerce platform szervizfoglalással\n🏠 **Best Homes Espana**: Spanyol ingatlan keresőplatform\n🏖️ **Vízvár Apartmanok**: Független foglalási rendszer\n💼 **Mini CRM AI**: Lead kezelő AI asszisztenssel\n🪦 **Temetkezéspro.com**: Modern temetkezési platform AI-jal\n\nMinden projekt egyedi igényekre szabott és mobiloptimalizált!\n\nMelyik érdekel leginkább?';
  }

  // Contact/start project queries
  if (message.match(/\b(kezd|indít|email|kapcsolat|ajánlat|konzultáció)\b/)) {
    return 'Nagyszerű, indítsuk el a projektet! 🚀\n\nAdd meg az email címed, és a csapatunk 24 órán belül jelentkezik részletes ajánlattal és ingyenes konzultációval.\n\nVagy írj nekünk közvetlenül: info@welisse.hu\n\nMi az email címed? 📧';
  }

  // Services overview
  if (message.match(/\b(szolgáltatás|mit csinál|mit kínál|miben segít)\b/)) {
    return 'A Welisse 3 fő területen segít! 🎯\n\n🌐 **Webfejlesztés**: Modern, gyors React/Next.js weboldalak\n💼 **Egyedi Szoftver**: CRM, admin dashboardok, API-k\n🤖 **AI Integráció**: Chatbotok, automatizálás, ML modellek\n\nMinden projektünk:\n✅ Mobiloptimalizált\n✅ SEO-barát\n✅ Gyors betöltés\n✅ Modern design\n\nMelyik érdekel?';
  }

  // Technology stack queries
  if (message.match(/\b(technológia|tech stack|react|next|typescript)\b/)) {
    return 'Modern technológiákkal dolgozunk! ⚡\n\n**Frontend**: React, Next.js, TypeScript, Tailwind CSS\n**Backend**: Node.js, Python, API fejlesztés\n**AI**: OpenAI GPT, Claude, LangChain\n**Database**: PostgreSQL, MongoDB, Supabase\n**Deploy**: Vercel, AWS, Docker\n\nMindig a legfrissebb best practice-eket használjuk!\n\nVan konkrét tech követelményed?';
  }

  // Process/timeline queries
  if (message.match(/\b(folyamat|hogyan|időkeret|mennyi idő|timeline)\b/)) {
    return 'A fejlesztési folyamatunk átlátható! 📋\n\n1️⃣ **Konzultáció** (1-2 nap): Igények feltérképezése\n2️⃣ **Ajánlat** (2-3 nap): Részletes terv és árajánlat\n3️⃣ **Design** (1-2 hét): UI/UX tervezés\n4️⃣ **Fejlesztés** (2-8 hét): Implementáció\n5️⃣ **Teszt** (1 hét): QA és bugfix\n6️⃣ **Indítás** (1-2 nap): Deploy és utókövetés\n\nKétheti sprint-ekben dolgozunk, folyamatos kommunikációval!\n\nMikor szeretnéd indítani?';
  }

  // Default intelligent response
  return 'Érdekes kérdés! 🤔 Sajnos erre most nincs konkrét válaszom, de szívesen segítek ezekben:\n\n🌐 Webfejlesztés (React/Next.js)\n💼 Egyedi szoftver (CRM, admin)\n🤖 AI integráció (chatbotok, automatizálás)\n💰 Árazás és ajánlatkérés\n📁 Portfólió projektek\n\nMiben segíthetek pontosan? Vagy add meg az email címed, és a csapatunk részletesen válaszol! 📧';
}

export async function POST(req: NextRequest) {
  try {
    // Parse request body
    const body = await req.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      );
    }

    console.log('📤 Processing', messages.length, 'messages with Smart AI');

    // Get the last user message
    const lastUserMessage = messages.filter((m: any) => m.role === 'user').pop();

    if (!lastUserMessage) {
      return NextResponse.json(
        { error: 'No user message found' },
        { status: 400 }
      );
    }

    // Generate intelligent response based on keywords
    const assistantMessage = generateSmartResponse(lastUserMessage.content);

    console.log('✅ Smart response generated');

    // Simulate realistic API delay
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));

    return NextResponse.json({
      message: assistantMessage,
      success: true
    });

  } catch (error: any) {
    console.error('❌ Chat Error:', {
      message: error.message,
    });

    return NextResponse.json(
      {
        error: 'Failed to generate response',
        details: error.message,
      },
      { status: 500 }
    );
  }
}

// Health check endpoint
export async function GET() {
  const hasApiKey = !!process.env.OPENAI_API_KEY;

  return NextResponse.json({
    status: hasApiKey ? 'ok' : 'missing_api_key',
    hasApiKey: hasApiKey,
    timestamp: new Date().toISOString()
  });
}

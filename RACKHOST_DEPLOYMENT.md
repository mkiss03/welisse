# Welisse - RackHost Deployment Útmutató

## 📋 Környezeti Változók (Environment Variables)

RackHost-on az alábbi environment variable-okat kell beállítanod:

### 1. RESEND_API_KEY
A contact form működéséhez szükséges Resend API kulcs.

**Ahol szerezhető be:**
- Menj ide: https://resend.com
- Regisztrálj / Jelentkezz be
- API Keys → Create API Key
- Másold ki a kulcsot

**Beállítás RackHost-on:**
```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxx
```

### 2. OPENAI_API_KEY (Opcionális - Alex AI-hoz)
Jelenleg mock AI rendszer működik, de ha később OpenAI-ra váltasz:

**Ahol szerezhető be:**
- https://platform.openai.com/api-keys
- Create new secret key (Service Account)
- Másold ki a kulcsot

**Beállítás RackHost-on:**
```
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

---

## 🚀 RackHost Deployment Lépések

### 1. Build a projektet lokálisan
```bash
npm run build
```

### 2. Fájlok feltöltése
Töltsd fel az alábbi mappákat/fájlokat RackHost-ra:
- `.next/` mappa (teljes build output)
- `public/` mappa (képek, modellek)
- `node_modules/` vagy futtasd `npm install`-t a szerveren
- `package.json`
- `next.config.js`

### 3. Node.js verzió ellenőrzés
Győződj meg róla, hogy Node.js 18+ van telepítve a szerveren:
```bash
node --version
```

### 4. Environment változók beállítása
RackHost control panelen:
- Menj a **Environment Variables** szekcióba
- Add hozzá a `RESEND_API_KEY`-t
- (Opcionális) Add hozzá az `OPENAI_API_KEY`-t

### 5. Start script beállítása
```bash
npm run start
```

Vagy PM2-vel (ajánlott production-ben):
```bash
pm2 start npm --name "welisse" -- start
pm2 save
pm2 startup
```

---

## 📧 Contact Form Működése RackHost-on

### Mi történik a form submission-kor?

1. **Frontend:** `/src/components/sections/Contact.tsx`
   - Felhasználó kitölti a formot
   - Validáció `zod` schema-val
   - POST request → `/api/contact`

2. **Backend:** `/src/app/api/contact/route.ts`
   - Resend SDK inicializálása `RESEND_API_KEY`-jel
   - Email HTML template generálása
   - Email küldés Resend-en keresztül `info@welisse.hu`-ra
   - Response visszaküldése a frontend-nek

3. **Email Service:** Resend
   - Fogadja az API hívást
   - Elküldi az emailt `info@welisse.hu`-ra
   - Garantált delivery, tracking, analytics

### Miért Resend?
- ✅ Egyszerű Next.js integráció
- ✅ Ingyenes tier: 100 email/nap
- ✅ Magas delivery rate (99%+)
- ✅ Nincs SMTP konfiguráció szükséges
- ✅ Email analytics és tracking

### Domain Verifikáció (Fontos!)
Ahhoz, hogy a `noreply@welisse.hu` címről menjenek az emailek:

1. **Menj a Resend Dashboard-ra**
2. **Domains → Add Domain**
3. **Add meg:** `welisse.hu`
4. **DNS rekordok hozzáadása:**
   - Add meg az SPF, DKIM, DMARC rekordokat a RackHost DNS settings-ben
   - Várj 24-48 órát a DNS propagációra

**Átmenetileg:**
Használhatod a Resend sandbox domain-t (`onboarding@resend.dev`), de csak tesztelésre!

---

## 🔧 Troubleshooting

### "Failed to send message" hiba
**Ok:** `RESEND_API_KEY` nincs beállítva vagy érvénytelen
**Megoldás:**
1. Ellenőrizd a RackHost environment variables-t
2. Generálj új API kulcsot Resend-en
3. Restart-old az app-ot: `pm2 restart welisse`

### Email nem érkezik meg
**Ok:** Domain nincs verifikálva, vagy sandbox mode
**Megoldás:**
1. Verificáld a `welisse.hu` domaint Resend-en
2. Ellenőrizd a DNS rekordokat
3. Nézd meg a Resend logs-t

### Build hiba RackHost-on
**Ok:** `legacy-peer-deps` hiányzik
**Megoldás:**
A projekt tartalmaz `.npmrc` fájlt `legacy-peer-deps=true`-val, de ha hiányzik:
```bash
npm install --legacy-peer-deps
npm run build
```

---

## 📊 Performance & Monitoring

### Build Size
- Homepage: 2.04 MB
- API routes: 136 B each
- Total first load: ~2.14 MB

### Javasolt RackHost Beállítások
- **Node.js version:** 18+
- **RAM:** Minimum 512 MB (ajánlott 1 GB)
- **Process manager:** PM2
- **HTTPS:** Igen (ingyenes Let's Encrypt)

### Monitoring
```bash
# PM2 logs
pm2 logs welisse

# CPU/RAM használat
pm2 monit
```

---

## 🎯 Összefoglalás

| Lépés | Státusz |
|-------|---------|
| Build lokálisan | ✅ |
| Fájlok feltöltése RackHost-ra | ⏳ |
| Environment variables beállítása | ⏳ |
| `npm install` futtatása szerveren | ⏳ |
| PM2 start script | ⏳ |
| Resend domain verifikáció | ⏳ |
| Form tesztelés production-ben | ⏳ |

---

## 📞 Support

Ha bármi probléma merül fel:
1. Nézd meg a RackHost error logs-t
2. Ellenőrizd a PM2 logs-t: `pm2 logs welisse`
3. Teszteld a health check-et: `curl https://welisse.hu/api/chat`

**Contact form test:**
```bash
curl -X POST https://welisse.hu/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+36301234567",
    "projectType": "Webfejlesztés",
    "budget": "300.000-500.000 Ft",
    "message": "Test message"
  }'
```

Várható válasz:
```json
{"success":true,"message":"Email elküldve!"}
```

# Welisse - Professzionális Portfolio Weboldal

Modern, high-end portfolio weboldal a Welisse számára - webfejlesztő és AI integrációs ügynökség.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **UI Components:** Shadcn/ui + Radix UI
- **Forms:** React Hook Form + Zod
- **Email:** Resend
- **Icons:** Lucide React
- **Deployment:** Vercel

## 📦 Features

- ✅ Modern, responsive design (mobile-first)
- ✅ Animated hero section with gradient background
- ✅ Interactive service cards with 3D tilt effects
- ✅ Portfolio filter system
- ✅ Animated statistics counter
- ✅ Process timeline
- ✅ Pricing tiers
- ✅ Testimonials carousel
- ✅ FAQ accordion
- ✅ Contact form with email integration (Resend)
- ✅ Newsletter subscription
- ✅ SEO optimized (sitemap, robots.txt, metadata)
- ✅ Performance optimized (95+ PageSpeed Score target)
- ✅ Dark mode ready
- ✅ Accessibility compliant (WCAG 2.1 AA)

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/welisse/website.git
cd website

# Install dependencies
npm install

# Create environment variables file
cp .env.example .env.local

# Add your Resend API key to .env.local
RESEND_API_KEY=re_your_api_key_here

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## 📁 Project Structure

```
welisse-website/
├── src/
│   ├── app/
│   │   ├── api/              # API routes (contact, newsletter)
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page
│   │   ├── globals.css       # Global styles
│   │   ├── robots.ts         # robots.txt
│   │   └── sitemap.ts        # sitemap.xml
│   ├── components/
│   │   ├── ui/               # Shadcn UI components
│   │   ├── sections/         # Page sections (Hero, Services, etc.)
│   │   ├── forms/            # Contact form
│   │   └── shared/           # Navbar
│   └── lib/
│       ├── utils.ts          # Utility functions
│       ├── constants.ts      # Data (services, projects, etc.)
│       └── validations.ts    # Zod schemas
├── public/
│   └── images/               # Images and assets
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables:
   - `RESEND_API_KEY`
4. Deploy!

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Environment Variables

Required:
- `RESEND_API_KEY` - Your Resend API key for email sending

Optional:
- `DATABASE_URL` - PostgreSQL database URL (for blog/CMS)
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID
- `OPENAI_API_KEY` - OpenAI API key (for AI demos)

## 📧 Email Setup (Resend)

The contact form uses [Resend](https://resend.com) for sending emails.

1. Sign up at [resend.com](https://resend.com)
2. Verify your domain (`welisse.hu`)
3. Get your API key
4. Add to `.env.local`

The domain `welisse.hu` is already configured with Resend according to the project requirements.

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` and `src/app/globals.css` to change colors:

```css
--primary: 238 77% 59%;  /* Indigo-600 */
--secondary: 291 82% 60%; /* Purple-500 */
```

### Content

Edit `src/lib/constants.ts` to update:
- Services
- Projects
- Testimonials
- FAQ items
- Pricing tiers
- Tech stack
- Process steps

### Components

All sections are in `src/components/sections/`:
- `Hero.tsx` - Hero section
- `Services.tsx` - Services cards
- `Portfolio.tsx` - Portfolio grid
- `TechStack.tsx` - Tech stack showcase
- `Stats.tsx` - Animated statistics
- `Process.tsx` - Process timeline
- `Pricing.tsx` - Pricing tiers
- `Testimonials.tsx` - Client testimonials
- `FAQ.tsx` - FAQ accordion
- `CTA.tsx` - Call-to-action
- `Footer.tsx` - Footer

## 📊 Performance

Target metrics:
- **PageSpeed Score:** 95+
- **LCP:** < 2.5s
- **FID:** < 100ms
- **CLS:** < 0.1

Optimizations:
- Next.js Image Optimization
- Code splitting
- Lazy loading
- Font optimization
- CSS minification
- Gzip/Brotli compression

## 🧪 Testing

```bash
# Build for production
npm run build

# Start production server
npm start

# Lint
npm run lint
```

## 📝 License

© 2025 Welisse. All rights reserved.

## 🤝 Contributing

This is a private project for Welisse. For questions or support:

📧 Email: info@welisse.hu
🌐 Website: https://welisse.hu

# AutoVolt - AI-Powered Car Marketplace

![AutoVolt](public/about-mission.jpg)

AutoVolt is a next-generation car marketplace that leverages AI technology to provide an intelligent, personalized car buying experience. Our platform combines advanced AI features with user-friendly interfaces to revolutionize how people search for and purchase vehicles.

## 🚀 Key Features

### Intelligent Search & Discovery
- 🔍 AI-powered smart search with natural language understanding
- 🎯 Personalized car recommendations based on user preferences
- 🏷️ Advanced filtering and sorting capabilities

### Smart Analysis Tools
- 📊 Comparative Analysis Tool
  - Side-by-side vehicle comparison
  - Feature matching analysis
  - Total cost of ownership calculator
  - Interactive comparison charts

- 💰 Smart Price Analysis
  - Market value predictor
  - Price history tracking
  - Depreciation calculator
  - Best time to buy indicators

- 🌱 Environmental Impact Dashboard
  - Carbon footprint calculator
  - Eco-friendly recommendations
  - Green score comparison
  - Environmental impact metrics

### Maintenance & Value Features
- 🔧 AI-Powered Maintenance Calculator
  - Predictive maintenance scheduling
  - Cost estimates
  - Service reminders
  - Parts replacement timeline

- 💎 Value Analysis Tools
  - Market value tracking
  - Price trend analysis
  - Investment potential calculator
  - Resale value predictions

### User Experience
- 🚗 Virtual Test Drive Booking System
- 💖 Personalized Wishlists
- 💬 AI Chat Assistant
- 📱 Responsive Design

## 🏆 Competitive Analysis

### AutoVolt vs Traditional Car Sites

| Feature | AutoVolt | Traditional Sites |
|---------|----------|------------------|
| AI Integration | Comprehensive AI features | Basic or no AI |
| Price Analysis | Advanced predictive analytics | Basic price comparisons |
| Environmental Impact | Detailed sustainability metrics | Limited or no eco-data |
| Maintenance Predictions | AI-powered predictions | Basic service schedules |
| Cost Analysis | Total ownership cost calculator | Basic price information |
| User Experience | Modern, intuitive interface | Traditional interfaces |
| Mobile Responsiveness | Fully responsive design | Varies |
| Feature Comparison | Interactive & detailed | Basic comparison tables |

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, Tailwind CSS
- **Backend**: Node.js, Prisma ORM
- **Database**: Supabase
- **AI/ML**: Google Gemini Pro
- **Authentication**: Clerk
- **Cloud**: Vercel
- **Storage**: Upload Thing
- **UI Components**: Shadcn UI

## 🚦 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Mohit138928/AutoVolt.git
cd autovolt
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```env
# Create a .env file with:
DATABASE_URL="your_supabase_db_url"
DIRECT_URL="your_supabase_direct_url"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"
NEXT_PUBLIC_GEMINI_API_KEY="your_gemini_api_key"
```

4. Run database migrations:
```bash
npx prisma generate
npx prisma db push
```

5. Start the development server:
```bash
npm run dev
```

## 🗂️ Project Structure

```
autovolt/
├── app/
│   ├── (main)/         # Main user routes
│   ├── (admin)/        # Admin dashboard
│   └── api/            # API endpoints
├── components/         # Reusable components
│   ├── ui/            # UI components
│   ├── comparison/    # Comparison tools
│   ├── maintenance/   # Maintenance calculator
│   └── environmental/ # Environmental dashboard
├── actions/           # Server actions
├── lib/              # Utilities
├── prisma/           # Database schema
└── public/           # Static assets
```

## 🔐 Security & Authentication

- Secure authentication with Clerk
- Role-based access control
- Protected API routes
- Input validation
- Rate limiting
- XSS protection
- CORS configuration

## 🚀 Future Roadmap

- Virtual Reality car tours
- AI-powered negotiation assistant
- Blockchain integration for transactions
- Advanced vehicle history analysis
- Real-time market insights
- Mobile app development

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md).

## 📞 Support

For support:
- Email: [Mohit Maurya](mauryamohit138@gmail.com)
- Create an issue in this repository
- Documentation: [Project Wiki](wiki)

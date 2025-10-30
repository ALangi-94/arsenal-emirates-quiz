# Arsenal x Emirates - Find Your Perfect Destination Quiz

An interactive travel quiz experience that matches users with their perfect destination through Arsenal FC players, powered by Emirates.

## Features

- 🎯 **15 Deep Questions** - Comprehensive quiz covering travel personality, lifestyle, and psychographics
- ✈️ **8 Destinations** - Curated destinations matched with Arsenal players
- 🎨 **Beautiful Design** - Arsenal and Emirates brand colors with smooth animations
- 📱 **Mobile Responsive** - Optimized for all devices
- 📧 **Email Capture** - Subscribe gate before results reveal
- 🔄 **Social Sharing** - Share results on Twitter, Facebook, and LinkedIn
- ⚡ **Fast Performance** - Built with Vite and React

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
arsenalxemirates/
├── src/
│   ├── components/
│   │   ├── IntroScreen.jsx      # Landing page
│   │   ├── QuizQuestion.jsx     # Quiz question component
│   │   ├── ProgressBar.jsx      # Progress indicator
│   │   ├── SubscribeGate.jsx    # Email capture form
│   │   └── ResultsScreen.jsx    # Results display
│   ├── data/
│   │   ├── questions.js         # Quiz questions data
│   │   └── destinations.js      # Destinations & players data
│   ├── utils/
│   │   └── calculateResult.js   # Result algorithm
│   ├── styles/
│   │   └── globals.css          # Global styles
│   ├── App.jsx                  # Main app component
│   └── main.jsx                 # Entry point
├── public/
│   └── images/                  # Image assets (to be added)
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment

Alternatively, connect your GitHub repository to Vercel for automatic deployments.

## Assets Needed

To fully complete the project, you'll need to add these images to the `public/images/` directory:

### Player Images (`public/images/players/`)
- odegaard.jpg
- tomiyasu.jpg
- saka.jpg
- arteta.jpg
- saliba.jpg
- jesus.jpg
- martinelli.jpg
- havertz.jpg

### Destination Images (`public/images/destinations/`)
- dubai.jpg
- tokyo.jpg
- london.jpg
- barcelona.jpg
- paris.jpg
- rio.jpg
- los-angeles.jpg
- bali.jpg

### Logos (`public/images/logos/`)
- arsenal-logo.png
- emirates-logo.png

**Note:** The app will work without images, but placeholder colors will be shown.

## Customization

### Brand Colors

Colors are defined in `tailwind.config.js`:

- Arsenal Red: `#EF0107`
- Arsenal Navy: `#023474`
- Arsenal Gold: `#9C824A`
- Emirates Red: `#D71921`
- Emirates Gold: `#D4AF37`

### Fonts

Three custom fonts are used:
- **Bebas Neue** - Headings (Arsenal feel)
- **Inter** - Body text (Emirates feel)
- **Montserrat** - Accents (Player names)

## Data Capture

The quiz captures:
- Email address
- First name
- Last name (optional)
- LinkedIn profile (optional)
- Email consent
- Terms agreement

User data and quiz results are logged to console. Integrate with your backend API in `App.jsx` > `handleSubscribe()` function.

## Result Algorithm

The matching algorithm:
1. Calculates trait scores (energy, luxury, culture, relaxation) from all answers
2. Compares user traits with each destination's trait profile
3. Returns the best match with percentage
4. Considers all 15 questions equally weighted

## Analytics

Add analytics tracking in the following locations:
- Quiz start: `IntroScreen.jsx` > `onStart`
- Question answered: `QuizQuestion.jsx` > `handleSelect`
- Email submitted: `SubscribeGate.jsx` > `handleSubmit`
- Results shown: `ResultsScreen.jsx` > component mount
- Social share: `ResultsScreen.jsx` > `handleShare`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

Private project for Arsenal FC x Emirates activation.

## Contact

For questions or issues, contact the development team.

# Deployment Guide

## Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import this Git repository (push to GitHub first if needed)
4. Vercel will auto-detect the Vite framework
5. Click "Deploy"
6. Your app will be live at `your-project-name.vercel.app`

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts to complete deployment

### Option 3: GitHub Integration (Best for continuous deployment)

1. Push this code to a GitHub repository:
```bash
# Create a new repo on github.com first, then:
git remote add origin https://github.com/yourusername/arsenal-emirates-quiz.git
git push -u origin master
```

2. Go to [vercel.com/import](https://vercel.com/import)
3. Import your GitHub repository
4. Vercel will automatically deploy on every push to main/master

---

## Deploy to Other Platforms

### Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build the project:
```bash
npm run build
```

3. Deploy:
```bash
netlify deploy --prod --dir=dist
```

### GitHub Pages

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Add to package.json scripts:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

3. Update vite.config.js with base URL:
```js
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
})
```

4. Deploy:
```bash
npm run deploy
```

### AWS Amplify

1. Install Amplify CLI:
```bash
npm install -g @aws-amplify/cli
```

2. Initialize Amplify:
```bash
amplify init
```

3. Add hosting:
```bash
amplify add hosting
```

4. Publish:
```bash
amplify publish
```

---

## Environment Variables (if needed)

If you add any API keys or sensitive data:

1. Create a `.env` file (already in .gitignore):
```env
VITE_API_KEY=your_api_key_here
VITE_BACKEND_URL=your_backend_url
```

2. Add to Vercel:
   - Go to Project Settings > Environment Variables
   - Add each variable
   - Redeploy

3. Access in code:
```javascript
const apiKey = import.meta.env.VITE_API_KEY;
```

---

## Post-Deployment Checklist

- [ ] Test the quiz on mobile devices
- [ ] Verify all 15 questions work
- [ ] Test the subscribe form submission
- [ ] Check social share buttons
- [ ] Verify results screen displays correctly
- [ ] Test on different browsers (Chrome, Safari, Firefox)
- [ ] Check loading performance with Lighthouse
- [ ] Set up custom domain (optional)
- [ ] Configure analytics (Google Analytics, Vercel Analytics, etc.)

---

## Custom Domain Setup (Vercel)

1. Go to Project Settings > Domains
2. Add your custom domain (e.g., quiz.arsenalemirates.com)
3. Update DNS records as instructed by Vercel
4. Wait for DNS propagation (5-48 hours)
5. Your app will be live on your custom domain

---

## Monitoring & Analytics

### Vercel Analytics

Add to your project:
```bash
npm install @vercel/analytics
```

Update `src/main.jsx`:
```javascript
import { Analytics } from '@vercel/analytics/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>,
)
```

### Google Analytics

Add to `index.html` in the `<head>` section:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## Troubleshooting

### Build Fails

1. Check Node version (should be 18+):
```bash
node --version
```

2. Clear cache and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routes Don't Work

Make sure `vercel.json` has the rewrites configuration (already included).

### Styles Not Loading

Check that Tailwind is properly configured and `globals.css` is imported in `main.jsx`.

---

## Need Help?

- Vercel Documentation: https://vercel.com/docs
- Vite Documentation: https://vitejs.dev/guide/
- Project Issues: Check the README.md file

# 🚀 Deployment Guide

This guide will help you deploy your portfolio to various platforms.

## 📋 Pre-Deployment Checklist

### 1. **Environment Variables**
Copy `env.example` to `.env.local` and fill in your details:
```bash
cp env.example .env.local
```

### 2. **EmailJS Setup**
1. Create account at [EmailJS](https://www.emailjs.com/)
2. Create a service (Gmail, Outlook, etc.)
3. Create an email template
4. Update `src/components/AnimatedContact.tsx` with your IDs

### 3. **Personal Information**
Update these files with your information:
- `src/components/AnimatedHero.tsx` - Name, role, description
- `src/components/AnimatedProjects.tsx` - Your actual projects
- `src/components/Footer.tsx` - Contact info and social links
- `src/app/layout.tsx` - SEO metadata
- `src/components/StructuredData.tsx` - Structured data

### 4. **Assets**
- Replace `public/adnan-photo.jpg` with your photo
- Add your CV to `public/cv/` folder
- Create favicon and PWA icons (192x192, 512x512)

## 🌐 Deployment Platforms

### Vercel (Recommended)

#### Method 1: GitHub Integration
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure environment variables in Vercel dashboard
6. Deploy!

#### Method 2: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Set environment variables
vercel env add NEXT_PUBLIC_EMAILJS_SERVICE_ID
vercel env add NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
vercel env add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

# Redeploy with env vars
vercel --prod
```

### Netlify

1. Build the project:
```bash
npm run build
npm run export  # if using static export
```

2. Deploy to Netlify:
   - Drag and drop `out` folder to Netlify
   - Or connect GitHub repository

3. Configure environment variables in Netlify dashboard

### Railway

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Initialize project
railway init

# Deploy
railway up
```

### DigitalOcean App Platform

1. Connect your GitHub repository
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
3. Add environment variables
4. Deploy

## 🔧 Build Configuration

### Static Export (Optional)
If you want to deploy as static files:

1. Update `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

2. Add export script to `package.json`:
```json
{
  "scripts": {
    "export": "next export"
  }
}
```

3. Build and export:
```bash
npm run build
npm run export
```

## 🌍 Custom Domain

### Vercel
1. Go to your project dashboard
2. Click "Domains"
3. Add your custom domain
4. Configure DNS records as shown

### Netlify
1. Go to "Domain settings"
2. Add custom domain
3. Configure DNS or use Netlify DNS

## 📊 Analytics Setup

### Google Analytics
1. Create GA4 property
2. Add measurement ID to environment variables:
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Vercel Analytics
1. Enable in Vercel dashboard
2. No additional setup required

## 🔒 Security Headers

Add to `next.config.js`:
```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  }
}
```

## 🚀 Performance Optimization

### Image Optimization
- Use WebP/AVIF formats
- Optimize images before uploading
- Use appropriate sizes for different devices

### Bundle Analysis
```bash
# Install bundle analyzer
npm install --save-dev @next/bundle-analyzer

# Analyze bundle
npm run build
npm run analyze
```

### Lighthouse Audit
1. Open deployed site in Chrome
2. Open DevTools (F12)
3. Go to Lighthouse tab
4. Run audit
5. Fix any issues

## 🔍 SEO Checklist

- [ ] Meta titles and descriptions
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] Structured data (JSON-LD)
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] Google Search Console setup
- [ ] Bing Webmaster Tools setup

## 📱 PWA Setup

The portfolio includes PWA capabilities:
- Service worker for offline support
- Web app manifest
- Installable on mobile devices

Test PWA features:
1. Open site on mobile
2. Check for "Add to Home Screen" prompt
3. Test offline functionality

## 🐛 Troubleshooting

### Common Issues

**Build Fails:**
- Check TypeScript errors: `npm run type-check`
- Check linting: `npm run lint`
- Verify all environment variables are set

**Contact Form Not Working:**
- Verify EmailJS configuration
- Check browser console for errors
- Test EmailJS service separately

**Images Not Loading:**
- Check image paths are correct
- Verify images exist in public folder
- Check Next.js image optimization settings

**Styling Issues:**
- Clear browser cache
- Check Tailwind CSS compilation
- Verify CSS imports

### Debug Commands
```bash
# Check build locally
npm run build
npm run start

# Type checking
npm run type-check

# Linting
npm run lint

# Bundle analysis
npm run analyze
```

## 📞 Support

If you encounter issues:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Search existing issues on GitHub
3. Create a new issue with detailed information

## 🎉 Post-Deployment

After successful deployment:
1. Test all functionality
2. Submit to Google Search Console
3. Share on social media
4. Update your resume/CV with the new portfolio URL
5. Monitor analytics and performance

---

**Happy Deploying! 🚀**

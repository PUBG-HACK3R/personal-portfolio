# 🚀 Quick Maintenance Commands

## For Local Development

Create `.env.local` file in project root:

```bash
# Enable maintenance mode
echo "NEXT_PUBLIC_MAINTENANCE_MODE=true" > .env.local

# Disable maintenance mode  
echo "NEXT_PUBLIC_MAINTENANCE_MODE=false" > .env.local

# Test locally
npm run dev
```

## For Production (Vercel)

### Method 1: Vercel Dashboard
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Set `NEXT_PUBLIC_MAINTENANCE_MODE` to `true` or `false`
3. Redeploy the project

### Method 2: Vercel CLI (if you have it installed)
```bash
# Enable maintenance
vercel env add NEXT_PUBLIC_MAINTENANCE_MODE production
# Enter: true

# Disable maintenance
vercel env add NEXT_PUBLIC_MAINTENANCE_MODE production  
# Enter: false

# Redeploy
vercel --prod
```

## Git Workflow with Maintenance

```bash
# 1. Enable maintenance mode (via Vercel dashboard)

# 2. Make your changes
git add .
git commit -m "Your update message"
git push origin main

# 3. Wait for deployment to complete

# 4. Disable maintenance mode (via Vercel dashboard)
```

---
**Pro Tip**: Always enable maintenance mode BEFORE making major changes to avoid showing broken states to visitors!

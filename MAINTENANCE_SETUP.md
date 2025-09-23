# 🔧 Maintenance Mode Setup Guide

Your portfolio now has a maintenance mode system! Here's how to use it:

## 🚀 Quick Setup

### Option 1: Using Vercel Environment Variables (Recommended)

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your portfolio project
3. Go to **Settings** → **Environment Variables**
4. Add a new environment variable:
   - **Name**: `NEXT_PUBLIC_MAINTENANCE_MODE`
   - **Value**: `false` (to keep site live) or `true` (to enable maintenance)
   - **Environment**: Production, Preview, Development (select all)
5. Click **Save**
6. **Important**: After changing this variable, you need to redeploy your site for changes to take effect

### Option 2: Using Local Environment File

1. Create a file named `.env.local` in your project root
2. Add this line to the file:
   ```
   NEXT_PUBLIC_MAINTENANCE_MODE=false
   ```
3. Change `false` to `true` when you want to enable maintenance mode
4. Commit and push to GitHub to deploy changes

## 🛠️ How to Enable/Disable Maintenance Mode

### To Enable Maintenance Mode:
1. **Via Vercel Dashboard**:
   - Change `NEXT_PUBLIC_MAINTENANCE_MODE` to `true`
   - Redeploy your site (go to Deployments → click "..." → Redeploy)

2. **Via Local Development**:
   - Set `NEXT_PUBLIC_MAINTENANCE_MODE=true` in your `.env.local`
   - Push changes to GitHub

### To Disable Maintenance Mode:
1. **Via Vercel Dashboard**:
   - Change `NEXT_PUBLIC_MAINTENANCE_MODE` to `false`
   - Redeploy your site

2. **Via Local Development**:
   - Set `NEXT_PUBLIC_MAINTENANCE_MODE=false` in your `.env.local`
   - Push changes to GitHub

## 🎨 Customizing the Maintenance Page

The maintenance page is located at `src/components/MaintenanceMode.tsx`. You can customize:

- **Contact Information**: Update email and GitHub links
- **Messages**: Change the maintenance message and description
- **Styling**: Modify colors, animations, and layout
- **Additional Features**: Add estimated completion time, progress bars, etc.

## 🔄 Typical Maintenance Workflow

1. **Before Making Changes**:
   ```bash
   # Enable maintenance mode in Vercel dashboard
   # Set NEXT_PUBLIC_MAINTENANCE_MODE=true and redeploy
   ```

2. **Make Your Changes Locally**:
   ```bash
   # Work on your portfolio improvements
   git add .
   git commit -m "Add new features"
   ```

3. **Test Changes**:
   ```bash
   npm run dev
   # Test your changes locally
   ```

4. **Deploy Updates**:
   ```bash
   git push origin main
   # Wait for Vercel to deploy
   ```

5. **Disable Maintenance Mode**:
   ```bash
   # Set NEXT_PUBLIC_MAINTENANCE_MODE=false in Vercel dashboard
   # Redeploy to make site live again
   ```

## 📱 What Visitors See

When maintenance mode is enabled, visitors will see:
- A beautiful animated maintenance page
- Information about the maintenance
- Your contact information
- Current time display
- Professional messaging about updates

## 🚨 Important Notes

- Always test your changes locally before deploying
- The maintenance page is responsive and works on all devices
- Environment variables in Vercel require a redeploy to take effect
- Keep maintenance periods as short as possible for better user experience

## 🛡️ Security

- The `NEXT_PUBLIC_` prefix makes this variable available to the browser
- This is safe since it only controls a visual state, not sensitive data
- No sensitive information is exposed in the maintenance mode

---

**Need help?** Check the component file at `src/components/MaintenanceMode.tsx` for customization options!

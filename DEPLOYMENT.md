# Deployment Guide for Opensea Marine Website

This guide covers multiple deployment options for your Next.js website.

## Option 1: Vercel (Recommended - Easiest)

Vercel is made by the creators of Next.js and offers the best integration.

### Steps:

1. **Install Vercel CLI** (optional, for local deployment):
   ```bash
   npm i -g vercel
   ```

2. **Deploy via Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub, GitLab, or Bitbucket
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Deploy via CLI**:
   ```bash
   cd opensea-marine-website
   vercel
   ```
   Follow the prompts. For production:
   ```bash
   vercel --prod
   ```

4. **Custom Domain**:
   - In Vercel dashboard, go to Project Settings → Domains
   - Add your domain (e.g., opensea.com.ng)
   - Follow DNS configuration instructions

### Advantages:
- ✅ Zero configuration needed
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic deployments on git push
- ✅ Preview deployments for PRs
- ✅ Free tier available

---

## Option 2: Netlify

### Steps:

1. **Create `netlify.toml`** (already created below)

2. **Deploy via Netlify Dashboard**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy site"

3. **Deploy via CLI**:
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod
   ```

---

## Option 3: Docker + Any Cloud Provider

### Create Dockerfile:

```dockerfile
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### Update `next.config.js`:

```javascript
const nextConfig = {
  output: 'standalone',
  // ... rest of config
}
```

Then deploy to:
- AWS (ECS, EC2, Elastic Beanstalk)
- Google Cloud Run
- Azure Container Instances
- DigitalOcean App Platform
- Railway
- Render

---

## Option 4: Traditional VPS (Ubuntu/Debian)

### Steps:

1. **SSH into your server**

2. **Install Node.js**:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Install PM2** (process manager):
   ```bash
   sudo npm install -g pm2
   ```

4. **Clone and setup**:
   ```bash
   git clone <your-repo-url>
   cd opensea-marine-website
   npm install
   npm run build
   ```

5. **Start with PM2**:
   ```bash
   pm2 start npm --name "opensea-marine" -- start
   pm2 save
   pm2 startup
   ```

6. **Setup Nginx reverse proxy**:
   ```bash
   sudo apt install nginx
   ```

   Create `/etc/nginx/sites-available/opensea-marine`:
   ```nginx
   server {
       listen 80;
       server_name opensea.com.ng www.opensea.com.ng;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   Enable site:
   ```bash
   sudo ln -s /etc/nginx/sites-available/opensea-marine /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

7. **Setup SSL with Let's Encrypt**:
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d opensea.com.ng -d www.opensea.com.ng
   ```

---

## Pre-Deployment Checklist

- [ ] Test build locally: `npm run build`
- [ ] Test production build: `npm run build && npm start`
- [ ] Verify all images are in `/public/images/`
- [ ] Check environment variables (if any)
- [ ] Update domain in `app/layout.tsx` metadata if needed
- [ ] Verify logo.png exists in `/public/images/`
- [ ] Test all pages load correctly
- [ ] Check mobile responsiveness

---

## Environment Variables (if needed)

If you need environment variables, create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://opensea.com.ng
```

For Vercel/Netlify, add these in the dashboard under Settings → Environment Variables.

---

## Recommended: Vercel

For the easiest deployment experience, we recommend Vercel. It's free for personal projects and handles everything automatically.

### Quick Start with Vercel:

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to vercel.com and sign in
3. Click "New Project"
4. Import your repository
5. Click "Deploy" (no configuration needed!)

Your site will be live in ~2 minutes at a URL like: `opensea-marine-website.vercel.app`

Then add your custom domain in the Vercel dashboard.

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
- Netlify Docs: https://docs.netlify.com





# FTP Deployment Guide for Opensea Marine Website

This guide will help you deploy your Next.js website to your WordPress hosting via FTP.

## Step 1: Build Static Files

First, build the website as static HTML/CSS/JS files:

```bash
cd opensea-marine-website
npm install
npm run build
```

This will create an `out` folder with all the static files ready for FTP upload.

## Step 2: Prepare Files for Upload

After building, you'll have an `out` folder containing:
- `index.html` (homepage)
- `about/`, `contact/`, `services/` folders (other pages)
- `_next/` folder (JavaScript and CSS files)
- `images/` folder (your images)

## Step 3: FTP Upload Instructions

### Option A: Replace WordPress Site Entirely

If you want to replace your WordPress site with this Next.js site:

1. **Backup your current WordPress site first!**

2. **Connect via FTP** using:
   - Host: `ftp.yourdomain.com` or your server IP
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: Usually 21

3. **Navigate to your web root directory** (usually one of these):
   - `/public_html/`
   - `/www/`
   - `/htdocs/`
   - `/httpdocs/`

4. **Upload all files from the `out` folder**:
   - Upload everything inside `out/` to your web root
   - Make sure `index.html` is in the root directory
   - Upload `_next/` folder (contains JavaScript/CSS)
   - Upload `images/` folder (contains your images)

5. **File structure should look like this on server**:
   ```
   /public_html/
     ├── index.html
     ├── about/
     │   └── index.html
     ├── contact/
     │   └── index.html
     ├── services/
     │   ├── index.html
     │   ├── aht-vessels/
     │   │   └── index.html
     │   └── ...
     ├── _next/
     │   ├── static/
     │   └── ...
     └── images/
         ├── logo.png
         ├── AHT2.jpeg
         └── ...
   ```

### Option B: Deploy to Subdirectory

If you want to keep WordPress and add this site to a subdirectory (e.g., `/new-site/`):

1. **Create a subdirectory** on your server (e.g., `new-site`)

2. **Upload all files from `out/`** into that subdirectory

3. **Access the site at**: `https://opensea.com.ng/new-site/`

## Step 4: Verify Upload

1. Visit your website URL
2. Check that all pages load correctly
3. Verify images are displaying
4. Test navigation links

## Step 5: Update .htaccess (if needed)

If you're using Apache and having issues with routing, create/update `.htaccess` in your web root:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Handle Next.js static files
  RewriteRule ^_next/static/(.*)$ /_next/static/$1 [L]
  
  # Handle all other routes
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.*)$ /$1/index.html [L]
</IfModule>

# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

## Troubleshooting

### Images Not Loading
- Check that `/images/` folder was uploaded correctly
- Verify image paths in browser console (F12)
- Ensure images are in `/public/images/` before building

### 404 Errors on Pages
- Make sure all folders from `out/` were uploaded
- Check that `index.html` files exist in each page folder
- Verify `.htaccess` is configured correctly

### CSS/JavaScript Not Loading
- Ensure `_next/` folder was uploaded completely
- Check browser console for 404 errors
- Verify file permissions (should be 644 for files, 755 for folders)

### Build Errors
- Run `npm run build` locally first to catch errors
- Check that all dependencies are installed: `npm install`
- Verify Node.js version (should be 18+)

## Quick Deployment Script

Create a file `deploy.sh` (for Mac/Linux) or `deploy.bat` (for Windows):

**deploy.sh** (Mac/Linux):
```bash
#!/bin/bash
echo "Building static site..."
npm run build
echo "Build complete! Files are in the 'out' folder."
echo "Upload everything in 'out/' to your FTP server."
```

**deploy.bat** (Windows):
```batch
@echo off
echo Building static site...
call npm run build
echo Build complete! Files are in the 'out' folder.
echo Upload everything in 'out/' to your FTP server.
pause
```

## Recommended FTP Clients

- **FileZilla** (Free, cross-platform): https://filezilla-project.org
- **Cyberduck** (Free, Mac/Windows): https://cyberduck.io
- **WinSCP** (Free, Windows): https://winscp.net

## File Permissions

After uploading, set correct permissions via FTP client or cPanel:
- Files: `644` (rw-r--r--)
- Folders: `755` (rwxr-xr-x)

## Updating the Site

When you make changes:

1. Make your changes locally
2. Run `npm run build` again
3. Upload only the changed files (or upload everything from `out/` again)
4. Clear browser cache to see changes

## Need Help?

- Check browser console (F12) for errors
- Verify all files uploaded correctly
- Test locally first: `npm run build && npx serve out`




# Fixing Subdirectory Deployment Issues

## Problem: 404 Error in Subdirectory

When you upload to a subdirectory like `/latest/`, WordPress might intercept the route and show a 404 error.

## Solution 1: Add .htaccess to Subdirectory

The `.htaccess` file needs to be **inside** your subdirectory folder.

### Steps:

1. **Make sure `.htaccess` is in the `latest/` folder** (not just in `out/`)
   - It should be at: `/latest/.htaccess`
   - Not at: `/public_html/.htaccess` (that's for root)

2. **Create a custom `.htaccess` for subdirectory**:

Create this file and upload it to `/latest/.htaccess`:

```apache
# Next.js Static Export - Subdirectory Configuration
# This file should be in /latest/.htaccess

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /latest/
  
  # Handle Next.js static files
  RewriteRule ^_next/static/(.*)$ /latest/_next/static/$1 [L]
  
  # Handle images and other static assets
  RewriteCond %{REQUEST_FILENAME} -f
  RewriteRule ^ - [L]
  
  # Handle all routes - redirect to index.html in subdirectories
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_URI} ^/latest/(.+)/$
  RewriteRule ^ %1/index.html [L]
  
  # Handle root of subdirectory
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.*)$ /latest/$1/index.html [L]
</IfModule>

# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

3. **Upload this `.htaccess` to `/latest/` folder**

4. **Clear browser cache** and try again

## Solution 2: Check File Structure

Make sure your file structure on the server is:

```
/public_html/
  ├── latest/              ← Your subdirectory
  │   ├── .htaccess       ← MUST be here!
  │   ├── index.html
  │   ├── 404.html
  │   ├── _next/
  │   ├── about/
  │   ├── contact/
  │   ├── services/
  │   └── images/
  └── (WordPress files)
```

## Solution 3: WordPress .htaccess Conflict

WordPress's `.htaccess` in root might be interfering. Check if `/public_html/.htaccess` has rules that conflict.

### Option A: Exclude subdirectory from WordPress rules

Edit `/public_html/.htaccess` and add this at the top:

```apache
# Exclude /latest/ from WordPress rules
RewriteCond %{REQUEST_URI} ^/latest/
RewriteRule ^ - [L]
```

### Option B: Use a different subdirectory name

Try a name WordPress doesn't recognize:
- `/new-site/`
- `/v2/`
- `/2024/`
- `/opensea-new/`

## Solution 4: Direct Access Test

Test if files are accessible directly:

1. Try: `https://opensea.com.ng/latest/index.html`
2. Try: `https://opensea.com.ng/latest/about/index.html`

If these work but `/latest/` doesn't, it's a routing issue.

## Solution 5: Move to Root (Easier)

If subdirectory keeps causing issues, move to root:

1. **Backup WordPress files** to `wordpress-backup/` folder
2. **Move Next.js files** from `/latest/` to `/public_html/`
3. **Upload root `.htaccess`** to `/public_html/.htaccess`
4. **Test at**: `https://opensea.com.ng/`

## Quick Diagnostic Checklist

- [ ] `.htaccess` file exists in `/latest/` folder
- [ ] `.htaccess` has `RewriteBase /latest/`
- [ ] All files from `out/` are in `/latest/`
- [ ] `index.html` exists in `/latest/`
- [ ] `_next/` folder exists in `/latest/`
- [ ] Direct file access works (`/latest/index.html`)
- [ ] WordPress `.htaccess` doesn't block `/latest/`

## Still Not Working?

Try accessing:
- `https://opensea.com.ng/latest/index.html` (should work)
- `https://opensea.com.ng/latest/about/` (should work)

If direct file access works but routing doesn't, the `.htaccess` needs fixing.


# Quick FTP Deployment Guide

## ✅ Your site is ready to upload!

The static files have been built and are in the `out/` folder.

## 📤 Upload Steps

1. **Open your FTP client** (FileZilla, Cyberduck, etc.)

2. **Connect to your server**:
   - Host: `ftp.opensea.com.ng` or your server IP
   - Username: Your FTP username
   - Password: Your FTP password

3. **Navigate to your web root** (usually `/public_html/` or `/www/`)

4. **Upload everything from the `out/` folder**:
   - Select all files and folders in `out/`
   - Upload to your web root
   - **Important**: Upload the CONTENTS of `out/`, not the `out/` folder itself

5. **File structure on server should be**:
   ```
   /public_html/
     ├── index.html          ← Homepage
     ├── .htaccess          ← Apache config (upload this too!)
     ├── about/
     ├── contact/
     ├── services/
     ├── _next/             ← JavaScript & CSS
     └── images/            ← Your images
   ```

## 🎯 Quick Commands

**To rebuild after changes:**
```bash
npm run build
```

**To test locally before uploading:**
```bash
npx serve out
```
Then visit http://localhost:3000

## ⚠️ Important Notes

- **Backup your WordPress site first** if you're replacing it
- **Handle old files**: See `FTP_CLEANUP_GUIDE.md` for detailed instructions
- Upload `.htaccess` file for proper routing
- Make sure all folders upload (not just files)
- Set file permissions: Files = 644, Folders = 755

## 🗑️ What About Old WordPress Files?

You have 3 options:

### Option 1: Replace Everything (Full Migration)
- **Backup first!** Download entire site
- Delete WordPress files: `wp-admin/`, `wp-content/`, `wp-includes/`, `wp-*.php`
- Upload new Next.js files
- **See `FTP_CLEANUP_GUIDE.md` for complete list**

### Option 2: Test in Subdirectory (Safest)
- Create folder: `new-site/` or `v2/`
- Upload Next.js files there
- Test at `https://opensea.com.ng/new-site/`
- Move to root later if everything works

### Option 3: Keep Both
- Keep WordPress at root
- Upload Next.js to subdirectory
- Use both as needed

## 🔍 Verify After Upload

1. Visit your website URL
2. Check all pages load
3. Verify images display
4. Test navigation

## 📁 What to Upload

Upload these from the `out/` folder:
- ✅ `index.html`
- ✅ `.htaccess`
- ✅ `about/` folder
- ✅ `contact/` folder
- ✅ `services/` folder
- ✅ `images/` folder
- ✅ `_next/` folder
- ✅ `404.html` and `404/` folder

**That's it!** Your site should be live after upload.




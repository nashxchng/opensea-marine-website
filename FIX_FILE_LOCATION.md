# Fixing File Location and Path Issues

## Problem
Files are in wrong location and paths are broken because Next.js generated absolute paths (`/images/...`) that don't work in subdirectory (`/latest/`).

## Solution 1: Move to Root (EASIEST - Recommended)

This is the simplest solution - move everything to the root directory:

### Steps:

1. **Via FTP, move all files from `/latest/` to `/public_html/` root:**
   - Move `index.html` → `/public_html/index.html`
   - Move `_next/` folder → `/public_html/_next/`
   - Move `images/` folder → `/public_html/images/`
   - Move `about/` folder → `/public_html/about/`
   - Move `contact/` folder → `/public_html/contact/`
   - Move `services/` folder → `/public_html/services/`
   - Move `404.html` and `404/` folder → `/public_html/`
   - Move `.htaccess` from `out/.htaccess` → `/public_html/.htaccess`

2. **Backup WordPress files first** (move to `wordpress-backup/` folder):
   - `wp-admin/`, `wp-content/`, `wp-includes/`
   - `wp-*.php` files
   - Old `index.php` and `.htaccess`

3. **Test at**: `https://opensea.com.ng/`

## Solution 2: Rebuild for Subdirectory (If you must keep /latest/)

If you need to keep files in `/latest/`, rebuild with correct basePath:

### Steps:

1. **Update `next.config.js`** to include `basePath`:

```javascript
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/latest',  // Add this line
  images: {
    unoptimized: true,
    // ... rest of config
  },
  trailingSlash: true,
}
```

2. **Rebuild:**
```bash
npm run build
```

3. **Upload new files from `out/` to `/latest/`**

4. **Upload `.htaccess` to `/latest/.htaccess`**

## Solution 3: Quick Fix - Update Paths Manually

If you can't rebuild, you can manually fix paths in the HTML files:

1. **Find and replace in all HTML files:**
   - Find: `href="/` 
   - Replace: `href="/latest/`
   - Find: `src="/`
   - Replace: `src="/latest/`

2. **This is tedious** - Solution 1 is much easier!

## Recommended: Move to Root

**Why root is better:**
- ✅ No path issues
- ✅ Cleaner URLs (`opensea.com.ng/` vs `opensea.com.ng/latest/`)
- ✅ Easier to maintain
- ✅ No basePath configuration needed

**Steps to move to root:**

1. **Backup WordPress** (move to `wordpress-backup/` folder)

2. **Move Next.js files** from `/latest/` to `/public_html/`:
   ```
   /public_html/
     ├── index.html          ← from /latest/index.html
     ├── .htaccess          ← from out/.htaccess
     ├── _next/             ← from /latest/_next/
     ├── images/            ← from /latest/images/
     ├── about/             ← from /latest/about/
     ├── contact/           ← from /latest/contact/
     ├── services/          ← from /latest/services/
     └── 404.html           ← from /latest/404.html
   ```

3. **Delete `/latest/` folder** (after verifying root works)

4. **Test**: `https://opensea.com.ng/`

## File Structure Check

**Correct structure in root:**
```
/public_html/
  ├── index.html          ✅
  ├── .htaccess           ✅
  ├── _next/              ✅
  │   └── static/         ✅
  ├── images/             ✅
  │   ├── logo.png        ✅
  │   ├── AHT2.jpeg       ✅
  │   └── ...
  ├── about/
  │   └── index.html      ✅
  ├── contact/
  │   └── index.html      ✅
  └── services/
      ├── index.html      ✅
      └── ...
```

## After Moving Files

1. **Clear browser cache** (Ctrl+Shift+R or Cmd+Shift+R)
2. **Test all pages**
3. **Check images load**
4. **Verify navigation works**



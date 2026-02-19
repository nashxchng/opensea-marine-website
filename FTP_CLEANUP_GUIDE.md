# Handling Existing Files & Directories on FTP Server

## ⚠️ Important: Backup First!

**Before making any changes, backup your entire current website!**

## Option 1: Replace WordPress Entirely (Recommended for Full Migration)

If you want to completely replace WordPress with the new Next.js site:

### Files/Directories to DELETE:
- `wp-admin/` - WordPress admin files
- `wp-content/` - WordPress themes, plugins, uploads
- `wp-includes/` - WordPress core files
- `wp-config.php` - WordPress configuration
- `wp-*.php` - All WordPress PHP files (wp-login.php, wp-cron.php, etc.)
- `xmlrpc.php` - WordPress XML-RPC
- `index.php` - Old WordPress index (will be replaced)
- `.htaccess` - Old WordPress .htaccess (will be replaced with new one)
- `license.txt`, `readme.html` - WordPress files

### Files/Directories to KEEP (if they exist):
- `.well-known/` - SSL certificates, security files
- `cgi-bin/` - Server scripts (if used)
- Any custom files you've added
- Email configuration files (if any)

### Steps:
1. **Backup everything first!** (Download entire site via FTP)
2. Delete WordPress files listed above
3. Upload new Next.js files from `out/` folder
4. Upload new `.htaccess` file

## Option 2: Keep WordPress in Subdirectory (Safest)

If you want to keep WordPress as backup or for other purposes:

### Steps:
1. **Create a new folder** on your server: `new-site/` or `v2/` or `2024/`
2. **Upload all files from `out/`** into this new folder
3. **Access new site at**: `https://opensea.com.ng/new-site/`
4. **Keep WordPress** at root for now
5. **Later, if everything works**, you can:
   - Rename `wp-admin` to `wp-admin-old`
   - Rename `wp-content` to `wp-content-old`
   - Move new site files to root
   - Or set up domain redirect

## Option 3: Hybrid Approach (WordPress + Next.js)

Keep both running side-by-side:

1. **Keep WordPress** at root (`/`)
2. **Upload Next.js site** to subdirectory like `/new/` or `/site/`
3. **Use WordPress** for blog/admin if needed
4. **Use Next.js** for main website
5. **Set up redirects** in WordPress to point to new site

## Common WordPress Files to Look For

When you connect via FTP, you'll likely see:

```
/public_html/
  ├── wp-admin/              ← DELETE (WordPress admin)
  ├── wp-content/            ← DELETE (themes, plugins, uploads)
  ├── wp-includes/           ← DELETE (WordPress core)
  ├── wp-config.php          ← DELETE (WordPress config)
  ├── wp-login.php           ← DELETE
  ├── wp-cron.php            ← DELETE
  ├── xmlrpc.php             ← DELETE
  ├── index.php              ← REPLACE (with new index.html)
  ├── .htaccess              ← REPLACE (with new .htaccess)
  ├── license.txt            ← DELETE
  ├── readme.html            ← DELETE
  └── .well-known/           ← KEEP (SSL/security)
```

## Step-by-Step Cleanup Process

### Before You Start:
1. **Download full backup** of current site
2. **Note your WordPress database** (if you need it later)
3. **Document any custom configurations**

### Cleanup Steps:

1. **Connect via FTP**

2. **Navigate to web root** (`/public_html/` or `/www/`)

3. **Create backup folder** (optional but recommended):
   ```
   /public_html/
     └── wordpress-backup-2024-02-16/  ← Create this
   ```

4. **Move WordPress files to backup** (or delete if you're sure):
   - Move `wp-admin/` → `wordpress-backup-2024-02-16/wp-admin/`
   - Move `wp-content/` → `wordpress-backup-2024-02-16/wp-content/`
   - Move `wp-includes/` → `wordpress-backup-2024-02-16/wp-includes/`
   - Move `wp-*.php` files → `wordpress-backup-2024-02-16/`
   - Move `xmlrpc.php` → `wordpress-backup-2024-02-16/`

5. **Delete old files**:
   - Delete `index.php` (old WordPress)
   - Delete `license.txt`, `readme.html`
   - Delete old `.htaccess` (or rename to `.htaccess.old`)

6. **Upload new files**:
   - Upload everything from `out/` folder
   - Upload new `.htaccess`

7. **Set permissions**:
   - Files: 644
   - Folders: 755

8. **Test the site**

## What Happens to Old Files?

### If You Delete:
- **WordPress files**: Gone (but you have backup)
- **Old .htaccess**: Replaced with new one
- **Old index.php**: Replaced with new index.html

### If You Keep in Backup Folder:
- **WordPress files**: Safe in backup folder
- **Can restore later** if needed
- **Takes up space** but safer

## Recommended Approach

**For first-time deployment:**

1. ✅ **Create backup folder**: `wordpress-backup-[date]/`
2. ✅ **Move WordPress files** to backup (don't delete yet)
3. ✅ **Upload new Next.js site** to root
4. ✅ **Test thoroughly** (24-48 hours)
5. ✅ **If everything works**, delete backup folder
6. ✅ **If issues**, restore from backup

## File Size Considerations

- **WordPress backup**: Can be 50-500MB+ depending on uploads
- **New Next.js site**: ~2.2MB
- **Server space**: Check available space before backup

## Quick Checklist

Before uploading:
- [ ] Full backup downloaded
- [ ] WordPress files moved to backup folder (or deleted)
- [ ] Old `.htaccess` removed/renamed
- [ ] Old `index.php` removed
- [ ] Server has enough space

After uploading:
- [ ] All files from `out/` uploaded
- [ ] New `.htaccess` uploaded
- [ ] Permissions set correctly
- [ ] Site tested and working
- [ ] Old files cleaned up (or in backup)

## Need to Restore WordPress?

If you need to go back:

1. Delete new Next.js files
2. Move WordPress files back from backup folder
3. Restore old `.htaccess` (if you saved it)
4. Restore database (if you backed it up)

## Questions to Ask Yourself

1. **Do I need WordPress anymore?**
   - No → Delete everything
   - Yes → Keep in subdirectory or backup

2. **Do I have a database backup?**
   - Important if you want to restore WordPress later

3. **Do I have custom WordPress content?**
   - Export before deleting
   - Or keep `wp-content/uploads/` if you want old images

4. **Am I ready to commit?**
   - Test in subdirectory first
   - Then move to root when confident


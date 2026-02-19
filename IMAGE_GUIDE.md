# Image Guide for Opensea Marine Website

## Current Image Setup

The website currently uses placeholder images from Unsplash. These are high-quality stock photos that represent maritime operations, vessels, and rigs.

## Replacing with Actual Images

To replace placeholder images with actual photos of your fleet and operations:

### 1. Image Requirements
- **Format**: JPG or PNG
- **Size**: Minimum 1200px width for hero images, 800px for gallery images
- **Aspect Ratio**: 4:3 or 16:9 recommended
- **File Size**: Optimize to under 500KB for web performance

### 2. Image Locations

#### Homepage (`app/page.tsx`)
- Hero background image
- Featured section images (2)
- Fleet gallery (6 images)

#### Service Pages
Each service page has:
- Hero image (large, 1200px+)
- Image showcase gallery (3 images)

#### About Page
- Company story image
- Operations gallery (4 images)

### 3. Recommended Images

#### AHT Vessels
- AHT vessel at sea
- Anchor handling operations
- Deck operations
- Towing operations

#### PSV Vessels
- PSV at offshore platform
- Cargo handling
- Supply operations
- Vessel deck with cargo

#### Swamp Rigs
- Swamp rig in wetland environment
- Drilling operations in swamp
- Equipment and crew
- Environmental protection measures

#### Land Rigs
- Land rig on location
- Drilling operations
- Rig equipment and systems
- Crew and operations

### 4. How to Replace Images

1. Add your images to `/public/images/` directory
2. Update image paths in the components:
   - Replace Unsplash URLs with `/images/your-image.jpg`
   - Use Next.js Image component for optimization

Example:
```tsx
<Image
  src="/images/aht-vessel-1.jpg"
  alt="AHT Vessel Operations"
  fill
  className="object-cover"
/>
```

### 5. Image Optimization

The website uses Next.js Image component which automatically:
- Optimizes images for different screen sizes
- Lazy loads images
- Provides responsive images
- Improves performance

### 6. Current Placeholder Images

All current images are from Unsplash and are placeholders. Replace them with actual photos of:
- Your actual vessels and rigs
- Real operations and crew
- Your facilities and equipment
- Project sites and locations

## Image Sources

Current placeholder images are from:
- Unsplash (https://unsplash.com)
- Search terms: "offshore", "drilling rig", "oil platform", "marine vessel"

Replace these with your actual operational photos for authenticity and brand representation.


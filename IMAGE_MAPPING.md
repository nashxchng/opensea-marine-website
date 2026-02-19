# Image Mapping Guide

This document shows where each image is used to avoid duplication and ensure appropriate content matching.

## Available Images

- `AHT2.jpeg` - AHT (Anchor Handling Tug) vessel
- `AHTDP2.jpeg` - AHT vessel with DP2 (Dynamic Positioning) system
- `PSV01.jpeg` - Platform Supply Vessel
- `PSV02.jpeg` - Platform Supply Vessel (variant)
- `PSV03.jpeg` - Platform Supply Vessel (variant)
- `swamprig.jpeg` - Swamp drilling rig
- `swamprig04.jpeg` - Swamp rig (variant)
- `swampimage.jpeg` - Swamp environment/operations
- `landrig.jpeg` - Land drilling rig
- `bunkertrading01.jpeg` - Bunker trading operations
- `bunkertrading02.jpeg` - Bunker trading (variant)
- `bunkertrading03.jpeg` - Bunker trading (variant)
- `bunkertrading05.jpeg` - Bunker trading (variant)

## Image Usage by Page/Component

### Landing Page (app/page.tsx)

1. **Hero Section** (Hero.tsx)
   - Background: `AHT2.jpeg` (AHT vessel - maritime operations)

2. **Stats Section** (Stats.tsx)
   - Background pattern: `swamprig.jpeg` (subtle overlay)

3. **Featured Section 1** (About company)
   - Main image: `AHT2.jpeg` (AHT/PSV operations)

4. **Services Overview** (ServicesOverview.tsx)
   - AHT Vessels card: `AHT2.jpeg`
   - PSV Vessels card: `PSV01.jpeg`
   - Swamp Rigs card: `swamprig.jpeg`
   - Land Rigs card: `landrig.jpeg`
   - Bunker Trading card: `bunkertrading01.jpeg`
   - Ballistic Security Boats card: `PSV01.jpeg` (placeholder - needs security boat image)

5. **Rigs & Vessels Showcase**
   - Vessels section:
     - `AHT2.jpeg` (AHT Vessels)
     - `PSV01.jpeg` (PSV Vessels)
     - `AHTDP2.jpeg` (AHT DP2)
     - `PSV02.jpeg` (PSV Operations)
   - Rigs section:
     - `swamprig.jpeg` (Swamp Rigs)
     - `landrig.jpeg` (Land Rigs)
     - `swamprig04.jpeg` (Swamp Operations)
     - `swampimage.jpeg` (Wetland Operations)

6. **Fleet in Action Gallery**
   - `AHT2.jpeg`
   - `AHTDP2.jpeg`
   - `PSV01.jpeg`
   - `PSV02.jpeg`
   - `swamprig.jpeg`
   - `swamprig04.jpeg`
   - `landrig.jpeg`
   - `PSV03.jpeg`

7. **Why Choose Us** (WhyChooseUs.tsx)
   - Background pattern: `landrig.jpeg` (subtle overlay)

8. **Featured Section 2** (Service delivery)
   - Main image: `swamprig.jpeg` (swamp rig operations)

9. **CTA Section** (CTA.tsx)
   - Background: `PSV03.jpeg` (PSV vessel)

### Service Pages

#### AHT Vessels (`/services/aht-vessels`)
- Hero: `AHT2.jpeg`
- Gallery: `AHT2.jpeg`, `AHTDP2.jpeg`, `AHT2.jpeg`

#### PSV Vessels (`/services/pasv-vessels`)
- Hero: `PSV01.jpeg`
- Gallery: `PSV01.jpeg`, `PSV02.jpeg`, `PSV03.jpeg`

#### Swamp Rigs (`/services/swamp-rigs`)
- Hero: `swamprig.jpeg`
- Gallery: `swamprig.jpeg`, `swamprig04.jpeg`, `swampimage.jpeg`

#### Land Rigs (`/services/land-rigs`)
- Hero: `landrig.jpeg`
- Gallery: `landrig.jpeg` (all three - needs more land rig images)

#### Bunker Trading (`/services/bunker-trading`)
- Hero: `bunkertrading01.jpeg`
- Gallery: `bunkertrading01.jpeg`, `bunkertrading02.jpeg`, `bunkertrading03.jpeg`

#### Ballistic Security Boats (`/services/ballistic-security-boats`)
- Hero: `AHTDP2.jpeg` (placeholder - needs security boat image)
- Overview: `AHTDP2.jpeg`
- Gallery: `AHTDP2.jpeg`, `AHT2.jpeg`, `PSV01.jpeg` (all placeholders - needs security boat images)

### About Page (`/about`)
- Main image: `PSV02.jpeg` (company overview)
- Gallery: `AHT2.jpeg`, `PSV01.jpeg`, `swamprig.jpeg`, `landrig.jpeg`

## Notes

1. **Ballistic Security Boats** - Currently using AHT/PSV images as placeholders. Should be replaced with actual security boat images when available.

2. **Land Rigs** - Only one land rig image available. Consider adding more land rig images for variety.

3. **Image Optimization** - All images should be optimized for web use (compressed, appropriate dimensions).

4. **Alt Text** - All images have descriptive alt text matching their content.

5. **No Duplication** - Each image is used appropriately based on content context, avoiding unnecessary duplication on the same page.




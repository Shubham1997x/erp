# Rajdhani ERP Landing Page - Design System

## Overview
This landing page is built with Next.js 16, React 19, Tailwind CSS v4, and shadcn/ui components, styled with a premium SaaS aesthetic inspired by the Rife Free theme.

## Color Palette

### Primary Colors
- **Primary Blue**: `hsl(221.2, 83.2%, 53.3%)` - Main brand color for CTAs and highlights
- **Primary Dark**: `hsl(221.2, 83.2%, 45%)` - Used in gradients
- **Primary Light**: `hsl(217.2, 91.2%, 59.8%)` - Dark mode variant

### Neutral Colors
- **Background**: `hsl(0, 0%, 100%)` (light) / `hsl(222.2, 84%, 4.9%)` (dark)
- **Foreground**: `hsl(222.2, 84%, 4.9%)` (light) / `hsl(210, 40%, 98%)` (dark)
- **Muted**: `hsl(210, 40%, 96.1%)` - For subtle backgrounds
- **Border**: `hsl(214.3, 31.8%, 91.4%)` - For borders and dividers

### Accent Colors
- **Destructive**: `hsl(0, 84.2%, 60.2%)` - For error states
- **Ring**: `hsl(221.2, 83.2%, 53.3%)` - For focus rings

## Typography

### Font Families
- **Primary (Body)**: Inter - Clean, modern sans-serif for body text
- **Headings**: Poppins - Bold, friendly sans-serif for headings and CTAs

### Font Weights
- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700
- **Extra Bold**: 800

### Font Sizes
- **Hero Title**: `text-5xl sm:text-6xl lg:text-7xl` (48px - 72px)
- **Section Titles**: `text-4xl sm:text-5xl` (36px - 48px)
- **Card Titles**: `text-xl` or `text-2xl` (20px - 24px)
- **Body**: `text-base` or `text-lg` (16px - 18px)
- **Small**: `text-sm` (14px)

## Components

### Navigation
- Sticky navbar with backdrop blur
- Responsive mobile menu with animations
- Smooth scroll to sections

### Hero Section
- Full-screen hero with gradient mesh background
- Animated statistics
- Dual CTAs (Primary and Secondary)
- Framer Motion animations on scroll

### Feature Cards
- Grid layout (1-3 columns responsive)
- Icon-based design with hover effects
- Consistent spacing and shadows

### Module Cards
- Color-coded gradient icons
- Feature lists with bullet points
- Hover scale and shadow effects

## Animations (Framer Motion)

### Entry Animations
- **Fade In + Slide Up**: `opacity: 0, y: 20` → `opacity: 1, y: 0`
- **Fade In + Slide Side**: `opacity: 0, x: -50/50` → `opacity: 1, x: 0`
- **Scale In**: `opacity: 0, scale: 0.9` → `opacity: 1, scale: 1`

### Stagger Children
- Used in feature grids for sequential animations
- Delay: `index * 0.1` seconds

### Viewport Triggers
- All animations use `whileInView` with `viewport={{ once: true }}`
- Ensures animations play once when scrolled into view

## Responsive Breakpoints

- **Mobile**: `< 640px` (sm)
- **Tablet**: `640px - 1024px` (md)
- **Desktop**: `1024px - 1280px` (lg)
- **Large Desktop**: `> 1280px` (xl)

## Replacing Placeholders

### Images
1. **Workflow Images** (`/placeholder-workflow-*.png`):
   - Replace with actual UI screenshots showing each workflow step
   - Recommended size: 1920x1080px
   - Format: PNG or WebP

2. **Screenshot Placeholders** (`/placeholder-dashboard.png`, etc.):
   - Add real screenshots of your ERP dashboard, production monitoring, etc.
   - Recommended size: 1920x1080px for desktop, 1080x1920px for mobile
   - Format: PNG or WebP

3. **Avatar Placeholders** (`/placeholder-avatar-*.png`):
   - Replace with customer photos or company logos
   - Recommended size: 200x200px
   - Format: PNG with transparent background

### Content
1. **Statistics**: Update the numbers in Hero and Benefits sections with real data
2. **Testimonials**: Replace with actual customer testimonials and photos
3. **Contact Information**: Update email, phone, and address in Contact section
4. **Pricing**: Replace "Custom" with actual pricing or contact sales messaging
5. **Features**: Review and update feature descriptions based on your PDF

### GIFs/Video
- Add interactive demos or video walkthroughs in the Screenshots section
- Consider embedding YouTube/Vimeo videos for product demos

## SEO Optimization

### Meta Tags
- Title, description, keywords already configured in `app/layout.tsx`
- Open Graph and Twitter Card tags included

### Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- Semantic sections with IDs for anchor links
- Alt text for images (add when replacing placeholders)

### Performance
- Next.js Image optimization ready
- Font optimization with `next/font`
- Code splitting with component-based architecture

## Accessibility

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Color contrast meets WCAG AA standards

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## Development

### Running Locally
```bash
npm run dev
```

### Building for Production
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## Customization Guide

### Changing Colors
Edit `app/globals.css` CSS variables in the `:root` selector.

### Adding New Sections
1. Create component in `components/sections/`
2. Import and add to `app/page.tsx`
3. Add navigation link in `components/navigation/navbar.tsx`

### Modifying Animations
Edit Framer Motion props in individual section components. Adjust:
- `initial` - Starting state
- `animate` or `whileInView` - End state
- `transition` - Duration, delay, easing

## Notes

- All placeholder images should be replaced before production deployment
- Form submission in Contact section needs backend integration
- Social media links in Footer need actual URLs
- All `#` anchor links should be updated to actual page sections or removed if not needed


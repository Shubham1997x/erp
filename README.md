# Rajdhani ERP Landing Page

A production-ready, modern landing page for Rajdhani ERP - a comprehensive ERP solution for carpet manufacturing and weaving operations.

## 🚀 Features

- **Modern Design**: Premium SaaS aesthetic inspired by Rife Free theme
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **SEO Optimized**: Complete meta tags, semantic HTML, and structured data
- **Component-Based**: Modular architecture with reusable shadcn/ui components
- **Type-Safe**: Full TypeScript support

## 📦 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui (custom components)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (body), Poppins (headings)

## 🎨 Design System

### Color Palette
- **Primary**: Blue (`hsl(221.2, 83.2%, 53.3%)`)
- **Background**: White (light) / Dark (dark mode)
- **Muted**: Light gray for subtle backgrounds
- See `DESIGN_SYSTEM.md` for complete color specifications

### Typography
- **Body**: Inter - Clean, readable sans-serif
- **Headings**: Poppins - Bold, friendly sans-serif

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and theme
├── components/
│   ├── navigation/
│   │   └── navbar.tsx      # Navigation bar
│   ├── sections/
│   │   ├── hero.tsx        # Hero section
│   │   ├── features.tsx    # Features overview
│   │   ├── modules.tsx     # ERP modules
│   │   ├── workflow.tsx    # Process workflow
│   │   ├── screenshots.tsx # Screenshots/GIFs
│   │   ├── benefits.tsx    # Why Rajdhani ERP
│   │   ├── pricing.tsx     # Pricing plans
│   │   ├── testimonials.tsx # Customer testimonials
│   │   ├── contact.tsx     # Contact/Demo form
│   │   └── footer.tsx      # Footer
│   └── ui/                 # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── textarea.tsx
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📝 Replacing Placeholders

### Images
1. **Workflow Images**: Replace `/placeholder-workflow-*.png` with actual UI screenshots
2. **Screenshots**: Replace dashboard, production, inventory, mobile placeholders
3. **Avatars**: Replace `/placeholder-avatar-*.png` with customer photos

### Content
- Update statistics in Hero and Benefits sections
- Replace testimonials with real customer feedback
- Update contact information (email, phone, address)
- Customize pricing plans or add actual pricing
- Review and refine feature descriptions based on your PDF

### Forms
- Connect Contact form to your backend/email service
- Add form validation and success/error handling

## 🎯 Sections Included

1. **Hero Section** - Headline, value proposition, CTAs, key statistics
2. **Features Overview** - 12 comprehensive ERP features
3. **Modules Section** - 8 detailed ERP modules (Inventory, Production, Sales, etc.)
4. **Workflow** - 6-step process explanation with placeholder images
5. **Screenshots** - Product screenshots/GIFs section
6. **Benefits** - Why choose Rajdhani ERP with metrics
7. **Pricing** - Three-tier pricing structure
8. **Testimonials** - Customer social proof
9. **Contact** - Demo request form and contact information
10. **Footer** - SEO-friendly footer with links

## 🎨 Customization

### Changing Colors
Edit CSS variables in `app/globals.css`:
```css
:root {
  --primary: 221.2 83.2% 53.3%;
  /* ... other colors */
}
```

### Adding Animations
Modify Framer Motion props in section components:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

### Adding New Sections
1. Create component in `components/sections/`
2. Import in `app/page.tsx`
3. Add navigation link in `components/navigation/navbar.tsx`

## 📱 Responsive Design

- **Mobile**: < 640px - Single column, stacked layout
- **Tablet**: 640px - 1024px - 2-column grids
- **Desktop**: > 1024px - 3-4 column grids, full layouts

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- WCAG AA color contrast compliance

## 🔍 SEO Features

- Complete meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Twitter Card support
- Semantic HTML structure
- Proper heading hierarchy

## 📚 Documentation

See `DESIGN_SYSTEM.md` for:
- Complete color palette
- Typography system
- Component guidelines
- Animation patterns
- Responsive breakpoints

## 🐛 Troubleshooting

### Build Errors
- Ensure all dependencies are installed: `npm install`
- Check Node.js version (18+ required)
- Clear `.next` folder and rebuild

### Styling Issues
- Verify Tailwind CSS is properly configured
- Check `app/globals.css` for CSS variable definitions
- Ensure fonts are loaded in `app/layout.tsx`

## 📄 License

This project is private and proprietary.

## 🤝 Support

For questions or issues, contact the development team.

---

Built with ❤️ for Rajdhani Carpets

# Placeholder Replacement Guide

This guide helps you replace all placeholder content with actual content from your PDF and real assets.

## 🖼️ Image Placeholders

### Workflow Images (6 images)
**Location**: `components/sections/workflow.tsx`

Replace these placeholders:
- `/placeholder-workflow-1.png` - Order Received UI
- `/placeholder-workflow-2.png` - Production Planning UI
- `/placeholder-workflow-3.png` - Material Allocation UI
- `/placeholder-workflow-4.png` - Weaving Operations UI
- `/placeholder-workflow-5.png` - Quality Inspection UI
- `/placeholder-workflow-6.png` - Delivery & Invoicing UI

**Recommended Specs**:
- Size: 1920x1080px (16:9 aspect ratio)
- Format: PNG or WebP
- Quality: High resolution for clarity
- Content: Actual ERP screenshots showing each workflow step

### Screenshot Placeholders (4 images)
**Location**: `components/sections/screenshots.tsx`

Replace these placeholders:
- `/placeholder-dashboard.png` - Dashboard Overview
- `/placeholder-production.png` - Production Monitoring
- `/placeholder-inventory.png` - Inventory Management
- `/placeholder-mobile.png` - Mobile Access

**Recommended Specs**:
- Desktop screenshots: 1920x1080px
- Mobile screenshots: 1080x1920px (portrait)
- Format: PNG or WebP
- Content: Real ERP interface screenshots

### Avatar Placeholders (6 images)
**Location**: `components/sections/testimonials.tsx`

Replace these placeholders:
- `/placeholder-avatar-1.png` through `/placeholder-avatar-6.png`

**Recommended Specs**:
- Size: 200x200px (square)
- Format: PNG with transparent background
- Content: Customer photos or company logos

## 📝 Content Updates

### 1. Hero Section Statistics
**File**: `components/sections/hero.tsx`

Update the statistics array (lines ~60-65):
```tsx
{[
  { label: "Production Efficiency", value: "40%↑" },
  { label: "Cost Reduction", value: "30%↓" },
  { label: "Time Savings", value: "50%↑" },
  { label: "Customer Satisfaction", value: "95%+" },
]}
```

Replace with actual metrics from your ERP implementation results.

### 2. Features List
**File**: `components/sections/features.tsx`

Review and update the 12 features array to match your PDF:
- Inventory Management
- Production Planning
- Sales & Order Management
- Accounting & Finance
- HR & Payroll
- Analytics & Reporting
- Quality Control
- Security & Compliance
- Real-time Monitoring
- Demand Forecasting
- Cost Management
- Time Tracking

### 3. Modules Details
**File**: `components/sections/modules.tsx`

Update the 8 modules with specific features from your PDF:
- Inventory Management
- Production Management
- Sales & CRM
- Accounting & Finance
- Human Resources
- Business Intelligence
- Quality Control
- Supply Chain

### 4. Workflow Steps
**File**: `components/sections/workflow.tsx`

Update the 6 workflow steps to match your actual ERP process:
1. Order Received
2. Production Planning
3. Material Allocation
4. Weaving Operations
5. Quality Inspection
6. Delivery & Invoicing

### 5. Benefits & Metrics
**File**: `components/sections/benefits.tsx`

Update the 8 benefits with real data:
- Increased Efficiency (40%)
- Cost Reduction (30%)
- Time Savings (50%)
- Data Security (99.9% uptime)
- Real-time Insights (24/7)
- Better Collaboration (100%)
- Data-Driven Decisions (360°)
- Quality Assurance (95%+)

### 6. Pricing Plans
**File**: `components/sections/pricing.tsx`

Replace "Custom" pricing with:
- Actual pricing tiers
- Or "Contact Sales" messaging
- Or remove pricing section if not applicable

### 7. Testimonials
**File**: `components/sections/testimonials.tsx`

Replace all 6 testimonials with:
- Real customer names
- Actual company names
- Genuine testimonials
- Customer photos or logos

### 8. Contact Information
**File**: `components/sections/contact.tsx`

Update:
- Email: `info@rajdhanierp.com` → Your actual email
- Phone: `+91 123 456 7890` → Your actual phone
- Address: Update with your real business address

### 9. Footer Links
**File**: `components/sections/footer.tsx`

Update all `#` placeholder links:
- Product links → Actual page sections or URLs
- Company links → About, Careers, Blog pages
- Resources links → Documentation, Support, API pages
- Legal links → Privacy Policy, Terms, etc.

### 10. Social Media Links
**File**: `components/sections/footer.tsx`

Update social media icons with actual URLs:
- Facebook
- Twitter
- LinkedIn
- Instagram

## 🎬 Video/GIF Placeholders

### Hero Section
**File**: `components/sections/hero.tsx`

Consider adding:
- Background video (optional)
- Product demo video link
- Animated hero illustration

### Screenshots Section
**File**: `components/sections/screenshots.tsx`

Consider replacing static images with:
- Interactive product demos
- Embedded YouTube/Vimeo videos
- Animated GIFs showing workflows
- Interactive iframe embeds

## 🔧 Technical Updates

### Form Integration
**File**: `components/sections/contact.tsx`

Connect the contact form to:
- Backend API endpoint
- Email service (SendGrid, Mailgun, etc.)
- CRM system (HubSpot, Salesforce, etc.)
- Form service (Formspree, Netlify Forms, etc.)

### Analytics
Add tracking:
- Google Analytics
- Facebook Pixel
- Custom event tracking
- Conversion tracking

### SEO
**File**: `app/layout.tsx`

Update metadata:
- Verify title and description
- Add structured data (JSON-LD)
- Update Open Graph images
- Add canonical URLs

## ✅ Checklist

- [ ] Replace all workflow images (6)
- [ ] Replace all screenshot images (4)
- [ ] Replace all avatar images (6)
- [ ] Update hero statistics
- [ ] Review and update all features
- [ ] Update module details
- [ ] Update workflow steps
- [ ] Update benefits metrics
- [ ] Update pricing information
- [ ] Replace all testimonials
- [ ] Update contact information
- [ ] Update footer links
- [ ] Update social media links
- [ ] Connect contact form
- [ ] Add analytics tracking
- [ ] Update SEO metadata
- [ ] Test all links
- [ ] Test responsive design
- [ ] Test form submission
- [ ] Review accessibility
- [ ] Performance optimization

## 📋 Content from PDF

When replacing placeholders, extract information from your PDF:
1. **Features**: List all ERP features mentioned
2. **Modules**: Document each module's capabilities
3. **Workflows**: Map out actual business processes
4. **Benefits**: Quantify improvements and ROI
5. **Use Cases**: Real customer scenarios
6. **Technical Specs**: System requirements, integrations

## 🎨 Design Consistency

When adding new images:
- Maintain consistent style
- Use similar color palette
- Match UI design language
- Ensure high quality
- Optimize file sizes
- Use WebP format when possible

## 🚀 Next Steps

1. Review the PDF thoroughly
2. Extract all relevant information
3. Create/collect all images
4. Update content systematically
5. Test thoroughly
6. Deploy to staging
7. Get feedback
8. Finalize and deploy

---

**Note**: All placeholder content is clearly marked in the code. Search for "placeholder" to find all instances.


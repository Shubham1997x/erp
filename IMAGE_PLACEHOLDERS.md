# Image Placeholders Guide

All image placeholders are set up and ready to be replaced with your actual ERP application screenshots.

## Image Locations

Place all your screenshots in the `/public/images/` directory with the following names:

### Main Sections

1. **Dashboard**
   - File: `/public/images/dashboard-overview.png`
   - Shows: Revenue metrics, Active orders, Sales trends, Production efficiency charts

2. **Product & Recipe Management**
   - File: `/public/images/product-recipe.png`
   - Shows: Product catalog interface, Recipe management with materials (Wool, Dye, Backing)

3. **Raw Materials Procurement**
   - File: `/public/images/raw-materials-procurement.png` (if needed)
   - Shows: Procurement workflow, Purchase orders, Supplier management

4. **Order Management**
   - File: `/public/images/order-details.png`
   - Shows: Order creation form, Order details with items, GST calculation, Status flow

5. **Production Management**
   - File: `/public/images/production-workflow.png`
   - Shows: Production batch cards, Workflow stages (Queue, Weaving, Washing, Finishing), Machine assignments

6. **Customer & Supplier Management**
   - File: `/public/images/customers-suppliers.png`
   - Shows: Customer database, Supplier database, Credit limits, Transaction history

7. **Stock Management**
   - File: `/public/images/stock-management.png`
   - Shows: Stock levels, Low stock alerts, Stock history, Valuation dashboard

8. **Analytics**
   - File: `/public/images/analytics-dashboard.png`
   - Shows: Sales analytics, Production metrics, Inventory analysis, Custom reports

9. **Recipe Calculator**
   - File: `/public/images/recipe-calculator.png`
   - Shows: Calculator interface, Batch quantity input, Material requirements output

10. **Dropdown Master**
    - File: `/public/images/dropdown-master.png`
    - Shows: Categories, Subcategories, Colors, Patterns management interface

11. **Integrated System**
    - File: `/public/images/integrated-system-diagram.png`
    - Shows: System integration flow diagram, Data flow between modules

## Image Specifications

### Recommended Dimensions
- **Dashboard/Interface Screenshots**: 1920x1080px (16:9 aspect ratio)
- **Mobile Views**: 1080x1920px (9:16 aspect ratio)
- **Diagrams/Workflows**: 1920x1080px or custom based on content

### File Format
- **Primary**: PNG (for screenshots with text)
- **Alternative**: WebP (for better compression)
- **GIFs**: For animated workflows (optional)

### Quality
- High resolution (at least 1920px width)
- Clear, readable text
- Consistent styling across all images

## How Images Are Used

All images use Next.js `Image` component with:
- Automatic optimization
- Lazy loading
- Responsive sizing
- Fallback placeholders (shown if image doesn't exist)

## Replacing Images

1. **Add your screenshot** to `/public/images/` with the exact filename listed above
2. **The component will automatically** detect and display your image
3. **If image doesn't exist**, a placeholder with instructions will be shown
4. **No code changes needed** - just replace the files!

## Current Status

All sections have image placeholders set up. Simply add your screenshots to `/public/images/` with the filenames above, and they will automatically appear on the website.

## Testing

After adding images:
1. Run `npm run dev`
2. Check each section to verify images load correctly
3. Test on different screen sizes to ensure responsiveness
4. Verify image quality and readability


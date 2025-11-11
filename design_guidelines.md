# BreatheEasy Route Planner - Design Guidelines

## Design Approach
**Selected Reference:** Mobbin platform aesthetic
**Rationale:** Mobbin's ultra-clean, minimalist approach with generous white space and refined typography creates a professional, trustworthy foundation perfect for health-focused applications. The emphasis on clarity and breathing room directly aligns with our clean-air mission.

**Key Design Principles:**
- Extreme clarity: White space as a design element, not filler
- Subtle depth: Minimal shadows for hierarchy (shadow-sm, shadow-md only)
- Refined restraint: Green accents used sparingly for critical health data
- Premium polish: Every element feels intentional and crafted

## Typography

**Font Family:** Inter (via Google Fonts CDN)
- Weights: 400, 500, 600

**Hierarchy:**
- Hero Headline: text-6xl font-semibold tracking-tight
- Section Headers: text-4xl font-semibold tracking-tight
- Card Titles: text-xl font-semibold
- Route Metrics: text-3xl font-semibold (AQI values)
- Body Text: text-base font-normal leading-relaxed
- Labels: text-sm font-medium text-gray-600
- Captions: text-xs font-normal text-gray-500

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16
- Generous section spacing: py-16, py-24
- Card padding: p-6, p-8
- Component gaps: gap-6, gap-8
- Breathing room between elements: space-y-12, space-y-16

**Container Strategy:**
- Landing sections: max-w-7xl mx-auto px-6
- Map interface: Full-width with floating control panels
- Cards: Consistent rounded-2xl with shadow-sm on white backgrounds

## Component Library

### Navigation
**Header:**
- Clean white background with subtle border-b
- Height: h-20
- Logo (left), "Start Planning" CTA + "Sign In" link (right)
- Fixed with backdrop-blur on scroll

### Landing Page Structure

**Hero Section (min-h-screen):**
- Two-column layout: 60% left content, 40% right image
- Headline: "Breathe Easier on Every Journey"
- Subheading: "Find walking, running, and biking routes with better air quality using real-time pollution data"
- Primary CTA button: Large, rounded-lg, px-8 py-4
- Trust line: "Powered by Google Air Quality API" in small gray text
- Hero image: Clean photo of person jogging in park with morning light, professional quality, right side

**How It Works (3-column grid, gap-8):**
- Clean white cards with rounded-2xl, shadow-sm, p-8
- Icon (simple line icon, 48x48), title, description
- Cards: Enter Routes → View Air Quality → Get Healthier Path
- Ample spacing between cards and generous internal padding

**Live Demo Section:**
- Full-width interactive map preview showing route comparison
- Floating comparison cards above map (side-by-side)
- Clean white cards with AQI metrics, distance, time
- Screenshot or live demo of interface

**Health Impact (2-column, gap-12):**
- Left: Large statistics in cards (rounded-2xl, shadow-sm, p-8)
  - "65% Less Pollution Exposure" type metrics
  - Each stat in its own card for emphasis
- Right: High-quality image of person exercising outdoors in nature
- Section has extra vertical spacing (py-24)

**Testimonial Section:**
- 2-column grid of testimonial cards
- Each card: white, rounded-2xl, shadow-sm, p-6
- Quote, name, role in clean typography

**Final CTA Section (py-24):**
- Centered content in max-w-2xl
- Large headline, supporting text, primary CTA button
- Clean, focused, lots of white space around

**Footer:**
- Minimal, clean design with border-t
- Two columns: Links (About, Privacy, Data Sources) | Newsletter signup
- Google API attribution
- Generous py-12 spacing

### Map Interface Components

**Location Input Cards:**
- White cards with rounded-xl, shadow-sm
- Clear labels, large input fields
- Autocomplete dropdown: white, shadow-md
- Swap button: minimal icon button between inputs

**Route Options Panel:**
- Floating white card (rounded-2xl, shadow-md, p-6)
- Transport mode: Clean icon buttons with selected state
- Air quality priority slider: minimal design with green accent on thumb
- "Find Routes" button: full-width, primary style

**Route Comparison Cards:**
- Two floating white cards side-by-side above map
- Each card: rounded-xl, shadow-md, p-6
- Clear metric hierarchy: Large AQI number, distance, time below
- "Select Route" button at bottom of each card

**AQI Legend:**
- Horizontal card at bottom of map
- Gradient bar with clean breakpoint labels
- Minimal design, shadow-sm

**Map Markers:**
- Simple circular badges for pollution hotspots
- Clean number display, no excessive decoration
- Park markers: subtle leaf icon

### Forms & Buttons

**Primary Button:**
- Large touch targets: px-8 py-4
- Rounded-lg
- Implements own hover/active states
- When on images: backdrop-blur-sm bg-white/90

**Secondary Button:**
- Outlined variant with border-2
- Same sizing as primary

**Input Fields:**
- Minimal border design
- Rounded-lg
- Focus state: subtle ring

## Images

**Hero Image:**
- Professional photo of person jogging in park with clean air/nature
- Right side of hero (40% width desktop)
- High quality, bright, aspirational
- Natural lighting, green environment visible

**Health Impact Image:**
- Authentic photo of person exercising outdoors
- Professional quality, diverse representation
- Natural park/green setting
- Right column, balanced with text

**Map Interface Screenshot:**
- Clean mockup of route comparison interface
- Shows dual routes with AQI indicators
- Professional, polished presentation

## Accessibility
- Consistent focus indicators: ring-2 ring-offset-2
- ARIA labels for all map controls
- Keyboard navigation throughout
- Color-blind safe: patterns + colors for AQI
- Screen reader announcements for route updates

## Animations
Minimal and refined:
- Route drawing: 600ms ease-out when displaying results
- Card hover: subtle lift (translateY -2px, shadow-md)
- Page load: 400ms fade-in
- NO scroll animations
- Loading: Minimal spinner
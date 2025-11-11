# BreatheEasy Route Planner - Design Guidelines

## Design Approach
**Selected System:** Material Design with custom health-focused adaptations
**Rationale:** Map-based interfaces benefit from Material's clear hierarchy and spatial design principles. Google Maps integration suggests natural Material alignment while allowing health-oriented customizations.

**Key Design Principles:**
- Clarity over decoration: Health data must be immediately comprehensible
- Visual hierarchy through pollution severity (critical information first)
- Breathing room: Generous spacing reflects the app's clean-air mission
- Trust through transparency: Show data sources and update times

## Typography

**Font Family:** Inter (via Google Fonts CDN)
- Primary: Inter (400, 500, 600)
- Data/Metrics: Inter (600, 700) - tabular numerals

**Hierarchy:**
- Hero Headline: text-5xl font-semibold (health-focused messaging)
- Section Headers: text-3xl font-semibold
- Route Labels: text-lg font-medium
- AQI Values: text-2xl font-bold (critical data)
- Body Text: text-base font-normal
- Map Labels: text-sm font-medium
- Data Timestamps: text-xs font-normal

## Layout System

**Spacing Primitives:** Tailwind units of 2, 4, 6, and 8
- Component padding: p-4, p-6
- Section spacing: py-8, py-12
- Card gaps: gap-4, gap-6
- Map controls: m-2, m-4

**Container Strategy:**
- Full-width map interface: w-full h-screen
- Control panels: max-w-md (side panels)
- Landing content: max-w-6xl mx-auto

## Component Library

### Core Navigation
**Header (Desktop):**
- Fixed top navigation with blur backdrop
- Logo + app name (left), quick-start CTA + sign-in (right)
- Height: h-16
- Shadow on scroll

**Mobile Navigation:**
- Minimal header with hamburger menu
- Floating action button for quick route start

### Map Interface
**Primary Map View:**
- Full-screen interactive map (Google Maps API)
- Pollution overlay with graduated opacity based on AQI levels
- Hotspot markers with pulsing animation (subtle, 2-second interval)
- Park/green zone highlights with leaf icon markers

**Route Display:**
- Primary route: solid line (thicker stroke, 4px)
- Alternative route: dashed line (thinner, 2px)
- Route segments color-coded by AQI along path
- Distance and AQI comparison cards floating above map

### Input Components
**Location Search:**
- Dual input cards (Start/End)
- Auto-complete dropdown with place details
- Swap locations button between inputs
- "Use current location" quick action

**Route Options Panel:**
- Toggle group: Walking / Running / Biking (icons + labels)
- Slider: Prioritize speed vs. air quality (0-100 scale)
- "Find Routes" primary action button

### Data Visualization
**AQI Legend Card:**
- Horizontal gradient bar showing AQI scale (0-500)
- Breakpoints with labels: Good / Moderate / Unhealthy / Hazardous
- Live AQI reading for current location

**Route Comparison Cards:**
- Side-by-side metric comparison
- Fastest route vs. Cleanest route
- Metrics: Distance, Time, Avg AQI, Hotspots crossed
- "Select Route" action buttons

**Pollution Hotspot Markers:**
- Circular badges with AQI number
- Size varies by severity
- Click reveals details: pollutant breakdown, sources

### Landing Page Structure

**Hero Section (100vh):**
- Split layout: Left = compelling headline + subheading + CTA, Right = hero image
- Headline: "Breathe Easier on Every Journey"
- Subheading: Real-time air quality routing for healthier walks, runs, and bike rides
- Primary CTA: "Plan Your Route"
- Trust indicator: "Powered by Google Air Quality Data"

**How It Works (3-column grid):**
- Icon-driven feature cards
- 1: Enter start/end points
- 2: View pollution hotspots
- 3: Get cleaner-air routes
- Each card: large icon (top), title, 2-line description

**Live Map Preview:**
- Interactive demo showing sample route comparison
- Animated route drawing effect on scroll-in
- Caption: "See the difference clean air routes can make"

**Health Impact Section (2-column):**
- Left: Statistics and health benefits (reduced exposure metrics)
- Right: Image of person exercising outdoors in nature
- Stats in large, bold numbers with descriptive labels

**CTA Section:**
- Centered, focused conversion area
- Primary: "Start Planning Healthier Routes"
- Secondary support text about free access

**Footer:**
- Links: About, Data Sources, Privacy, Contact
- Google Air Quality API attribution
- Social links if applicable
- Newsletter signup: "Get air quality alerts for your area"

### Forms & Inputs
**Text Inputs:**
- Outlined style with clear labels
- Autocomplete suggestions in dropdown
- Active state: slight scale (1.01)
- Error states with helper text

**Buttons:**
- Primary: Solid, rounded-lg, px-6 py-3
- Secondary: Outlined variant
- Icon buttons: Square (h-10 w-10) with centered icon
- Floating action: Circular, shadow-lg, fixed position

## Images

**Hero Image:**
- Large, aspirational image showing person walking/running in clean, green environment
- Position: Right side of hero section (50% width on desktop, full-width on mobile below text)
- Treatment: Subtle overlay for text contrast if CTA placed on image
- Alternative: Abstract illustration of lungs with clean air/nature motif

**Health Impact Section:**
- Authentic photo of diverse person exercising outdoors
- Natural setting with visible greenery/park environment
- Position: Right column, ~40% of section width

**Map Placeholder (Landing):**
- Screenshot or illustration of app interface showing route comparison
- Position: Full-width section between features and health impact
- Include visible AQI indicators and route lines

## Accessibility
- ARIA labels for all map controls and route options
- Keyboard navigation for all interactive elements
- Focus indicators: 2px solid outline with offset
- Color-blind friendly pollution indicators (use patterns + colors)
- Screen reader announcements for route calculations and AQI updates
- Alt text for all informational images

## Animations
Use sparingly and purposefully:
- Route drawing animation (800ms ease-in-out) when displaying results
- Pollution marker pulse (2s infinite, subtle)
- Page transitions: Fade-in only (300ms)
- NO scroll-triggered animations beyond initial fade-in
- Loading states: Simple spinner for API calls
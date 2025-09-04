# Accessibility Beyond Compliance: A Holistic Outlook

A fully accessible presentation built with React, Next.js, Reveal.js, and SCSS, following Thomson Reuters branding guidelines and exceeding WCAG 2.1 AA standards.

## 🎯 Overview

This presentation explores accessibility as more than just compliance—it's a reflection of our values, personal, ethical, and cultural. The presentation covers three interconnected ideas:

1. **The Limits of Compliance** - How following rules doesn't always mean including people
2. **Accessibility Meets Identity** - How ability intersects with gender, race, language, and more  
3. **Designing with Intention** - Shifting from checklists to conscious, inclusive design decisions

## ✨ Accessibility Features

### 100% WCAG 2.1 AA Compliance
- **Semantic HTML Structure** - Proper use of `<section>`, `<header>`, `<main>`, and landmark roles
- **ARIA Labels & Roles** - Comprehensive labeling for screen readers
- **Color Contrast** - All text meets WCAG AA contrast ratios (4.5:1 minimum)
- **Font Sizes** - Minimum 14px for body text, scalable typography
- **Keyboard Navigation** - Full presentation control via keyboard
- **Screen Reader Support** - Optimized for NVDA, JAWS, and VoiceOver

### Advanced Accessibility Features
- **Reduced Motion Support** - Respects `prefers-reduced-motion` settings
- **High Contrast Mode** - Automatic adaptation for high contrast preferences
- **Focus Management** - Intelligent focus handling during slide transitions
- **Live Regions** - Dynamic content announcements for screen readers
- **Skip Links** - Quick navigation to main content
- **Keyboard Shortcuts** - Comprehensive keyboard control system

### Keyboard Navigation
- **Arrow Keys** - Navigate between slides
- **Space/Enter** - Advance to next slide
- **H Key** - Hear navigation help
- **Escape** - Focus current slide
- **Tab** - Navigate interactive elements

## 🚀 Quick Start

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/username/accessibility-presentation.git
   cd accessibility-presentation
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open in browser**
   \`\`\`
   http://localhost:3000
   \`\`\`

## 🏗️ Project Structure

\`\`\`
accessibility-presentation/
├── components/
│   ├── PresentationApp.tsx      # Main presentation component
│   └── slides/                  # Individual slide components
│       ├── TitleSlide.tsx
│       ├── OverviewSlide.tsx
│       ├── LimitsOfComplianceSlide.tsx
│       ├── AccessibilityMeetsIdentitySlide.tsx
│       ├── DesigningWithIntentionSlide.tsx
│       └── ConclusionSlide.tsx
├── styles/
│   ├── presentation.scss        # Main presentation styles
│   └── slides.scss             # Slide-specific styles
├── public/
│   ├── .nojekyll               # GitHub Pages configuration
│   └── 404.html                # Custom 404 page
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   └── globals.css             # Global styles
├── next.config.mjs             # Next.js configuration
├── package.json                # Dependencies and scripts
├── DEPLOYMENT.md               # Deployment guide
└── README.md                   # This file
\`\`\`

## 🎨 Thomson Reuters Branding

### Color Palette
- **Primary Orange**: `#FF6200` - Main brand color
- **Dark Blue**: `#0D2C54` - Primary text and headers
- **Light Blue**: `#1C4E80` - Secondary elements
- **Gray Dark**: `#2C2C2C` - Body text
- **Gray Light**: `#F5F5F5` - Backgrounds
- **White**: `#FFFFFF` - Clean backgrounds

### Typography
- **Primary Font**: Knowledge, Helvetica Neue, Arial (sans-serif)
- **Secondary Font**: Knowledge, Georgia, Times New Roman (serif)
- **Monospace**: SF Mono, Monaco, Consolas (monospace)

### Design Principles
- Clean, professional aesthetic
- High contrast for accessibility
- Consistent spacing and alignment
- Responsive design for all devices

## 📱 Responsive Design

The presentation is fully responsive and works across:
- **Desktop** - Full-featured presentation experience
- **Tablet** - Optimized touch navigation
- **Mobile** - Condensed layout with touch controls
- **Print** - Print-friendly styles for handouts

## 🔧 Development

### Available Scripts

\`\`\`bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Deployment
npm run deploy       # Deploy to GitHub Pages
npm run deploy:clean # Clean deploy (removes old files)

# Testing
npm run serve        # Serve production build locally
npm run check-build  # Build and serve for testing
\`\`\`

### Customization

#### Adding New Slides
1. Create a new component in `components/slides/`
2. Import and add to `PresentationApp.tsx`
3. Update slide counter in the component

#### Modifying Styles
- **Brand Colors**: Update variables in `styles/presentation.scss`
- **Typography**: Modify font definitions and sizes
- **Layout**: Adjust spacing and responsive breakpoints

#### Accessibility Testing
\`\`\`bash
# Install accessibility testing tools
npm install -g @axe-core/cli lighthouse

# Run accessibility audits
axe http://localhost:3000
lighthouse http://localhost:3000 --only-categories=accessibility
\`\`\`

## 🚀 Deployment

### GitHub Pages (Recommended)

The project includes automated GitHub Pages deployment:

1. **Fork/Clone** this repository
2. **Update** `homepage` in `package.json` with your GitHub username
3. **Push** to main branch - deployment happens automatically
4. **Access** your presentation at `https://username.github.io/accessibility-presentation/`

### Manual Deployment

\`\`\`bash
# Build and deploy manually
npm run build
npm run deploy
\`\`\`

### Custom Domain

To use a custom domain:
1. Add `CNAME` file to `public/` directory
2. Configure DNS with your domain provider
3. Update `homepage` in `package.json`

## 🧪 Testing Accessibility

### Screen Reader Testing
- **Windows**: NVDA (free), JAWS
- **macOS**: VoiceOver (built-in)
- **Linux**: Orca

### Keyboard Testing
1. Disconnect mouse/trackpad
2. Navigate entire presentation using only keyboard
3. Verify all interactive elements are reachable
4. Test skip links and focus management

### Automated Testing
\`\`\`bash
# Install testing dependencies
npm install --save-dev @axe-core/react jest-axe

# Run accessibility tests
npm test
\`\`\`

## 📋 Accessibility Checklist

- ✅ Semantic HTML structure
- ✅ ARIA labels and roles
- ✅ Keyboard navigation
- ✅ Screen reader compatibility
- ✅ Color contrast compliance
- ✅ Focus management
- ✅ Reduced motion support
- ✅ High contrast mode
- ✅ Responsive design
- ✅ Print accessibility

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Test** accessibility compliance
4. **Commit** changes (`git commit -m 'Add amazing feature'`)
5. **Push** to branch (`git push origin feature/amazing-feature`)
6. **Open** a Pull Request

### Contribution Guidelines
- Maintain 100% accessibility compliance
- Follow Thomson Reuters branding guidelines
- Test with multiple screen readers
- Include accessibility documentation for new features

## 📚 Resources

### Accessibility Guidelines
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Thomson Reuters Accessibility Standards](https://www.thomsonreuters.com/accessibility)
- [WebAIM Screen Reader Testing](https://webaim.org/articles/screenreader_testing/)

### Development Resources
- [Reveal.js Documentation](https://revealjs.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Accessibility](https://reactjs.org/docs/accessibility.html)

### Testing Tools
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WAVE Web Accessibility Evaluator](https://wave.webaim.org/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♀️ Support

For questions or support:
- **Issues**: [GitHub Issues](https://github.com/username/accessibility-presentation/issues)
- **Discussions**: [GitHub Discussions](https://github.com/username/accessibility-presentation/discussions)
- **Email**: accessibility@thomsonreuters.com

## 🏆 Acknowledgments

- Thomson Reuters Accessibility Team
- Reveal.js community
- Web accessibility advocates and testers
- Open source contributors

---

**"Humanity has different shapes and edges—and so should our design practices."**

Built with ❤️ for accessibility by Thomson Reuters

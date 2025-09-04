# Contributing Guidelines

Thank you for your interest in contributing to the Accessibility Beyond Compliance presentation! This document provides guidelines for contributing while maintaining our high accessibility standards.

## Code of Conduct

We are committed to providing a welcoming and inclusive environment for all contributors, regardless of ability, background, or experience level.

## Getting Started

### Prerequisites
- Node.js 18+
- Git
- Basic understanding of accessibility principles
- Familiarity with React, Next.js, and SCSS

### Development Setup
1. Fork the repository
2. Clone your fork: `git clone https://github.com/yourusername/accessibility-presentation.git`
3. Install dependencies: `npm install`
4. Start development server: `npm run dev`
5. Create a feature branch: `git checkout -b feature/your-feature-name`

## Accessibility Requirements

All contributions MUST maintain 100% WCAG 2.1 AA compliance. Before submitting:

### Required Testing
1. **Automated Testing**
   \`\`\`bash
   npm run test:accessibility
   axe http://localhost:3000
   lighthouse http://localhost:3000 --only-categories=accessibility
   \`\`\`

2. **Manual Testing**
   - Navigate entire presentation using only keyboard
   - Test with screen reader (NVDA, JAWS, or VoiceOver)
   - Verify color contrast meets WCAG AA standards
   - Test with high contrast mode enabled
   - Verify reduced motion preferences are respected

3. **Cross-browser Testing**
   - Chrome/Chromium with accessibility extensions
   - Firefox with accessibility features
   - Safari with VoiceOver
   - Edge with accessibility tools

### Accessibility Checklist
- [ ] Semantic HTML structure maintained
- [ ] ARIA labels and roles properly implemented
- [ ] Keyboard navigation works for all new features
- [ ] Screen reader announcements are appropriate
- [ ] Color contrast meets WCAG AA (4.5:1 minimum)
- [ ] Focus indicators are visible and clear
- [ ] No keyboard traps introduced
- [ ] Content is logically ordered
- [ ] Alternative text provided for images
- [ ] Form labels are properly associated

## Thomson Reuters Branding

### Design Guidelines
- Use only approved Thomson Reuters colors
- Follow typography hierarchy
- Maintain consistent spacing and alignment
- Ensure responsive design works across devices

### Brand Colors
\`\`\`scss
$tr-orange: #FF6200;      // Primary brand color
$tr-dark-blue: #0D2C54;   // Headers and primary text
$tr-light-blue: #1C4E80;  // Secondary elements
$tr-gray-dark: #2C2C2C;   // Body text
$tr-gray-light: #F5F5F5;  // Backgrounds
\`\`\`

## Types of Contributions

### Bug Fixes
- Focus on accessibility-related issues
- Include steps to reproduce
- Provide clear description of the fix
- Add regression tests where possible

### New Features
- Discuss major changes in an issue first
- Ensure feature enhances accessibility
- Include comprehensive documentation
- Add appropriate tests

### Documentation
- Keep accessibility documentation current
- Include code examples where helpful
- Update README if needed
- Maintain clear, concise language

### Styling Improvements
- Follow Thomson Reuters brand guidelines
- Maintain or improve accessibility
- Test across different devices and browsers
- Consider users with different visual needs

## Submission Process

### Pull Request Guidelines
1. **Title**: Clear, descriptive title
2. **Description**: 
   - What changes were made
   - Why the changes were necessary
   - How accessibility was maintained/improved
   - Testing performed

3. **Checklist**: Complete the PR template checklist
4. **Screenshots**: Include before/after if visual changes
5. **Accessibility Testing**: Document testing performed

### Review Process
1. Automated accessibility tests must pass
2. Code review by maintainers
3. Accessibility review by accessibility team
4. Manual testing verification
5. Approval and merge

## Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow existing code patterns
- Write self-documenting code
- Include comments for complex accessibility implementations

### Component Structure
\`\`\`tsx
// Example accessible component structure
export default function AccessibleSlide() {
  return (
    <section 
      role="tabpanel" 
      aria-label="Slide title"
      tabIndex={-1}
    >
      <header>
        <h2>Slide Title</h2>
      </header>
      <main>
        {/* Slide content */}
      </main>
    </section>
  )
}
\`\`\`

### SCSS Guidelines
\`\`\`scss
// Use semantic class names
.slide-content {
  // Ensure sufficient color contrast
  color: $tr-gray-dark; // Meets WCAG AA
  background: $tr-white;
  
  // Provide focus indicators
  &:focus {
    outline: 2px solid $tr-orange;
    outline-offset: 2px;
  }
}
\`\`\`

## Testing Your Changes

### Local Testing
\`\`\`bash
# Run development server
npm run dev

# Build for production
npm run build

# Test production build
npm run serve

# Run accessibility tests
npm run test:accessibility
\`\`\`

### Accessibility Testing Tools
- **Browser Extensions**: axe DevTools, WAVE
- **Screen Readers**: NVDA (Windows), VoiceOver (macOS), Orca (Linux)
- **Keyboard Testing**: Disconnect mouse, navigate with keyboard only
- **Color Testing**: Use high contrast mode, test with color blindness simulators

## Documentation Requirements

### Code Documentation
- Comment complex accessibility implementations
- Explain ARIA usage and rationale
- Document keyboard interaction patterns
- Include accessibility considerations in component docs

### Accessibility Documentation
- Update ACCESSIBILITY.md for significant changes
- Document new keyboard shortcuts
- Explain any accessibility trade-offs made
- Include testing procedures for new features

## Getting Help

### Resources
- **Accessibility Questions**: Create an issue with "accessibility" label
- **Technical Questions**: Use GitHub Discussions
- **Thomson Reuters Guidelines**: Internal accessibility team
- **General Accessibility**: WebAIM, A11y Project, WCAG documentation

### Contact
- **GitHub Issues**: For bugs and feature requests
- **Discussions**: For questions and general discussion
- **Email**: accessibility@thomsonreuters.com for sensitive issues

## Recognition

Contributors who help maintain and improve accessibility will be:
- Listed in the project contributors
- Recognized in release notes
- Invited to accessibility team meetings (Thomson Reuters employees)

Thank you for helping make this presentation accessible to everyone!

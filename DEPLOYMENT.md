# Deployment Guide

## GitHub Pages Deployment

This presentation is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment

1. **Push to main branch**: Any push to the `main` or `master` branch will trigger automatic deployment
2. **GitHub Actions**: The workflow builds the application and deploys it to GitHub Pages
3. **Live URL**: The presentation will be available at `https://username.github.io/accessibility-presentation/`

### Manual Deployment

If you prefer to deploy manually using the gh-pages package:

\`\`\`bash
# Install dependencies
npm install

# Build and deploy
npm run deploy
\`\`\`

### Local Development

\`\`\`bash
# Start development server
npm run dev

# Build for production
npm run build

# Serve production build locally
npm run serve
\`\`\`

### Configuration

#### Repository Settings

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. The site will be deployed automatically

#### Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` directory with your domain
2. Configure DNS settings with your domain provider
3. Update the `homepage` field in `package.json`

### Troubleshooting

#### Build Failures

- Check that all dependencies are properly installed
- Ensure Node.js version 18 or higher is used
- Verify that the build completes successfully locally

#### Asset Loading Issues

- Confirm `basePath` and `assetPrefix` are correctly configured in `next.config.mjs`
- Check that the repository name matches the path in the configuration

#### Accessibility Testing

Before deployment, test the presentation with:

- Screen readers (NVDA, JAWS, VoiceOver)
- Keyboard-only navigation
- High contrast mode
- Reduced motion preferences

### Performance Optimization

The build is optimized for GitHub Pages with:

- Static export generation
- Asset optimization
- CSS and JavaScript minification
- Reveal.js package optimization

### Security

- All external dependencies are pinned to specific versions
- No sensitive information is included in the build
- HTTPS is enforced through GitHub Pages

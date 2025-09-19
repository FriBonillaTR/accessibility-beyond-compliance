## External Markdown File

This slide content is loaded from an external markdown file.

### Benefits of External Files

- Easier to edit content
- Better version control
- Separation of content and presentation
- Can be edited by non-developers

## Accessibility in Markdown

- Use proper heading hierarchy (##, ###, ####)
- Include alt text for images: `![Alt text](image.jpg)`
- Use semantic markup
- Keep content structure clear

## Code Examples

\`\`\`typescript
interface AccessibilityProps {
ariaLabel: string;
role?: string;
tabIndex?: number;
}

const AccessibleComponent: React.FC<AccessibilityProps> = ({
ariaLabel,
role = "button",
children
}) => {
return (
<div role={role} aria-label={ariaLabel}>
{children}
</div>
);
};
\`\`\`

Note: Remember to test with screen readers!

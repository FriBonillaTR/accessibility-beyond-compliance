export default function ExternalMarkdownSlide() {
  return (
    <section
      data-transition="zoom"
      data-markdown="/slides/example.md"
      data-separator="^\n\n\n"
      data-separator-vertical="^\n\n"
      data-charset="iso-8859-15"
    />
  );
}

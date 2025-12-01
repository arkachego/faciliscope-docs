// Documentation content loader
// This utility loads markdown content files dynamically

const contentCache = {};

export const loadDocumentationContent = async (filePath) => {
  // Check cache first
  if (contentCache[filePath]) {
    return contentCache[filePath];
  }

  try {
    // Try fetching from public directory first (works in both dev and prod)
    const response = await fetch(`/docs/content/${filePath}`);
    
    if (response.ok) {
      const content = await response.text();
      
      // Check if the response is HTML (SPA fallback) instead of markdown
      const trimmedContent = content.trim();
      if (trimmedContent.startsWith('<!doctype') || trimmedContent.startsWith('<html')) {
        // This is HTML, not markdown - treat as failed fetch and use fallback
        throw new Error('Response is HTML, not markdown');
      }
      
      contentCache[filePath] = content;
      return content;
    }
    
    // Fallback: try importing as raw text (for development with Vite)
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // @vite-ignore
      const module = await import(/* @vite-ignore */ `../../public/docs/content/${filePath}?raw`);
      const content = module.default;
      contentCache[filePath] = content;
      return content;
    } catch (importError) {
      console.error('Failed to load content:', importError);
      // Return placeholder content
      return `# Content Loading\n\nContent for "${filePath}" is being prepared.`;
    }
  } catch (error) {
    // If fetch failed or returned HTML, try the import fallback
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // @vite-ignore
      const module = await import(/* @vite-ignore */ `../../public/docs/content/${filePath}?raw`);
      const content = module.default;
      contentCache[filePath] = content;
      return content;
    } catch (importError) {
      console.error('Error loading documentation content:', error, importError);
      // Return placeholder content
      return `# Content Loading\n\nContent for "${filePath}" is being prepared.`;
    }
  }
};

export const clearContentCache = () => {
  Object.keys(contentCache).forEach(key => delete contentCache[key]);
};


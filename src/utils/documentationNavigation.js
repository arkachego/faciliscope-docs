import structure from '../docs/structure.json';

// Flatten the documentation structure into a simple array
export const flattenDocumentationStructure = () => {
  const items = [];

  if (!structure || !structure.sections) {
    return items;
  }

  for (const section of structure.sections) {
    if (!section.items) continue;

    for (const item of section.items) {
      items.push({
        path: item.path,
        title: item.title,
        file: item.file,
      });

      if (item.children && Array.isArray(item.children)) {
        for (const child of item.children) {
          items.push({
            path: child.path,
            title: child.title,
            file: child.file,
          });
        }
      }
    }
  }

  return items;
};

// Find previous and next docs based on path (mirrors webapp implementation)
export const findPreviousNext = (currentPath, basePath = '/docs') => {
  const items = flattenDocumentationStructure();

  const normalizeForComparison = (path) =>
    path
      .replace(/^\/docs/, '')
      .replace(/^\/documentation/, '')
      .replace(/\/$/, '')
      .toLowerCase();

  const normalizedCurrentPath = normalizeForComparison(currentPath);

  let currentIndex = -1;
  for (let i = 0; i < items.length; i++) {
    const normalizedItemPath = normalizeForComparison(items[i].path);
    if (
      normalizedCurrentPath === normalizedItemPath ||
      normalizedCurrentPath.endsWith(normalizedItemPath) ||
      normalizedItemPath.endsWith(normalizedCurrentPath)
    ) {
      currentIndex = i;
      break;
    }
  }

  if (currentIndex === -1) {
    const pathParts = normalizedCurrentPath.split('/').filter(Boolean);
    const lastPart = pathParts[pathParts.length - 1];

    for (let i = 0; i < items.length; i++) {
      const normalizedItemPath = normalizeForComparison(items[i].path);
      const itemParts = normalizedItemPath.split('/').filter(Boolean);
      const itemLastPart = itemParts[itemParts.length - 1];

      if (lastPart && itemLastPart && lastPart === itemLastPart) {
        currentIndex = i;
        break;
      }
    }
  }

  if (currentIndex === -1) {
    return { previous: null, next: null };
  }

  const previous = currentIndex > 0 ? items[currentIndex - 1] : null;
  const next = currentIndex < items.length - 1 ? items[currentIndex + 1] : null;

  return {
    previous: previous
      ? {
          ...previous,
          path: previous.path.replace('/documentation', basePath),
        }
      : null,
    next: next
      ? {
          ...next,
          path: next.path.replace('/documentation', basePath),
        }
      : null,
  };
};



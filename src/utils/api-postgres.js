const fs = require('fs');

const { glob } = require('glob');

const getExcerpt = require('./get-excerpt');

const POSTGRES_DIR_PATH = 'content/postgresql';

const getPostSlugs = async (pathname) => {
  const files = await glob.sync(`${pathname}/**/*.md`, {
    ignore: ['**/RELEASE_NOTES_TEMPLATE.md', '**/README.md', '**/unused/**'],
  });
  return files.map((file) => file.replace(pathname, '').replace('.md', ''));
};

const getPostBySlug = async (path, basePath) => {
  try {
    const content = fs.readFileSync(`${basePath}${path}.md`, 'utf-8');

    const titleRegex = /\|\s*(.*?)\s*\|/g; // Global search for all table row beginnings

    let title = 'No title found'; // Default text if no title is found
    let match;

    // Check all instances of the regex match and find the title
    while ((match = titleRegex.exec(content)) !== null) {
      // The first capturing group (.*?) is non-greedy and captures the content of the first cell
      if (match[1] && match[1].trim() !== '') {
        title = match[1].trim();
        break; // Exit the loop once the first non-empty title is found
      }
    }

    const excerpt = getExcerpt(content, 200);

    return { title, excerpt, content };
  } catch (e) {
    return null;
  }
};

const getAllPosts = async () => {
  const paths = await getPostSlugs(POSTGRES_DIR_PATH);

  return paths.map((path) => {
    if (!getPostBySlug(path, POSTGRES_DIR_PATH)) return;
    const data = getPostBySlug(path, POSTGRES_DIR_PATH);

    const slugWithoutFirstSlash = path.slice(1);

    return { slug: slugWithoutFirstSlash, ...data };
  });
};

const getSidebar = () => {
  const sidebar = fs.readFileSync('content/postgresql/sidebar/sidebar.json', 'utf8');

  return JSON.parse(sidebar);
};

export { getAllPosts, getPostBySlug, getPostSlugs, getSidebar, POSTGRES_DIR_PATH };

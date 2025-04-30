// https://github.com/vuejs/vitepress/issues/1450#issuecomment-1336358123
const filesProgram = import.meta.glob('/code/program/practice/*.md', { import: '__pageData', eager: true });

const posts = (files) => Object.values(files).map(({ title, relativePath, frontmatter }) => ({
    ...frontmatter,
    title,
    href: `/${relativePath.replace(/\.md$/, '')}`,
}));

export const postsProgram = posts(filesProgram);
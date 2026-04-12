import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface PostMeta {
  title: string
  date: string
  excerpt: string
  readTime: string
  slug: string
  visible: boolean
}

export interface Post extends PostMeta {
  content: string
  htmlContent: string
}

function markdownToHtmlSync(markdown: string): string {
  const result = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .processSync(markdown)
  return result.toString()
}

export function getAllPosts(): PostMeta[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data } = matter(fileContents)

        return {
          slug,
          title: data.title || '',
          date: data.date || '',
          excerpt: data.excerpt || '',
          readTime: data.readTime || '',
          visible: data.visible || false,
        }
      })

    return allPostsData
      .filter((post) => post.visible)
      .sort((a, b) => (a.date < b.date ? 1 : -1))
  } catch (error) {
    console.error('Error reading posts directory:', error)
    return []
  }
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const htmlContent = markdownToHtmlSync(content)

    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      excerpt: data.excerpt || '',
      readTime: data.readTime || '',
      visible: data.visible !== undefined ? data.visible : true,
      content,
      htmlContent,
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export function getAllPostSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map((fileName) => fileName.replace(/\.mdx$/, ''))
  } catch (error) {
    console.error('Error reading post slugs:', error)
    return []
  }
}

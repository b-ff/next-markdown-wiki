import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content')

export async function getPageContent(pathname: string): Promise<{pathname: string, html: string, meta: Record<string, string>}> {
  const fullPath = path.join(postsDirectory, pathname)
  const fileContents = fs.existsSync(fullPath) && fs.lstatSync(fullPath).isDirectory() ? fs.readFileSync(`${fullPath}/index.md`, 'utf8') : fs.readFileSync(`${fullPath}.md`, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(remarkHtml)
    .process(matterResult.content)

  const html = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    pathname,
    html,
    meta: matterResult.data
  }
}

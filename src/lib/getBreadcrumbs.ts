import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content')

export interface IBreadcrumb {
  title: string,
  url?: string
}

export function getBreadcrumbs(pathSegments: string[]): IBreadcrumb[] {
  const paths: string[] = ['/']

  pathSegments.reduce((url, segment) => {
    const pagePath = `${url}/${segment}`

    paths.push(pagePath)

    return pagePath
  }, '')


  return paths.map((pageUrl) => {
    let fileContents: string;

    try {
      const fullPath = path.join(postsDirectory, pageUrl)
      fileContents = fs.existsSync(fullPath) && fs.lstatSync(fullPath).isDirectory() ? fs.readFileSync(`${fullPath}/index.md`, 'utf8') : fs.readFileSync(`${fullPath}.md`, 'utf8')
    } catch (error) {
      console.error(error)
      fileContents = ''
    }

    // Use gray-matter to parse the post metadata section
    const { data } = matter(fileContents)

    const match = fileContents.match(/#\s?(.+)\n/)
    const h1 = match ? match[1] : null
    const fileName = pageUrl.match(/\/([^\/]+)$/)

    return {
      title: fileContents ? data.breadcrumbTitle ?? data.title ?? h1 ?? fileName : '#',
      url: fileContents ? pageUrl : undefined
    }
  })
}

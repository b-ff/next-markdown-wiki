import { globSync } from 'glob'
import path from 'path'

export function getStaticPaths(): Array<string[]> {
  const contentDirectory = path.join(process.cwd(), "content")

  return globSync(`${contentDirectory}/**/*`)
    .map((filepath) => filepath
        .replace(`${contentDirectory}/`, "")
        .replace(/\/?index\.md$/, "")
        .replace(/\.md$/, '')
    )
    .filter(Boolean)
    .map(filepath => filepath.split('/'))
}

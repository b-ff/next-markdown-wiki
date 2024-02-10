---
title: "Adding content"
---

# Adding content

To add new page content create Markdown file in `/content` folder.
Use URL allowed characters for a file name.

To update home page text use `index.md` file in the root of `/content` folder.

## Links

Adding links to another pages is quite straight-forward.
You can use either relative or absolute paths reflecting file structure inside `/content` folder.
Just do not add `.md` at the end of the link URL.

**For example:**

- If you want to create link to file `/content/about.md` - use `/about`.
- Link to `/content/articles/a.md` will be `/articles/a`.

## Meta-tags

To add custom meta-tags to your page, such as title or description use the following format at the top of the Markdown file:

```
---
title: "Your awesome page title!"
description: "Description of how come your page so awesome"
---
```

List of supported meta-tags could be found in related [Next.js docs page](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields).

## Breadcrumbs

You can use meta-tags block described above to add `breadcrumbTitle` property.
This property defines how this page should be displayed in breadcrumbs for nested pages.
If no `breadcrumbTitle` specified, breadcrumbs mechanism will try to use the following properties ordered by priority:

- Meta `title` attribute
- H1 tag from Markdown content of the file
- File name

## Custom pages

Need a page with custom functionality or layout? No problem!

Create a file `/src/app/yourCustomPagePath/Page.tsx` with function returning JSX as default export.

Follow [Next.js Pages and Layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts) document for more details.

## Custom "Not found" page.

If you want to update "Not found" page text — please, use `/content/404.md` file.

However, if you want to completely update layout of "Not found" page you need to update contents of `catch (error) {}` block in following files:

- `/src/app/page.tsx`
- `/src/app/[...path]/page.tsx`

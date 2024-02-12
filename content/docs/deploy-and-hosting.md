---
title: "Deploying & Hosting"
---

# Deploying & Hosting

> There are two chairs...

## Automatic rebuild and deploy options:

This method works best for scenario when you want to automatically deploy changes you made without building static web pages on your machine.

### Pros

- No need to execute build command on your machine
- You can edit files with online IDE on your Git hosting
- Depending on your configuration you might get autodeploy once your website's repo gets updated
- You can add APIs and server scripts to use on your server

### Cons

- You need to use specific hosting with running NodeJS and deploy pipelines
- You need to understand how your deploy pipelines or CI/CD processes should be configured and work
- This method requires some resources on your server to build pages dynamically.

### Setup deploy

- Host your app on [GitHub](https://github.com/), [GitLab](https://gitlab.com/), [BitBucket](https://bitbucket.com) or any other Git host.
- Use [Vercel](https://vercel.com/) or [Netlify](https://netlify.com) to automatically watch your repo for changes and deploy new versions
- _(Alternatively)_ Use any NodeJS hosting and either setup CI/CD that will watch your repo changes or deploy it manually.
- Great success!

## Manual build and deploy:

### Pros

- No specific hosting requirements. You can go with anything that can serve static HTML files.
- No costly dynamic renders of your content

### Cons

- You need to run build command yourself
- You cannot add APIs or server scripts

### How to generate static pages

- Edit your content
- Run `npm run build` or `yarn run build` to generate updated static pages
- Upload static files from `/out` folder to your static website hosting, like [GitHub Pages](https://pages.github.com/), [surge.sh](https://surge.sh/) and etc. No need in running NodeJS on your host.

---

[Contribute to this project](/contribute)

---

Please, refer to [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

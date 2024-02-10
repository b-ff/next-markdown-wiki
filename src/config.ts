import { Metadata } from "next";

interface IAppConfig {
  title: string,
  slogan: string,
  metadata: Metadata
}

export const config: IAppConfig = {
  title: "Next Markdown Wiki",
  slogan: "Turn markdown into Next.js website",
  metadata: {
    title: {
      default: "Next Markdown Wiki",
      template: "%s :: Next Markdown Wiki",
    },
    generator: "Next Markdown Wiki",
  }
}

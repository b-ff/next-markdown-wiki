import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import Image from "next/image";

import styles from "./Layout.module.css";
import { config } from "@/config";

interface ILayourProps {
  children: React.ReactNode;
}

export const Layout: React.FC<ILayourProps> = ({ children }) => (
  <section className={styles.layout}>
    <Header
      title={config.title}
      slogan={config.slogan}
      logoSrc="/sample-logo.jpg"
    >
      <a
        href="https://www.buymeacoffee.com/slawwwa"
        target="_blank"
        className={styles.coffeeButton}
      >
        <picture>
          <img
            srcSet="https://cdn.buymeacoffee.com/buttons/v2/arial-green.png"
            alt="Buy Me A Coffee"
            style={{
              height: "45px !important",
              width: "162px !important",
            }}
          />
        </picture>
      </a>
    </Header>
    <main className={styles.main}>{children}</main>
    <Footer>
      <section>
        2024 <small className={styles.small}>/</small> Created by{" "}
        <a href="https://slawwwa.me" target="_blank">
          slawwwa.me
        </a>
        <small className={styles.small}>/</small>
        Powered by{" "}
        <a href="https://nextjs.org/" target="_blank">
          Next.js
        </a>
        <small className={styles.small}>/</small>
        Image by GarryKillian on{" "}
        <a
          href="https://www.freepik.com/free-vector/abstract-vector-colorful-mesh-dark-background-futuristic-style-card-elegant-background-business-presentations-corrupted-point-sphere-chaos-aesthetics_22421018.htm#page=2&query=glitch&position=37&from_view=search&track=sph&uuid=6388ac6a-d0cf-4bf4-b0af-0a54ba9ce8e9"
          target="_blank"
        >
          Freepik
        </a>
        <small className={styles.small}>/</small>
        Follow project on{" "}
        <a href="https://github.com/b-ff/next-markdown-wiki" target="_blank">
          GitHub
        </a>
      </section>
    </Footer>
  </section>
);

import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import Image from "next/image";

import styles from "./Layout.module.css";

interface ILayourProps {
  children: React.ReactNode;
}

export const Layout: React.FC<ILayourProps> = ({ children }) => (
  <section className={styles.layout}>
    <Header
      title="Next Markdown Wiki"
      slogan="Turn markdown into Next.js website"
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
      </section>
    </Footer>
  </section>
);

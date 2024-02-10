import React from "react";

import styles from "./Header.module.css";

interface IHeaderProps {
  title: React.ReactNode;
  slogan: React.ReactNode;
  children?: React.ReactNode;
}

export const Header: React.FC<IHeaderProps> = ({ title, slogan, children }) => (
  <header className={styles.header}>
    {title || slogan ? (
      <a className={styles.heading} href="/">
        {title ? <strong className={styles.title}>{title}</strong> : null}
        {slogan ? <small className={styles.slogan}>{slogan}</small> : null}
      </a>
    ) : null}
    {children}
  </header>
);

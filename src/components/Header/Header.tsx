import React from "react";

import styles from "./Header.module.css";

interface IHeaderProps {
  title: React.ReactNode;
  slogan: React.ReactNode;
  logoSrc?: string;
  children?: React.ReactNode;
}

export const Header: React.FC<IHeaderProps> = ({
  title,
  slogan,
  logoSrc,
  children,
}) => (
  <header className={styles.header}>
    <a href="/" className={styles.branding}>
      {logoSrc ? (
        <figure
          className={styles.logo}
          style={{ backgroundImage: `url("${logoSrc}")` }}
        />
      ) : null}
      {title || slogan ? (
        <span className={styles.heading}>
          {title ? <strong className={styles.title}>{title}</strong> : null}
          {slogan ? <small className={styles.slogan}>{slogan}</small> : null}
        </span>
      ) : null}
    </a>
    {children}
  </header>
);

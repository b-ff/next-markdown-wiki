import React from "react";

import styles from "./Footer.module.css";

interface IFooterProps {
  children: React.ReactNode;
}

export const Footer: React.FC<IFooterProps> = ({ children }) => {
  return <footer className={styles.footer}>{children}</footer>;
};

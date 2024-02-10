import { IBreadcrumb } from "@/lib/getBreadcrumbs";
import React from "react";

import styles from "./Breadcrumbs.module.css";

interface IBreadcrumbsProps {
  breadcrumbs: IBreadcrumb[];
}

export const Breadcrumbs: React.FC<IBreadcrumbsProps> = ({ breadcrumbs }) => (
  <ul className={styles.breadcrumbs}>
    {breadcrumbs.map((breadcrumb: IBreadcrumb, idx) => (
      <li key={idx} className={styles.breadcrumbsItem}>
        <a
          href={idx === breadcrumbs.length - 1 ? undefined : breadcrumb.url}
          className={styles.breadcrumbsLink}
        >
          {breadcrumb.title}
        </a>
      </li>
    ))}
  </ul>
);

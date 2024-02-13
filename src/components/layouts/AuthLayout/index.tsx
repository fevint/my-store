import Input from "@/components/ui/Input";
import styles from "./AuthLayout.module.scss";
import Button from "@/components/ui/Button";
import Link from "next/link";

type propsType = {
  error?: string;
  title?: string;
  children: React.ReactNode;
  link: string;
  linkText?: string;
};

const AuthLayout = (props: propsType) => {
  const { error, title, children, link, linkText } = props;
  return (
    <div className={styles.auth}>
      <h1 className={styles.auth__title}>{title}</h1>
      {error && <p className={styles.auth__error}>{error}</p>}
      <div className={styles.auth__form}>{children}</div>
      <p className={styles.auth__link}>
        {linkText}
        <Link href={link}>here</Link>
      </p>
    </div>
  );
};

export default AuthLayout;

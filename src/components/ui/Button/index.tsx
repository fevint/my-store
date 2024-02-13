import React from "react";
import styles from "./Button.module.scss";

type Propstype = {
  type?: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
  onClick?: () => void;
  variant?: string;
  className?: string;
};

const Button = (props: Propstype) => {
  const { type, children, onClick, variant = "primary", className } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

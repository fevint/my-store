import styles from "./Input.module.scss";

type Propstype = {
  label?: string;
  name: string;
  type: string;
  placeholder?: string;
};

const Input = (props: Propstype) => {
  const { label, name, type, placeholder } = props;
  return (
    <div className={styles.container}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        className={styles.container__input}
      ></input>
    </div>
  );
};

export default Input;

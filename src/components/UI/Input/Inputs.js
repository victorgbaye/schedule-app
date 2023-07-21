import React from 'react';
import styles from "./Input.module.scss";


const InputField = ({ type, placeholder, label, name, value, onChange, ...rest }) => {
  return (
    <div className={styles.InputContainer}>
      <label htmlFor={name} className={styles.InputLabel}>{label}</label>
      <input
        autoComplete='false'
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

export default InputField;

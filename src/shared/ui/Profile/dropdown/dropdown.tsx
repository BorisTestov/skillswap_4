import React from 'react';
import styles from './dropdown.module.css';
import { DropdownSelectProps } from './type';

export const DropdownSelect: React.FC<DropdownSelectProps> = ({
  id,
  label,
  options,
  value,
  name,
  onChange,
  placeholder,
}) => {
  const hasOptions = options.length > 0;

  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <select
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className={styles.select}
        disabled={!hasOptions}
      >
        {placeholder && !value && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownSelect;

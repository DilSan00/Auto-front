import clsx from "clsx";
import s from "./Input.module.scss";
import { useState } from "react";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";

export function Input({
  type = "text",
  placeholder,
  validate,
  label,
  onChange,
  className,
  ...props
}) {
  const [isEye, setIsEye] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (isEye ? "text" : "password") : type;

  const handleChange = (e) => {
    onChange?.(e);
  };

  const toggleEye = () => setIsEye((prev) => !prev);

  return (
    <div className={s.inputContainer}>
      <div className={s.container}>
        {label && (
          <label className={s.label} htmlFor={props.id}>
            {label}
          </label>
        )}
        {validate && <p className={s.error}>* {validate}</p>}
      </div>

      <div className={s.content}>
        <input
          id={props.id}
          type={inputType}
          placeholder={placeholder}
          onChange={handleChange}
          className={clsx(s.input, className, type === "number" && s.noSpinner)}
          {...props}
        />

        {isPassword && (
          <div className={s.eye} onClick={toggleEye}>
            {isEye ? <IoEyeSharp size={30} /> : <IoEyeOffSharp size={30} />}
          </div>
        )}
      </div>
    </div>
  );
}

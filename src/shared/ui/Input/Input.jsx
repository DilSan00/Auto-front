import clsx from "clsx";
import s from "./Input.module.scss";

export function Input({
  type,
  placeholder,
  validate,
  label,
  onChange,
  className,
  ...props
}) {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={s.input}>
      <div className={s.container}>
        {label && (
          <label className={s.label} htmlFor={props.id}>
            {label}
          </label>
        )}
        {validate && <p className={s.error}>* {validate}</p>}
      </div>

      <input
        id={props.id}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        className={clsx(s.input, className, type === "number" && s.noSpinner)}
        {...props}
      />
    </div>
  );
}

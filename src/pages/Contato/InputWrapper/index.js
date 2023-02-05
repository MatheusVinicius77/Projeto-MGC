import styles from "./styles.module.css";

export function InputWrapper({
  register,
  label,
  className,
  error,
  placeholder,
  tag = "input",
}) {
  let FormElement;

  if (tag === "input") {
    FormElement = (
      <input
        {...register({ label })}
        className="text-4 color-grey-1"
        placeholder={placeholder}
        autoComplete="off"
      />
    );
  } else {
    FormElement = (
      <textarea
        {...register({ label })}
        className="text-4 color-grey-1"
        placeholder={placeholder}
        autoComplete="off"
      />
    );
  }

  return (
    <div className={`${styles.inputWrapper} ${className}`}>
      <label className="text-1 color-grey-1 weight-1">{label}</label>
      <FormElement />
      <span className="text-4 color-brand-4">{error?.message}</span>
    </div>
  );
}

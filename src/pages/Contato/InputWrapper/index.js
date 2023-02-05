import styles from "./styles.module.css";

export function InputWrapper({
  register,
  label,
  name,
  className,
  errors,
  placeholder,
  tag = "input",
  type = "text",
}) {
  let FormElement;

  if (tag === "input") {
    FormElement = () => (
      <input
        {...register(name)}
        className="text-4 color-grey-1"
        placeholder={placeholder}
        autoComplete="off"
        type={type}
      />
    );
  } else {
    FormElement = () => (
      <textarea
        {...register(name)}
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
      <span className="text-4 color-brand-4">{errors[name]?.message}</span>
    </div>
  );
}

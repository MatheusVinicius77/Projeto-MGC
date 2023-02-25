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
  function formatarCampoCelular(event) {
    const campoCelular = event.target;

    campoCelular.value = campoCelular.value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})(\d+?)$/, "$1");
  }

  let FormElement;

  if (tag === "input") {
    FormElement = () => (
      <input
        {...register(name)}
        className="text-4 color-grey-1"
        placeholder={placeholder}
        autoComplete="off"
        type={type}
        onInput={(event) => label === "Telefone" && formatarCampoCelular(event)}
      />
    );
  } else {
    FormElement = () => (
      <textarea
        {...register(name)}
        className="text-4 color-grey-1"
        placeholder={placeholder}
        autoComplete="off"
        onInput={(event) => label === "Telefone" && formatarCampoCelular(event)}
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

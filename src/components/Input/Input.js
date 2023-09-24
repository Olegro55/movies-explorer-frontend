import "./Input.css";

const Input = ({ name, label, type = "text", value, error, handleChange, ...validationRules }) => {
const errorStyleModifier = error === "" ? "" : " input__field_error";

  return (
    <div className="input">
      <label className="input__label" htmlFor={`${name}-input`}>{label}</label>
      <input id={`${name}-input`} type={type} name={name} value={value} onChange={handleChange} className={`input__field${errorStyleModifier}`} {...validationRules} />
      <span className="input__error">{error}</span>
    </div>
  );
};

export default Input;

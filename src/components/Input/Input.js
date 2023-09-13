import "./Input.css";

const Input = ({ name, label, type = "text" }) => {
  return (
    <div className="input">
      <label className="input__label" for={`${name}-input`}>{label}</label>
      <input id={`${name}-input`} type={type} name={name} className="input__field" />
      <span className="input__error">Что-то пошло не так...</span>
    </div>
  );
};

export default Input;

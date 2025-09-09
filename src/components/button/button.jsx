import style from "./button.module.css";

const Button = ({ children, onClick, variant = "primary" }) => {
  return (
    <button className={`${style.button} ${style[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

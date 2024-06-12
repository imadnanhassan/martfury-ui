import styles from "../../assets/styles/_components/Button.module.scss";

type ButtonProps = {
  label: string;
  onClick: () => void;
  color?: "success" | "danger" | "info";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  color = "info",
  size = "medium",
  disabled = false,
}) => {
  const buttonColorClass =
    color === "success"
      ? styles.success
      : color === "danger"
      ? styles.danger
      : styles.info;

  const buttonSizeClass =
    size === "small"
      ? styles.small
      : size === "medium"
      ? styles.medium
      : styles.large;

  const buttonClasses = [
    styles.button,
    buttonColorClass,
    buttonSizeClass,
    disabled && styles.disabled,
  ].join(" ");

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;

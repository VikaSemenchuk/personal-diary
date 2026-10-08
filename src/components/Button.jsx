// Одна кнопка на весь проєкт: вигляд вибирається пропсом variant.
// Усі інші пропси (onClick, disabled, aria-label…) передаються як є через ...props.

const base =
  "inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 " +
  "font-primary text-sm font-semibold transition-colors duration-150 active:scale-[0.98] " +
  "disabled:cursor-not-allowed disabled:opacity-45";

const variants = {
  primary: "bg-accent-cust text-on-accent-cust hover:bg-accent-cust-hover",
  secondary: "border border-line-strong bg-surface text-text hover:bg-sunken",
  ghost: "bg-transparent text-text hover:bg-sunken",
  danger: "bg-transparent text-error hover:bg-error-soft",
};

const Button = ({
  variant = "primary",
  type = "button",
  className = "",
  ...props
}) => (
  <button
    type={type}
    className={`${base} ${variants[variant]} ${className}`}
    {...props}
  />
);

export default Button;

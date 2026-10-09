const base =
  "group/btn inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 " +
  "font-primary text-sm font-semibold " +
  "transition-[background-color,color,border-color,box-shadow,translate,scale] duration-200 ease-out " +
  "motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 active:scale-[0.97] " +
  "disabled:cursor-not-allowed disabled:opacity-45";

const variants = {
  primary:
    "bg-accent-cust text-on-accent-cust shadow-sm hover:bg-accent-cust-hover hover:shadow-[0_10px_24px_-10px_var(--color-accent-cust)]",
  secondary:
    "border border-line-strong bg-surface text-text hover:border-text-muted hover:bg-sunken",
  ghost: "bg-transparent text-text hover:bg-sunken",
  danger: "bg-transparent text-error hover:bg-error-soft",
  soft: "bg-transparent text-accent-cust-text hover:bg-accent-cust-soft",
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

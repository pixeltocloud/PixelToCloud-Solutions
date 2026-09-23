import { Link } from "react-router-dom";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClass: Record<Variant, string> = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  ghost: "btn btn-ghost",
};

export function Button({
  children,
  variant = "primary",
  href,
  className = "",
  ...rest
}: ButtonProps) {
  const classes = `${variantClass[variant]} ${className}`.trim();

  if (href) {
    const external = href.startsWith("http") || href.startsWith("mailto");
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}

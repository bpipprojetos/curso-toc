import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  fullWidth?: boolean;
}

export function NeonButton({
  children,
  className,
  variant = "primary",
  size = "default",
  fullWidth = false,
  ...props
}: NeonButtonProps) {
  const baseStyles = "font-display font-bold transition-all duration-300 uppercase tracking-wider rounded-md";
  
  const variants = {
    primary: "bg-primary text-black hover:bg-white hover:text-black border-none",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black",
    ghost: "bg-transparent text-primary hover:bg-primary/10 hover:text-primary/80"
  };

  const sizes = {
    default: "h-12 px-6 py-2 text-base",
    sm: "h-9 px-4 text-sm",
    lg: "h-14 px-8 text-lg",
    icon: "h-10 w-10"
  };

  return (
    <Button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth ? "w-full" : "",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}

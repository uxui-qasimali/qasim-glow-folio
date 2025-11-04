import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all duration-320 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--lime)/0.4)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-mono tracking-wide uppercase cursor-hover",
  {
    variants: {
      variant: {
        default:
          "rounded-full bg-[hsl(var(--lime))] text-[hsl(var(--bg-1))] hover:bg-[hsl(var(--lime)/0.9)] hover:shadow-[0_0_18px_hsl(var(--lime)/0.4),0_0_40px_hsl(var(--lime)/0.2)] hover:scale-105",
        outline:
          "rounded-full border-2 border-[hsl(var(--lime))] bg-transparent text-[hsl(var(--lime))] hover:bg-[hsl(var(--lime))] hover:text-[hsl(var(--bg-1))] hover:shadow-[0_0_18px_hsl(var(--lime)/0.4)] hover:scale-105",
        destructive:
          "rounded-full bg-destructive text-destructive-foreground hover:bg-destructive/90",
        secondary:
          "rounded-full bg-[hsl(var(--bg-2))] text-[hsl(var(--text))] border border-[hsl(var(--divider)/0.2)] hover:border-[hsl(var(--lime)/0.4)] hover:bg-[hsl(var(--card))]",
        ghost: "hover:bg-[hsl(var(--lime)/0.1)] hover:text-[hsl(var(--lime))]",
        link: "text-[hsl(var(--lime))] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-10 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

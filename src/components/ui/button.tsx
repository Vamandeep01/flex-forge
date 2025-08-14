import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-FlexForge-orange focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-orange text-white shadow-orange hover:shadow-lg hover:scale-[1.02]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-dark-tertiary bg-dark-secondary text-white hover:bg-dark-tertiary hover:border-FlexForge-orange/50",
        secondary: "bg-dark-secondary text-white hover:bg-dark-tertiary",
        ghost: "text-white hover:bg-dark-secondary",
        link: "text-FlexForge-orange underline-offset-4 hover:underline hover:text-FlexForge-orange-light",
        blue: "bg-blue-accent text-white shadow-soft hover:bg-blue-accent/90 hover:scale-[1.02]",
        purple: "bg-purple-accent text-white shadow-soft hover:bg-purple-accent/90 hover:scale-[1.02]",
        green: "bg-green-accent text-white shadow-soft hover:bg-green-accent/90 hover:scale-[1.02]",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2",
        lg: "h-14 px-8 py-4 text-base",
        xl: "h-16 px-10 py-5 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

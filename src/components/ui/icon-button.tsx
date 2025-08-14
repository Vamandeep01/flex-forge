import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const iconButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground shadow-soft hover:bg-secondary",
        orange: "bg-gradient-orange text-white shadow-orange hover:shadow-lg hover:scale-105",
        blue: "bg-blue-accent text-white shadow-soft hover:bg-blue-accent/90",
        purple: "bg-purple-accent text-white shadow-soft hover:bg-purple-accent/90",
        ghost: "hover:bg-secondary hover:text-secondary-foreground",
      },
      size: {
        default: "h-12 w-12",
        sm: "h-10 w-10",
        lg: "h-14 w-14",
        xl: "h-16 w-16",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(iconButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
IconButton.displayName = "IconButton"

export { IconButton, iconButtonVariants }
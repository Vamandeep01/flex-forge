import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, id, "aria-describedby": ariaDescribedBy, ...props }, ref) => {
    return (
      <input
        type={type}
        id={id}
        
        // Accessibility improvements
        aria-describedby={ariaDescribedBy}
        
        // Disable all autocomplete features
        autoComplete="new-password"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"

        // Additional PWA-specific attributes
        data-form-type="other"
        data-lpignore="true"
        data-1p-ignore="true"
        data-bwignore="true"
        data-dashlane-ignore="true"

        autoFocus={false}

        // Additional security attributes
        {...(type === 'password' && {
          autoComplete: "new-password",
          'data-lpignore': "true",
          'data-1p-ignore': "true"
        })}

        {...(type === 'email' && {
          autoComplete: "off",
          'data-lpignore': "true"
        })}

        className={cn(
          "flex h-12 w-full rounded-xl border-2 bg-dark-secondary px-4 py-3 text-base text-white placeholder:text-white/50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-FlexForge-orange focus-visible:border-FlexForge-orange focus-visible:ring-offset-2 focus-visible:ring-offset-dark-primary disabled:cursor-not-allowed disabled:opacity-50 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
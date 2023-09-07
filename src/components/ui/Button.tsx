import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import {cn} from "lib/utils";
const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                primary: "text-lightBlack rounded-md bg-primary ",
                secondary: "bg-lightBlue rounded-md text-secondary",
                outline: "bg-transparent border-primary border-2 rounded-md text-primary",
                ghost: "hover:bg-accent hover:text-accent-foreground",
            },
            size: {
                md: "py-[14px] px-4 lg:!px-16 font-[700] text-[20px]",
                sm: "py-3 !px-[40px] rounded-md ",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
            },
            text:{
                s24: "text-[20px] lg:text-[24px]",
                s20: 'text-[16px] lg:text-[18px]'
            }
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
            text: "s20"
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
        const Comp =  "button"
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

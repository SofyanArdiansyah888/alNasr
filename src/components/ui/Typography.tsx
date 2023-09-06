import * as React from 'react'
import { cn } from "lib/utils";



const TypographyVariant = ['s54', 's24', 's20', 's16', 's14', 's12', 's10'] as const
const TypographyColor = ['primary', 'light-primary', 'secondary', 'light-secondary','light-blue','light-dark'] as const

type TypographyProps<T extends React.ElementType> = {
    as?: T
    className?: string
    color?: (typeof TypographyColor)[number]
    variant?: (typeof TypographyVariant)[number]
    children: React.ReactNode
} & React.ComponentPropsWithoutRef<T>

type TypographyComponent = <T extends React.ElementType = 'p'>(
    props: TypographyProps<T>
) => React.ReactElement | null;


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore aman aja bang

const Typography: TypographyComponent = React.forwardRef(
    <T extends React.ElementType = "p">(
        {
            as,
            variant,
            color = "light-dark",
            className,
            children,
            ...props
        }: TypographyProps<T>,
        ref?: React.ComponentPropsWithRef<T>["ref"],
    ): React.ReactElement | null => {
        const Component = as || "p";
        return (
            <Component
                ref={ref}
                className={cn(
                    [
                        variant === "s54" && ["text-[24px] lg:text-[50px] font-extrabold !leading-[140%] lg:text-justify"],
                        variant === "s24" && ["text-[20px] lg:text-[24px] font-[500]"],
                        variant === "s20" && ["text-[16px] lg:text-[20px] font-[500] max-w-xs lg:max-w-max"],
                        variant === "s16" && ["text-[12px]"],
                        variant === "s14" && ["text-[14px]"],
                        variant === "s12" && ["text-[12px]"],
                        variant === "s10" && ["text-[10px]"],
                    ],
                    [
                        color === "primary" && ["text-primary"],
                        color === "light-primary" && ["text-lightPrimary"],
                        color === "secondary" && ["text-secondary"],
                        color === "light-secondary" && ["text-lightSecondary"],
                        color === "light-blue" && ["text-lightBlue"],
                        color === "light-dark" && ["text-lightBlack"],
                    ],
                    className
                )}
                {...props}
            >
                {children}
            </Component>
        );
    },
);


export default Typography;

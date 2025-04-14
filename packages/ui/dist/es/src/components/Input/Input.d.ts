import { IconName } from "../Icon";
export type InputSizeProp = "sm" | "md" | "lg" | "xl";
export type InputVariantProp = "secondary" | "primary" | "tertiary" | "ghost";
interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    label?: string | undefined | null;
    message?: string | undefined | null;
    leftIcon?: IconName | undefined | null;
    rightIcon?: IconName | undefined | null;
    size?: InputSizeProp | undefined;
    variant?: InputVariantProp | undefined;
    isInvalid?: boolean | undefined | null;
}
declare const Input: import("react").ForwardRefExoticComponent<InputProps & import("react").RefAttributes<HTMLInputElement>>;
declare const InputField: import("react").ForwardRefExoticComponent<import("react").InputHTMLAttributes<HTMLInputElement> & import("react").RefAttributes<HTMLInputElement>>;
export { Input, InputField };
//# sourceMappingURL=Input.d.ts.map
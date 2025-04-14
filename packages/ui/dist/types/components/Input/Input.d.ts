import * as react from 'react';
import { IconName } from '../Icon/Icon.js';

type InputSizeProp = "sm" | "md" | "lg" | "xl";
type InputVariantProp = "secondary" | "primary" | "tertiary" | "ghost";
interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    label?: string | undefined | null;
    message?: string | undefined | null;
    leftIcon?: IconName | undefined | null;
    rightIcon?: IconName | undefined | null;
    size?: InputSizeProp | undefined;
    variant?: InputVariantProp | undefined;
    isInvalid?: boolean | undefined | null;
}
declare const Input: react.ForwardRefExoticComponent<InputProps & react.RefAttributes<HTMLInputElement>>;
declare const InputField: react.ForwardRefExoticComponent<react.InputHTMLAttributes<HTMLInputElement> & react.RefAttributes<HTMLInputElement>>;

export { Input, InputField, InputSizeProp, InputVariantProp };
//# sourceMappingURL=Input.d.ts.map

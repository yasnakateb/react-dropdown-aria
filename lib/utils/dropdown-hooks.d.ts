import { MutableRefObject } from "react";
import { DropdownProps, ExtraState } from './types';
declare const useDropdownHooks: (props: DropdownProps) => {
    internalSelectedOption: string | null;
    setInternalSelectedOption: import("react").Dispatch<import("react").SetStateAction<string | null>>;
    focusedIndex: number;
    setFocusedIndex: import("react").Dispatch<import("react").SetStateAction<number>>;
    open: boolean;
    setOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    searchDropdown: (key: string) => void;
    getStyle: (key: "Arrow" | "DisplayedValue" | "DropdownButton" | "DropdownWrapper" | "GroupContainer" | "GroupDivider" | "GroupHeading" | "OptionContainer" | "OptionItem", extraState?: ExtraState | undefined) => string;
    closeDropdown: (focus?: any) => void;
    dropdownButton: MutableRefObject<HTMLButtonElement | null>;
    container: MutableRefObject<HTMLDivElement | null>;
    flattenedOptions: import("./types").Option[];
};
export default useDropdownHooks;

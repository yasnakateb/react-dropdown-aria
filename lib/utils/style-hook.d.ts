import { ExtraState, DropdownStyle, DropdownProps, DropdownState } from './types';
declare const useStyle: (styleObject: DropdownStyle) => (key: "Arrow" | "DisplayedValue" | "DropdownButton" | "DropdownWrapper" | "GroupContainer" | "GroupDivider" | "GroupHeading" | "OptionContainer" | "OptionItem", props: DropdownProps, state: DropdownState, extraState?: ExtraState | undefined) => string;
export default useStyle;

import { DropdownProps, DropdownStyleDependantState } from '../utils/types';
import { CSSObject } from 'create-emotion';
declare const defaultStyles: {
    Arrow: (props: DropdownProps, { open }: DropdownStyleDependantState) => CSSObject;
    DisplayedValue: ({ hideArrow, selectedOption, centerText }: DropdownProps, { internalSelectedOption }: DropdownStyleDependantState) => CSSObject;
    DropdownButton: (props: DropdownProps, { open }: DropdownStyleDependantState) => CSSObject;
    DropdownWrapper: ({ width, height }: DropdownProps) => CSSObject;
    GroupContainer: () => CSSObject;
    GroupDivider: () => CSSObject;
    GroupHeading: () => CSSObject;
    OptionContainer: ({ openUp, maxContentHeight }: DropdownProps, { open }: DropdownStyleDependantState) => CSSObject;
    OptionItem: (props: DropdownProps, state: DropdownStyleDependantState, { selected }: import("../utils/types").ExtraState) => CSSObject;
};
export default defaultStyles;

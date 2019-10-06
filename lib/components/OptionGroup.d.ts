import React, { MutableRefObject } from 'react';
import { OptionItemProps } from './OptionItem';
import { OptionGroup as OptionGroupType, GetStyleFunction } from '../utils/types';
interface OptionGroupProps {
    optionGroup: OptionGroupType;
    getStyle: GetStyleFunction;
    selectedOption: string;
    focusedIndex: number;
    startingIndex: number;
    onOptionClicked: (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.KeyboardEvent<HTMLButtonElement>) => void;
    itemRenderer?: ((props: OptionItemProps, buttonRef: MutableRefObject<HTMLButtonElement | null>) => JSX.Element) | undefined;
}
declare const OptionGroup: {
    ({ optionGroup, getStyle, selectedOption, startingIndex, focusedIndex, onOptionClicked, itemRenderer }: OptionGroupProps): JSX.Element;
    defaultProps: {
        itemRenderer: undefined;
    };
};
export default OptionGroup;

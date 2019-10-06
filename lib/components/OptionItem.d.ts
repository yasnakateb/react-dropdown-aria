import { MouseEvent, KeyboardEvent, MutableRefObject } from 'react';
import { Option } from '../utils/types';
export interface OptionItemProps {
    option: Option;
    optionClass: string;
    onOptionClicked: ({ nativeEvent }: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void;
    focused: boolean;
    itemRenderer?: ((props: OptionItemProps, buttonRef: MutableRefObject<HTMLButtonElement | null>) => JSX.Element) | undefined;
}
declare const OptionItem: {
    (props: OptionItemProps): JSX.Element;
    defaultProps: {
        optionClass: undefined;
        itemRenderer: undefined;
    };
};
export default OptionItem;

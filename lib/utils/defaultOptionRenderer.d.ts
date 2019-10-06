import React from 'react';
import { DropdownOption, GetStyleFunction, OptionRendererFunction } from './types';
declare function defaultOptionRenderer(selectedOption: string, options: DropdownOption[], focusedIndex: number, onOptionClicked: (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.KeyboardEvent<HTMLButtonElement>) => void, getStyle: GetStyleFunction, optionItemRenderer?: OptionRendererFunction): JSX.Element[];
export default defaultOptionRenderer;

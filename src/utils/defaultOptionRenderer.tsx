import React, { MutableRefObject } from 'react';
import { cx } from 'emotion';
import OptionItem, { OptionItemProps } from '../components/OptionItem';
import { isOptionGroup } from './helper';
import { DropdownOption, GetStyleFunction, OptionRendererFunction } from './types';
import { StyleKeys } from './constants';

function defaultOptionRenderer(
  selectedOption: string,
  options: DropdownOption[],
  focusedIndex: number,
  onOptionClicked: (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.KeyboardEvent<HTMLButtonElement>) => void,
  getStyle: GetStyleFunction,
  optionItemRenderer?: OptionRendererFunction,
) {
  const itemRenderer = optionItemRenderer ?
    (props: OptionItemProps, optionRef: MutableRefObject<HTMLButtonElement | null>) => optionItemRenderer(props, optionRef, getStyle) :
    undefined;

  let index = 0;
  return options.map((option) => {
    if (isOptionGroup(option)) { // Is group of options
      const { groupOptions, label } = option;
      return (
        <div key={label} className={getStyle(StyleKeys.GroupContainer)}>
          <div className={getStyle(StyleKeys.GroupHeading)}>
            <div>{label.toUpperCase()} | &nbsp;</div>
            <div>{groupOptions.length}</div>
          </div>
          {
            groupOptions.map((groupOption) => {
              const selected = groupOption.value === selectedOption;
              const focused = index === focusedIndex;
              const groupOptionClass = cx(groupOption.className, getStyle(StyleKeys.OptionItem, { selected }));
              index += 1;
              return (
                <OptionItem
                  key={groupOption.value}
                  optionClass={groupOptionClass}
                  onOptionClicked={onOptionClicked}
                  option={groupOption}
                  focused={focused}
                  itemRenderer={itemRenderer}
                />
              );
            })
          }
          <div className={getStyle(StyleKeys.GroupDivider)} />
        </div>
      );
    }

    const { value, className } = option;
    const isFocused = index === focusedIndex;
    const optionClass = cx(className, getStyle(StyleKeys.OptionItem, { selected: value === selectedOption }));
    index += 1;
    return (
      <OptionItem
        key={value}
        optionClass={optionClass}
        onOptionClicked={onOptionClicked}
        option={option}
        focused={isFocused}
        itemRenderer={itemRenderer}
      />
    );
  });
}

export default defaultOptionRenderer;

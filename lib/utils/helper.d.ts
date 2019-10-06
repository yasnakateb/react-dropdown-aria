import { Option, OptionGroup } from './types';
export declare function isOptionGroup(option: Option | OptionGroup): option is OptionGroup;
export declare const arrayReducer: (acc: Option[], val: Option | OptionGroup) => Option[];

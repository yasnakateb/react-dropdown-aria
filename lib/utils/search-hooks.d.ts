import { Dispatch, SetStateAction } from "react";
import { Option } from './types';
declare const useSearch: (setFocusedIndex: Dispatch<SetStateAction<number>>, flattenedOptions: Option[]) => (key: string) => void;
export default useSearch;

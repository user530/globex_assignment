import debounce from 'lodash.debounce';
import { ChangeEvent } from 'react';

interface IUseSearchProps {
    onSearch: (queryString: string) => void;
}

type IUseSearch = (props: IUseSearchProps) => {
    onQueryChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const useSearch: IUseSearch = ({ onSearch }) => {
    const onQueryChange = debounce(
        (e: ChangeEvent<HTMLInputElement>) => onSearch(e.target.value),
        300
    );

    return {
        onQueryChange,
    };
}
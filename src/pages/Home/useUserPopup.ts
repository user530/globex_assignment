import React from 'react';
import { User } from '../../types';

type IUseUserPopup = () => {
    popup: User | null;
    openPopup: (user: User) => void;
    closePopup: () => void;
}

export const useUserPopup: IUseUserPopup = () => {
    const [popup, setPopup] = React.useState<User | null>(null);

    const openPopup = React.useCallback((user: User) => setPopup(user), [setPopup]);
    const closePopup = React.useCallback(() => setPopup(null), [setPopup]);

    return {
        popup,
        openPopup,
        closePopup
    };
}
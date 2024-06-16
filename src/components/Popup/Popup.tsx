import React, { MouseEvent } from 'react';
import {
    StyledPopup,
    StyledPopupCard,
    StyledPopupCardHeader,
    StyledPopupCardHeading,
    StyledPopupCardClose,
    StyledPopupCardList,
    StyledPopupCardLI,
    StyledLiKey,
    StyledLiValueLink,
    StyledLiValueText,
    StyledPopupCardText,
    StyledPopupTextHeading,
    StyledPopupTextParagraph,
} from './Popup.styled';
import { CustomIcon } from '../index';
import { User } from '../../types';

interface IPopup {
    user: User | null;
    closePopupHandler: () => void;
}

export const Popup: React.FC<IPopup> = ({ user, closePopupHandler }) => {
    if (!user)
        return <></>;

    const {
        name,
        phone,
        email,
        hire_date,
        position_name,
        department,
        address,
    } = user;

    const overlayClickHandler = (e: MouseEvent) => {
        if (e.target === e.currentTarget)
            closePopupHandler();
    }

    return (
        <StyledPopup onClick={overlayClickHandler}>
            <StyledPopupCard>
                <PopupCardHeader name={name} closeClickHandler={closePopupHandler} />
                <PopupCardList userData={{ phone, email, hire_date, position_name, department }} />
                <PopupCardText text={address} />
            </StyledPopupCard>
        </StyledPopup>
    );
}

interface IPopupCardHeader {
    name: string;
    closeClickHandler: () => void;
}

const PopupCardHeader: React.FC<IPopupCardHeader> = ({ name, closeClickHandler }) => {
    return (
        <StyledPopupCardHeader>
            <StyledPopupCardHeading>{name}</StyledPopupCardHeading>
            <StyledPopupCardClose onClick={closeClickHandler}>
                <CustomIcon name='close' width={20} height={20} />
            </StyledPopupCardClose>
        </StyledPopupCardHeader>
    );
}

interface IPopupCardList {
    userData: Record<string, string>;
}

const PopupCardList: React.FC<IPopupCardList> = ({ userData }) => {
    return (
        <StyledPopupCardList>
            {
                Object.entries(userData).map(
                    ([key, val]) => {
                        const keyName = (key === 'phone' && 'Телефон:')
                            || (key === 'email' && 'Почта:')
                            || (key === 'hire_date' && 'Дата приёма:')
                            || (key === 'position_name' && 'Должность:')
                            || (key === 'department' && 'Подразделение:');

                        return (
                            <StyledPopupCardLI key={key}>
                                <StyledLiKey>
                                    {keyName ? keyName : key}
                                </StyledLiKey>

                                {
                                    key === 'phone' &&
                                    <StyledLiValueLink href={'tel:' + val}>{val}</StyledLiValueLink>
                                }
                                {
                                    key === 'email' &&
                                    <StyledLiValueLink href={'mailto:' + val}>{val}</StyledLiValueLink>
                                }
                                {
                                    key !== 'phone' && key !== 'email' &&
                                    <StyledLiValueText>{val}</StyledLiValueText>
                                }
                            </StyledPopupCardLI>
                        )
                    }
                )
            }
        </StyledPopupCardList >
    );
}

interface IPopupCardText {
    blockHeading?: string;
    text: string;
}

const PopupCardText: React.FC<IPopupCardText> = ({ text, blockHeading }) => {
    return (
        <StyledPopupCardText>
            <StyledPopupTextHeading>{blockHeading ?? 'Дополнительная информация:'}</StyledPopupTextHeading>
            <StyledPopupTextParagraph>
                {text}
            </StyledPopupTextParagraph>
        </StyledPopupCardText>
    );
}
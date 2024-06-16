import React from 'react';
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

export const Popup: React.FC = () => {
    return (
        <StyledPopup>
            <StyledPopupCard>
                <PopupCardHeader />
                <PopupCardList />
                <PopupCardText />
            </StyledPopupCard>
        </StyledPopup>
    );
}

const PopupCardHeader = () => {
    return (
        <StyledPopupCardHeader>
            <StyledPopupCardHeading>Евгения Савченко</StyledPopupCardHeading>
            <StyledPopupCardClose>
                <CustomIcon name='close' width={20} height={20} />
            </StyledPopupCardClose>
        </StyledPopupCardHeader>
    );
}

const PopupCardList = () => {
    return (
        <StyledPopupCardList>
            <StyledPopupCardLI>
                <StyledLiKey>Телефон</StyledLiKey>
                <StyledLiValueLink href='tel:'>+7 (918) 078-17-05</StyledLiValueLink>
            </StyledPopupCardLI>

            <StyledPopupCardLI>
                <StyledLiKey>Почта</StyledLiKey>
                <StyledLiValueLink href='mailto:'>yysavch1@mts.ru</StyledLiValueLink>
            </StyledPopupCardLI>

            <StyledPopupCardLI>
                <StyledLiKey>Дата приёма:</StyledLiKey>
                <StyledLiValueText>15.10.2020</StyledLiValueText>
            </StyledPopupCardLI>

            <StyledPopupCardLI>
                <StyledLiKey>Должность:</StyledLiKey>
                <StyledLiValueText>Дизайнер</StyledLiValueText>
            </StyledPopupCardLI>

            <StyledPopupCardLI>
                <StyledLiKey>Подразделение:</StyledLiKey>
                <StyledLiValueText>Трайб автоматизированных систем контактных центров</StyledLiValueText>
            </StyledPopupCardLI>
        </StyledPopupCardList>
    );
}

const PopupCardText = () => {
    return (
        <StyledPopupCardText>
            <StyledPopupTextHeading>Дополнительная информация:</StyledPopupTextHeading>
            <StyledPopupTextParagraph>
                Разработчики используют текст в качестве заполнителя макта страницы. Разработчики используют текст в качестве заполнителя макта страницы.
            </StyledPopupTextParagraph>
        </StyledPopupCardText>
    );
}
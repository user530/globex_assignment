import React from 'react';
import { StyledIcon } from './Icon.styled';
import icons from '../../assets/icons.svg';

interface ICustomIcon {
    name: string;
    width?: number;
    height?: number;
    fill?: string;
}

export const CustomIcon: React.FC<ICustomIcon> = ({ name, width, height, fill }) => {
    return (
        <StyledIcon width={width} height={height} fill={fill}>
            <use href={`${icons}#${name}`} />
        </StyledIcon>
    );
}
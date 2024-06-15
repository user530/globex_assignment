import styled from 'styled-components';

export const UserCard = styled.div`
    min-height: 314px;
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.textMain};
`;
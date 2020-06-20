import styled from 'styled-components/native';

export const Container = styled.TextInput`
    height: ${ props => props.height || '48px' };
    width: ${ props => props.width || 'auto' };
    border-radius: 8px;
    background-color: #eee;
    margin: 16px;
    padding-left: 16px;
    font-size: 18px;
`;
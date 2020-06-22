import styled from 'styled-components/native';


export const Container = styled.Image`
    height: ${props => props.size || '60px'};
    width: ${props => props.size || '60px'};
    border-radius: 50%;
`;
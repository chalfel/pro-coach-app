import React from 'react';

import { DefaultContainer } from './styles';

const Container = ({ children }) => {
    return (
        <DefaultContainer>
            { children }
        </DefaultContainer>
    )
}

export default Container;
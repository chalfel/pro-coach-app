import React from 'react';

import { ProfileImage } from '..';
import { Feather as Icon } from '@expo/vector-icons';

import { Container, IconContainer } from './styles';

const ImageUpload = ({ imgSrc, handleOnUpload }) => {
    return (
        <Container onClick={handleOnUpload}>
            <ProfileImage imgSrc={imgSrc}>
                <IconContainer>
                    <Icon name="camera" size="20px" />
                </IconContainer>
            </ProfileImage>
        </Container>
    );
}

export default ImageUpload;

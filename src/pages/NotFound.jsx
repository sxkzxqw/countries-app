import React from 'react';
import styled from 'styled-components'


const Typography = styled.p`
    font-size: var(--fs-sm);
    line-height: 1.5;
    font-weight: var(--fw-light);
`;

const NotFound = () => {
    return (
        <>
            <Typography>
                This page doesn't exist.
            </Typography>
        </>
    );
};

export default NotFound;
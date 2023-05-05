import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Container } from './Container';
import { IoMoon, IoMoonOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom';



const HaederEl = styled.header`
    box-shadow: var(--shadow);
    background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
`;

const Title = styled(Link).attrs({
    to: '/'
})`
    color: var(--colors-text)
    font-size: var(--fs-sm);
    text-decoration: none;
    font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    cursor: pointer;
    font-weight: var(--fw-normal);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    text-transform: capitalize;
`;

const Header = () => {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])
    return (
        <HaederEl>
            <Container>
                <Wrapper>
                    <Title>Where is the world?</Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        {theme === 'light'
                            ? (<IoMoonOutline size='14px' />)
                            : (<IoMoon size='14px' />)
                        }
                        <p>{theme} Theme</p>
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HaederEl>
    );
};

export default Header;
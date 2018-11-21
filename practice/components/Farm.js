// Core
import React from 'react';

// Components
import { Container, Heading, Button, Message } from '../styled';
import { withState } from '../hoc';

const Farm = (props) => {
    // 10 должно стать динамическим
    // props._yieldApples должно стать динамическим
    const applesJSX = Array(props.apples).fill('🍎');

    return (
        <Container>
            <Heading>🏡 Ферма 🕊</Heading>
            <div>
                <Message>Урожай:</Message>
                <Message>{applesJSX}</Message>
            </div>
            <Button onClick = { props._yieldApples }>Собрать урожай 👨🏼‍🌾</Button>
        </Container>
    );
};

export default withState({
    stateName:    'apples',
    updateState:  '_yieldApples',
    initialValue: 1,
})(Farm);

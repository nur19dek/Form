import React from 'react';
import { Description, Title, Wrapper,InputWrapper,Input, UserIcon } from './style';

function App() {
    return (
      <Wrapper>
        <Description>Already have an account?</Description>
        <Title>Log in Here</Title>
        <InputWrapper>
          <UserIcon />
         
          <Input placeholder='Username' />
        </InputWrapper>
        <InputWrapper>
          <Input placeholder='Password' />
        </InputWrapper>
      </Wrapper>
    );
}

export default App;

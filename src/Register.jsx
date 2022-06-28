import React from 'react';
import { Wrapper,Description,InputWrapper, Title,UserIcon,Input,} from './style';

function App() {
    return (
      <Wrapper>
        <Description>Don't have an account?</Description>
        <Title>Register Now</Title>
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

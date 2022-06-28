import styled from 'styled-components';
import{ReactComponent as User}  from './icon/user.png';
// import { ReactComponent as Key } from './icon/key.png';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2a393e;
  width: 100%;
  height: 100vh;
  color: white;
`;
export const Wrapper = styled.div`
  width: 360px;
  height: 380px;
  border: 2px solid #445859;
  margin: 10px;
  padding: 30px;
  border-radius: 5px;
  display: flex;
  // justify-content:center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
`;
export const Description = styled.div`
  color: white;
  font-weight: 600;
  font-size: 20px;
  margin-top: 20px;
`;
export const Title = styled.div`
  color: #e7c961;
  font-size: 28px;
`;
export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
`;
export const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 4px;
  background-color: rgba(104, 105, 102, 0.5);
  border: 1px solid #354545;
  margin-top: 20px;
  outline: none;
  ::placeholder {
    padding-left: 20px;
  }
  padding-left: 20px;
  color: white;
  font-size: 22px;
`
export const UserIcon = styled(User)`
position:absolute;
  width: 20px;
  height: 40px;


  
`

// export const UserIcon1 = styled(Key)`
//   position: absolute;
//   width: 20px;
//   height: 40px;
// `;

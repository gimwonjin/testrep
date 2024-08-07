import styled from "styled-components";
import Login from './Login';

const SIZE = {
  large: 24,
  medium: 20,
  smail: 16,
};

const LoginButton = styled.button`
  justify-content: center;
  align-items: center;
  display: block;
  background-color: #6750a4;
  border: none;
  color: #fff;
  padding: 16px;
  font-size: 18px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #7760b4;
  }
`;
export default LoginButton;

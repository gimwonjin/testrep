import styled from "styled-components";

const SIZES = {
  large: 24,
  medium: 20,
  small: 16,
};

const Input = styled.input`
  display: block;
  width: 100%;
  outline: none;
  padding: 8px 0;
  font-size: 16px;
  border: none;
  background-color: #fff;
  border-bottom: 2px solid #eee;

  &:focus {
    border-color: #7760b4;

    &::placeholder {
      color: #c4c5cd;
    }
  }
`;
export default Input;

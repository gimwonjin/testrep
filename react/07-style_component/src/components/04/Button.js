import styled from "styled-components";

const SIZE = {
  large: 24,
  medium: 20,
  smail: 16,
};

const Button = styled.button`
  background-color: #6750a4;
  border: none;
  color: #fff;
  padding: 16px;
  font-size: ${({ size }) => SIZE[size] ?? SIZE["medium"]}px;
  border-radius: ${({ $round }) => ($round ? "9999px" : "3px")};

  &:hover {
    background-color: #463770;
  }
`;

export default Button;

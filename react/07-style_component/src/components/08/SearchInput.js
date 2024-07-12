import styled from "styled-components";
import searchIng from "./search.png";

const SearchInput = styled.input`
  border: 2px solid #eee;
  border-radius: 5px;
  outline: none;
  padding: 16px;
  background-image: url(${searchIng});
  background-size: 16px;
  background-repeat: no-repeat;
  background-position: 12px 50%;
  padding-left: 40px;

  &:focus {
    border-color: #7780b4;
  }
`;

export default SearchInput;

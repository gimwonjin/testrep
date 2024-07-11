import React from "react";
import Button from "./Button";
import BoxOne from "./BoxOne";
import Wraaper from "./Wrapper";
import Box from "./Box";
import Circle from "./Circle";
import Input from "./Input";

function HellowStyled(props) {
  return (
    <div>
      <Button>Hellow Styled</Button>
      <Wraaper>
        <Box bgColor="#cf6a87" />
        <span>😀</span>
        <Box as="button" bgColor="#574b90" />
        <Circle bgColor="blue" />
      </Wraaper>
      <from>
        <Wraaper>
          <Input />
          <Input />
          <Input />
          <Input type="text" required />
          <Button>제출</Button>
          <Wraaper>
            <Circle bgColor="yellow" />
          </Wraaper>
        </Wraaper>
      </from>
    </div>
  );
}

export default HellowStyled;

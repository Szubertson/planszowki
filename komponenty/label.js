import styled from "styled-components";

const Label = styled.label`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin-bottom: 16px;
  & input,
  select {
    margin-top: 4px;
    padding: 6px 12px;
    border-radius: 3px;
    border: 1px solid black;
  }
`;

export default Label;

import styled from "styled-components";

const Przycisk = styled.button`
  padding: 6px 24px;
  background-color: #0d8abc;
  transition: all 0.2s;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #124e96;
  }
`;
export default Przycisk;

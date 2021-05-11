import styled from "styled-components";

const ButtonRed = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  border-radius: 2.5em;
  border: none;
  padding: 1.5em;
  white-space: nowrap;
  color: white;
  line-height: 1;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.3s ease;
  width: 100%;

  &:hover {
    filter: brightness(85%);
  }
`;

export default ButtonRed;

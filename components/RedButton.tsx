import styled from "styled-components";

const ButtonRed = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  border-radius: 2.5em;
  border: none;
  padding: .75em;
  white-space: nowrap;
  color: white;
  line-height: 1;
  font-weight: 700;
  font-size: 1.125em;
  text-decoration: none;
  transition: background 0.3s ease;
  width: 100%;

  &:disabled{
  cursor: default;
  border: 1px solid #999999;
  background-color: ${({ theme }) => theme.colors.grey};
  color: #666666;
}

  &:hover {
    filter: brightness(85%);
  }
`;

export default ButtonRed;

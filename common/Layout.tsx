import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: ${({ theme }) => theme.sizes.container};
  margin: 0 auto;
  padding: 3rem 0;
`;

export const Grid = styled.div`
  align-items: center;
  justify-content: center;

  width: 800px;
  max-width: 800px;
  margin-top: 3rem;
`;

export const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

type ColProps = { size?: number };

export const Col = styled.div<ColProps>`
  display: flex;
  flex-flow: column nowrap;
  align-items: left;
  justify-content: space-between;
  margin: 0.5rem;
  padding: 1rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 10px;
  flex: ${(props) => props.size};
  max-height: 12rem;
`;

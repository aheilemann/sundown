import styled from "styled-components";

type H1Props = { secondary?: boolean };

export const H1 = styled.p<H1Props>`
  font-size: 3em;
  color: ${(props) =>
    props.secondary
      ? props.theme.colors.secondary
      : props.theme.colors.primary};
`;

type H2Props = { secondary?: boolean };

export const H2 = styled.p<H2Props>`
  font-size: 1.5em;
  color: ${(props) =>
    props.secondary
      ? props.theme.colors.secondary
      : props.theme.colors.primary};
`;

type H3Props = { secondary?: boolean };

export const H3 = styled.p<H3Props>`
  font-size: 1em;
  font-weight: 500;
  color: ${(props) =>
    props.secondary
      ? props.theme.colors.secondary
      : props.theme.colors.primary};
`;

type TextProps = { secondary?: boolean };

export const Text = styled.p<TextProps>`
  color: ${(props) =>
    props.secondary
      ? props.theme.colors.secondary
      : props.theme.colors.primary};
  margin-right: 0.5em;
`;

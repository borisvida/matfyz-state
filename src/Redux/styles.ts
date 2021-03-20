import styled from 'styled-components';

export const Button = styled.button`
  margin-left: 10px;
`;

export const ColoredButton = styled(Button)`
  color: white;
  background-color: ${(props) => props.color};
`;

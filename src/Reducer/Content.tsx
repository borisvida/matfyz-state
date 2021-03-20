import { Dispatch } from 'react';
import styled from 'styled-components';
import Form from './Form';
import List from './List';
import { Items, ItemsAction } from './types';

type Props = { items: Items; dispatch: Dispatch<ItemsAction> };

const StyledContent = styled.div`
  padding: 30px;
`;

const Content = ({ items, dispatch }: Props) => {
  return (
    <StyledContent>
      <Form dispatch={dispatch} />
      <List items={items} dispatch={dispatch} />
    </StyledContent>
  );
};

export default Content;

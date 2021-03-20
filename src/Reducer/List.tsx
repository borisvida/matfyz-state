import { Dispatch } from 'react';
import { Button } from './styles';
import { Items, ItemsAction } from './types';

type Props = { items: Items; dispatch: Dispatch<ItemsAction> };

const List = ({ items, dispatch }: Props) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={item.id}>
          {item.name}
          <Button onClick={() => dispatch({ type: 'remove', index })}>
            X
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default List;

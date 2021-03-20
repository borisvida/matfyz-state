import { useContext } from 'react';
import ShoppingListContext from './Context';
import { Button } from './styles';

const List = () => {
  const { items, dispatch } = useContext(ShoppingListContext);
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

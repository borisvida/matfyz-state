import { useRecoilState } from 'recoil';
import shoppingListState from './atom';
import { Button } from './styles';

const List = () => {
  const [items, setItemsState] = useRecoilState(shoppingListState);

  return (
    <ul>
      {items.map((item, index) => (
        <li key={item.id}>
          {item.name}
          <Button
            onClick={() =>
              setItemsState((items) =>
                items.filter((_: any, i: number) => i !== index),
              )
            }
          >
            X
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default List;

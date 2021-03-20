import { useRecoilState } from 'recoil';
import shoppingListState from './atom';
import { Button } from './styles';

const List = () => {
  const [itemsState, setItemsState] = useRecoilState(
    shoppingListState,
  );
  return (
    <ul>
      {itemsState.items.map((item, index) => (
        <li key={item.id}>
          {item.name}
          <Button
            onClick={() =>
              setItemsState({
                items: itemsState.items.filter(
                  (_: any, i: number) => i !== index,
                ),
              })
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

import { useSelector, useDispatch } from 'react-redux';
import { State } from './reducer';
import { Button } from './styles';
import { removeItem } from './actions';

const List = () => {
  const items = useSelector((state: State) => state.items);
  const dispatch = useDispatch();
  return (
    <ul>
      {items.map((item, index) => (
        <li key={item.id}>
          {item.name}
          <Button onClick={() => dispatch(removeItem(index))}>
            X
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default List;

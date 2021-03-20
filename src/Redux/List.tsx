import { useSelector, useDispatch } from 'react-redux';
import { State } from './store';
import { Button } from './styles';

const List = () => {
  const items = useSelector((state: State) => state.items);
  const dispatch = useDispatch();
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

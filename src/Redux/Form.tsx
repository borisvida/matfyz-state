import { useRef, memo } from 'react';
import { useDispatch } from 'react-redux';
import { ColoredButton } from './styles';
import { addItem } from './actions';

const ShoppingForm = memo(() => {
  const inputRef = useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>;
  const dispatch = useDispatch();

  const handleSubmit: any = (e: Event) => {
    if (!inputRef.current) {
      return;
    }

    e.preventDefault();
    dispatch(addItem(inputRef.current.value));
    inputRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} />
      <ColoredButton type="submit" color="darkgreen">
        Add
      </ColoredButton>
    </form>
  );
});

export default ShoppingForm;

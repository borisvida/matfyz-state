import { Dispatch, useRef } from 'react';
import { ColoredButton } from './styles';
import { ItemsAction } from './types';

type Props = { dispatch: Dispatch<ItemsAction> };

const ShoppingForm = ({ dispatch }: Props) => {
  const inputRef = useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>;

  const handleSubmit: any = (e: Event) => {
    if (!inputRef.current) {
      return;
    }

    e.preventDefault();
    dispatch({
      type: 'add',
      name: inputRef.current.value,
    });
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
};

export default ShoppingForm;

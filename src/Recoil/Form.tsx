import { useRef, memo } from 'react';
import { useShoppingListItemsActions } from './atom';

import { ColoredButton } from './styles';

const ShoppingForm = memo(() => {
  const inputRef = useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>;
  const { addItem } = useShoppingListItemsActions();

  const handleSubmit: any = (e: Event) => {
    if (!inputRef.current) {
      return;
    }

    e.preventDefault();
    addItem(inputRef.current.value);
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

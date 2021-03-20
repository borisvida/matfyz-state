import { ThemeContext } from 'styled-components';
import { useContext, useRef, memo, Dispatch } from 'react';
import { ItemsAction } from '../Reducer/types';
import ShoppingListContext from './Context';
import { ColoredButton } from './styles';

const Connect = () => {
  const { dispatch } = useContext(ShoppingListContext);
  return <ShoppingForm dispatch={dispatch} />;
};

type Props = { dispatch: Dispatch<ItemsAction> };

const ShoppingForm = memo<Props>(({ dispatch }: Props) => {
  const inputRef = useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>;
  const theme = useContext(ThemeContext);

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
      <ColoredButton type="submit" color={theme.background}>
        Add
      </ColoredButton>
    </form>
  );
});

export default Connect;

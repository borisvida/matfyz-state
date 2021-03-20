import { useReducer } from 'react';
import { Items, ItemsAction } from './types';
import Navbar from './Navbar';
import Content from './Content';

const reducer = (state: Items, action: ItemsAction) => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: state.length,
          name: action.name,
        },
      ];
    case 'remove':
      // keep every item except the one we want to remove
      return state.filter(
        (_: any, index: number) => index !== action.index,
      );
    case 'reset':
      return [];
    default:
      return state;
  }
};

const ShoppingList = () => {
  const [items, dispatch] = useReducer(reducer, []);

  return (
    <>
      <Navbar items={items} />
      <Content items={items} dispatch={dispatch} />
    </>
  );
};

export default ShoppingList;

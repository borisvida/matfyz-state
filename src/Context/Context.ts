import { createContext } from 'react';
import type { Dispatch } from 'react';
import { Items, ItemsAction } from './types';

export const shoppingListReducer = (
  state: Items,
  action: ItemsAction,
) => {
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

const ShoppingListContext = createContext<{
  items: Items;
  dispatch: Dispatch<ItemsAction>;
}>({
  items: [],
  dispatch: () => [],
});

export default ShoppingListContext;

import { atom, selector, useRecoilState } from 'recoil';
import { useCallback } from 'react';

export type Items = Array<{ id: number; name: string }>;
export type ItemsState = { items: Items };

const shoppingListState = atom<ItemsState>({
  key: 'shoppingListState',
  default: { items: [] },
});

export const shoppingListItemsSelector = selector({
  key: 'shoppingListItemsSelector',
  get: ({ get }) => {
    const state = get(shoppingListState);
    return state.items;
  },
  set: ({ set }, value: any) => {
    set(shoppingListState, { items: value });
  },
});

export const useShoppingListItemsActions = () => {
  const [items, setItems] = useRecoilState(shoppingListItemsSelector);

  const addItem = useCallback(
    (name) => {
      setItems([
        ...items,
        {
          id: items.length,
          name,
        },
      ]);
    },
    [setItems, items],
  );

  const removeItem = useCallback(
    (toRemove) => {
      setItems(
        items.filter((_: any, index: number) => index !== toRemove),
      );
    },
    [setItems, items],
  );

  return { addItem, removeItem };
};

export default shoppingListState;

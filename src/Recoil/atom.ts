import { atom, selector, useRecoilState } from 'recoil';
import { useCallback } from 'react';

export type Items = Array<{ id: number; name: string }>;

const shoppingListState = atom<Items>({
  key: 'shoppingListState',
  default: [],
});

export const itemCountSelector = selector({
  key: 'itemCountSelector',
  get: ({ get }) => {
    const items = get(shoppingListState);
    return items.length;
  },
});

export const useShoppingListItemsActions = () => {
  const [, setItems] = useRecoilState(shoppingListState);

  const addItem = useCallback(
    (name) => {
      setItems((items) => [
        ...items,
        {
          id: items.length,
          name,
        },
      ]);
    },
    [setItems],
  );

  const removeItem = useCallback(
    (toRemove) => {
      setItems((items) =>
        items.filter((_: any, index: number) => index !== toRemove),
      );
    },
    [setItems],
  );

  return { addItem, removeItem };
};

export default shoppingListState;

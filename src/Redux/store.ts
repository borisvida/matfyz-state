import { createStore } from 'redux';

type Items = Array<{ id: number; name: string }>;

type ItemsAction =
  | { type: 'add'; name: string }
  | { type: 'remove'; index: number }
  | { type: 'reset' };

export type State = { items: Items };

const shoppingListReducer = (
  state: State = { items: [] },
  action: ItemsAction,
) => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: state.items.length,
            name: action.name,
          },
        ],
      };
    case 'remove':
      // keep every item except the one we want to remove
      return {
        ...state,
        items: state.items.filter(
          (_: any, index: number) => index !== action.index,
        ),
      };
    case 'reset':
      return { items: [] };
    default:
      return state;
  }
};

const store = createStore(
  shoppingListReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;

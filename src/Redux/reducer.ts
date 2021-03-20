import { combineReducers } from 'redux';
import { ItemsAction } from './actions';

type Items = Array<{ id: number; name: string }>;

export type State = { items: Items };

const itemsReducer = (state: Items = [], action: ItemsAction) => {
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

const rootReducer = combineReducers({ items: itemsReducer });

export default rootReducer;

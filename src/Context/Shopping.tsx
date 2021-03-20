import { useReducer } from 'react';
import Navbar from './Navbar';
import Content from './Content';
import ShoppingListContext, { shoppingListReducer } from './Context';

const ShoppingList = () => {
  const [items, dispatch] = useReducer(shoppingListReducer, []);

  return (
    <ShoppingListContext.Provider value={{ items, dispatch }}>
      <Navbar />
      <Content />
    </ShoppingListContext.Provider>
  );
};

export default ShoppingList;

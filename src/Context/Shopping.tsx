import { ThemeProvider } from 'styled-components';
import { useReducer } from 'react';
import Navbar from './Navbar';
import Content from './Content';
import ShoppingListContext, { shoppingListReducer } from './Context';

const lightTheme = {
  background: 'lightblue',
  text: 'black',
};

const darkTheme = {
  background: 'green',
  text: 'white',
};

const ShoppingList = () => {
  const [items, dispatch] = useReducer(shoppingListReducer, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <ShoppingListContext.Provider value={{ items, dispatch }}>
        <Navbar />
        <Content />
      </ShoppingListContext.Provider>
    </ThemeProvider>
  );
};

export default ShoppingList;

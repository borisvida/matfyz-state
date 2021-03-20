import styled from 'styled-components';
import { useContextSelector } from 'use-context-selector';
import ShoppingListContext from './Context';

const StyledNavbar = styled.div`
  color: green;
  background: lightgray;
  display: flex;
  padding: 0 30px;
  align-items: center;
  justify-content: space-between;
`;

const Count = styled.span`
  font-size: 32px;
  font-weight: bold;
`;

const Navbar = () => {
  const count = useContextSelector(
    ShoppingListContext,
    (context) => context.items.length,
  );
  return (
    <StyledNavbar>
      <h1>Shopping</h1>
      <Count>
        {count} {count === 1 ? 'item' : 'items'}
      </Count>
    </StyledNavbar>
  );
};

export default Navbar;

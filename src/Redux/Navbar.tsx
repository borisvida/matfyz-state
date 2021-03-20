import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { State } from './store';

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
  const items = useSelector((state: State) => state.items);
  return (
    <StyledNavbar>
      <h1>Shopping</h1>
      <Count>
        {items.length} {items.length === 1 ? 'item' : 'items'}
      </Count>
    </StyledNavbar>
  );
};

export default Navbar;

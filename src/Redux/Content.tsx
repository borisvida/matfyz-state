import styled from 'styled-components';
import Form from './Form';
import List from './List';

const StyledContent = styled.div`
  padding: 30px;
`;

const Content = () => {
  return (
    <StyledContent>
      <Form />
      <List />
    </StyledContent>
  );
};

export default Content;

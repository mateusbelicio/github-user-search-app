import styled from 'styled-components';

const UserInfoErrorStyle = styled.div`
  height: 5rem;
  background-color: var(--clr-neutral-400);
  border-radius: var(--size-250);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  color: var(--clr-neutral-100);

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export default UserInfoErrorStyle;

import styled from 'styled-components';

const UserInfoErrorStyle = styled.div`
  height: 5rem;
  background-color: var(--clr-bg);
  color: var(--clr-text);
  border-radius: var(--size-250);
  box-shadow: var(--shadow);
  font-weight: 700;

  transition: background-color 0.25s, color 0.25s;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;

    color: var(--clr-primary-400);
  }
`;

export default UserInfoErrorStyle;

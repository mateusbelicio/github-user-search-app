import styled from 'styled-components';

const UserInfoError = styled.div`
  height: 5rem;
  background-color: var(--clr-neutral-400);
  border-radius: var(--size-250);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  &::before {
    content: url(/src/assets/icon-search.svg);
  }

  &::after {
    content: 'User not found. Try again...';
    color: var(--clr-neutral-100);
  }
`;

export default UserInfoError;

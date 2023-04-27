import styled from 'styled-components';

const UserInfoLoading = styled.div`
  height: 5rem;
  background-color: var(--clr-neutral-400);
  border-radius: var(--size-250);

  background-image: linear-gradient(
    90deg,
    var(--clr-neutral-400) 0%,
    var(--clr-neutral-400) 15%,
    hsl(var(--hsl-neutral-100) / 5%) 20%,
    var(--clr-neutral-400) 25%
  );
  background-size: 300%;
  background-position-x: 100%;

  animation: shimmer 1.5s infinite linear;

  @keyframes shimmer {
    to {
      background-position-x: -100%;
    }
  }
`;

export default UserInfoLoading;

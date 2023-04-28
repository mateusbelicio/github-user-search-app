import styled from 'styled-components';

const UserInfoLoadingStyle = styled.div`
  height: 5rem;
  background-color: var(--clr-bg);
  border-radius: var(--size-250);
  display: flex;
  align-items: center;
  justify-content: center;
  color: transparent;

  background-image: var(--bg-animation);
  background-size: 300%;
  background-position-x: 100%;
  box-shadow: var(--shadow);

  animation: shimmer 1.5s infinite linear;

  @keyframes shimmer {
    to {
      background-position-x: -100%;
    }
  }
`;

export default UserInfoLoadingStyle;

import styled from 'styled-components';

const HeaderStyle = styled.header`
  margin-top: var(--size-700);
  margin-bottom: var(--size-300);

  display: flex;
  flex-direction: column;
  gap: var(--size-750);

  @media (min-width: 36em) {
    margin-bottom: var(--size-500);
    margin-top: 9rem;
  }

  h1 {
    font-size: var(--size-550);
    font-weight: 700;
    text-transform: lowercase;
  }
`;

export default HeaderStyle;

import styled from 'styled-components';

const HeaderStyle = styled.header`
  margin-bottom: var(--size-300);

  display: flex;
  flex-direction: column;
  gap: var(--size-750);

  color: var(--clr-title);
  transition: color 0.25s;

  @media (min-width: 36em) {
    margin-bottom: var(--size-500);
  }

  h1 {
    font-size: var(--size-550);
    font-weight: 700;
    text-transform: lowercase;
  }
`;

export default HeaderStyle;

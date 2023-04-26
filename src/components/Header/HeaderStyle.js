import styled from 'styled-components';

const HeaderStyle = styled.header`
  padding-top: var(--size-700);

  display: flex;
  flex-direction: column;
  gap: var(--size-300);
  margin-bottom: var(--size-300);

  @media (min-width: 36em) {
    gap: var(--size-300);
    margin-bottom: var(--size-500);
  }

  h1 {
    font-size: var(--size-550);
    font-weight: 700;
    text-transform: lowercase;
  }
`;

export default HeaderStyle;

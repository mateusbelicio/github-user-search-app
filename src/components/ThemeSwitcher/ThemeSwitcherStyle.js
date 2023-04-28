import styled from 'styled-components';

const ThemeSwitcherStyled = styled.button`
  background-color: transparent;
  border: none;

  display: flex;
  align-items: center;
  gap: var(--size-300);

  color: var(--clr-theme-btn);
  cursor: pointer;

  transition: color 0.25s;

  &:hover {
    color: var(--clr-theme-btn-hover);
  }

  span {
    color: inherit;
    font-size: var(--size-200);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2.5px;
  }

  svg {
    width: var(--size-400);
    height: var(--size-400);
  }
`;

export default ThemeSwitcherStyled;

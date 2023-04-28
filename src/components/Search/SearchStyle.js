import styled from 'styled-components';

const SearchStyle = styled.form`
  --gap: 1rem;
  --pad-large: 1rem;
  --pad-small: 0.4375rem;

  @media (min-width: 36em) {
    --gap: 1.5rem;
    --pad-large: 2rem;
    --pad-small: 0.625rem;
  }

  padding: var(--pad-small) var(--pad-small) var(--pad-small) var(--pad-large);
  background-color: var(--clr-bg);
  color: var(--clr-text);
  box-shadow: var(--shadow);
  border-radius: var(--size-250);

  transition: background-color 0.25s, color 0.25s;

  display: flex;
  align-items: center;
  gap: var(--gap);

  cursor: pointer;

  &:focus-within {
    outline: 2px dashed var(--clr-primary-400);
  }

  .search {
    &__icon {
      width: 1.5rem;
      height: 1.5rem;
      flex-shrink: 0;
      color: var(--clr-primary-400);
    }

    &__input {
      flex: 1;
      border: none;
      outline: none;
      background-color: transparent;
      color: inherit;
      caret-color: var(--clr-primary-400);

      &::placeholder {
        opacity: 0.75;
      }
    }

    &__btn {
      padding: var(--size-200) var(--size-300);
      font-size: var(--size-200);
      font-weight: 700;
      color: var(--clr-neutral-100);

      background-color: var(--clr-primary-400);
      border: none;
      border-radius: var(--size-150);

      cursor: pointer;

      transition: background-color 0.25s;

      &:hover,
      &:focus-visible {
        outline: none;
        background-color: var(--clr-primary-300);
      }
    }
  }
`;

export default SearchStyle;

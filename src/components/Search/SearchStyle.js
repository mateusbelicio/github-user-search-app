import styled from 'styled-components';

const SearchStyle = styled.form`
  --gap: 0.4375rem;

  padding: var(--gap) var(--gap) var(--gap) 1rem;
  background-color: var(--clr-neutral-400);

  display: flex;
  align-items: center;
  gap: var(--gap);

  border-radius: var(--size-250);

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
    }
  }
`;

export default SearchStyle;

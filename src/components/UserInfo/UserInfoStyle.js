import styled from 'styled-components';

const UserInfoStyle = styled.section`
  display: grid;
  align-items: center;

  grid-template-columns: 4.375rem 1fr;
  grid-template-rows: repeat(6, min-content);
  column-gap: var(--size-400);

  padding: var(--size-700) var(--size-500) var(--size-850);
  background-color: var(--clr-neutral-400);
  border-radius: var(--size-250);

  .info {
    &__image {
      grid-column: 1;
      grid-row: span 3;

      aspect-ratio: 1;
      border-radius: 50%;
    }

    &__name {
      font-size: var(--size-300);
      font-weight: 700;
    }

    &__username,
    &__join-date {
      font-size: var(--size-200);
      font-weight: 400;
    }

    &__username {
      color: var(--clr-primary-400);
      margin-bottom: var(--size-100);
    }

    &__description {
      grid-column: 1 / -1;

      margin-top: var(--size-700);
      line-height: 1.9;
    }

    &__data-list {
      grid-column: 1 / -1;

      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1px;

      padding: var(--size-350) var(--size-250);
      margin-block: var(--size-500);

      background-color: var(--clr-neutral-500);
      border-radius: var(--size-150);
    }

    &__data-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--size-100);
    }

    &__data-name {
      font-size: var(--size-150);
      font-weight: 400;
    }

    &__data-value {
      font-size: var(--size-300);
      font-weight: 700;
    }

    &__about-list {
      grid-column: 1 / -1;
      list-style: none;

      display: flex;
      flex-direction: column;
      gap: var(--size-300);
    }

    &__about-item {
      display: flex;
      align-items: center;
      gap: var(--size-200);

      color: var(--clr-neutral-100);

      &[data-available='false'] {
        color: var(--clr-neutral-300);
      }
    }

    &__about-icon {
      flex-shrink: 0;
      width: var(--size-400);
      height: var(--size-400);
    }

    &__about-value {
      font-weight: 400;
      font-size: var(--size-200);

      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
`;

export default UserInfoStyle;

import styled from 'styled-components';

const UserInfoStyle = styled.section`
  --image-size: 4.375rem;

  display: grid;
  align-items: center;

  grid-template-columns: var(--image-size) 1fr;
  grid-template-rows: repeat(4, min-content);
  column-gap: var(--size-400);

  padding: var(--size-700) var(--size-500) var(--size-850);
  background-color: var(--clr-bg);
  border-radius: var(--size-250);
  box-shadow: var(--shadow);
  font-size: var(--size-200);

  transition: background-color 0.25s, color 0.25s, box-shadow 0.25s;

  @media (min-width: 36em) {
    --image-size: 7.3125rem;
    font-size: var(--size-250);
    padding: var(--size-800);
  }

  @media (min-width: 50em) {
    padding: var(--size-850);
    grid-template-columns: var(--image-size) 1fr 1fr;
  }

  .info {
    &__image {
      grid-column: 1;
      grid-row: 1;

      aspect-ratio: 1;
      border-radius: 50%;
      background-color: var(--clr-body-bg);

      @media (min-width: 50em) {
        grid-row: 1 / span 2;
        align-self: start;
      }
    }

    &__header {
      display: grid;
      align-items: center;

      @media (min-width: 50em) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, min-content);
      }
    }

    &__name {
      font-size: var(--size-300);
      font-weight: 700;
      color: var(--clr-title);

      transition: color 0.25s;

      @media (min-width: 36em) {
        font-size: var(--size-550);
      }
    }

    &__username,
    &__join-date {
      font-size: inherit;
      font-weight: 400;
    }

    &__join-date {
      color: var(--clr-text-secondary);
      transition: color 0.25s;

      @media (min-width: 50em) {
        justify-self: end;
      }
    }

    &__username {
      color: var(--clr-primary-400);
      margin-bottom: var(--size-100);

      @media (min-width: 36em) {
        font-size: var(--size-300);
        margin-bottom: 0.25rem;
      }

      @media (min-width: 50em) {
        grid-column: 1;
        grid-row: 2;
      }
    }

    &__description {
      grid-column: 1 / -1;

      margin-top: var(--size-700);
      line-height: 1.5625rem;
      color: var(--clr-text-75);

      transition: color 0.25s;

      @media (min-width: 36em) {
        margin-top: var(--size-400);
      }
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

      background-color: var(--clr-body-bg);
      border-radius: var(--size-150);

      transition: background-color 0.25s, color 0.25s;

      @media (min-width: 36em) {
        padding: var(--size-300) var(--size-700);
        margin-block: var(--size-700) var(--size-750);
      }
    }

    &__data-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--size-100);

      transition: inherit;

      @media (min-width: 36em) {
        align-items: flex-start;
        gap: 0.0625rem;
      }
    }

    &__data-name {
      font-size: var(--size-150);
      font-weight: 400;

      transition: inherit;

      @media (min-width: 36em) {
        font-size: var(--size-200);
      }
    }

    &__data-value {
      font-size: var(--size-300);
      font-weight: 700;
      color: var(--clr-title);

      transition: inherit;

      @media (min-width: 36em) {
        font-size: var(--size-450);
      }
    }

    &__about-list {
      grid-column: 1 / -1;
      list-style: none;

      display: flex;
      flex-direction: column;
      gap: var(--size-300);

      @media (min-width: 36em) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto auto;
        column-gap: var(--size-900);
      }
    }

    &__about-item {
      display: flex;
      align-items: center;
      gap: var(--size-200);

      color: var(--clr-text);

      transition: color 0.25s;

      &[data-available='false'] {
        opacity: 0.5;
      }

      &[data-available='true'] {
        .info__about-link:hover {
          text-decoration: underline;
        }
      }

      @media (min-width: 36em) {
        &:nth-child(2) {
          grid-row: 2;
        }
      }
    }

    &__about-icon {
      flex-shrink: 0;
      width: var(--size-400);
      height: var(--size-400);
    }

    &__about-value {
      font-weight: 400;
      font-size: inherit;

      a {
        text-decoration: none;
        color: inherit;
      }
    }

    @media (min-width: 50em) {
      &__header,
      &__description,
      &__data-list,
      &__about-list {
        grid-column: 2 / -1;
      }
    }
  }
`;

export default UserInfoStyle;

import { createGlobalStyle } from 'styled-components';

const HelpersStyle = createGlobalStyle`
  .container {
    --max-width: 45.625rem;
    --padding: 1.5rem;

    max-width: var(--max-width);
    padding-inline: var(--padding);
    margin-inline: auto;
    box-sizing: content-box;
  }

  .flex {
    display: flex;

    &--wrap {
      flex-wrap: wrap;
    }

    &--col {
      flex-direction: column;
    }

    &--center {
      align-items: center;
    }

    &--btw {
      justify-content: space-between;
    }
  }
`;

export default HelpersStyle;

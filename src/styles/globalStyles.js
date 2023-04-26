import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --hsl-primary-400: 212 100% 50%;
        
        --hsl-secondary-300: 217 20% 51%;            
        --hsl-secondary-400: 217 35% 45%;            
        --hsl-secondary-500: 217 21% 21%;        
        
        --hsl-neutral-100: 0 0% 100%;            
        --hsl-neutral-200: 0 0% 99.6%;            
        --hsl-neutral-300: 227 100% 98%;            
        --hsl-neutral-400: 222 41% 20%;            
        --hsl-neutral-500: 220 40% 13%;

        --hsl-accent-400: 0 91% 62%;
    }

    :root {        
        --clr-primary-400: hsl(var(--hsl-primary-400) / 1);

        --clr-secondary-300: hsl(var(--hsl-secondary-300) / 1);
        --clr-secondary-400: hsl(var(--hsl-secondary-400) / 1);
        --clr-secondary-500: hsl(var(--hsl-secondary-500) / 1);

        --clr-neutral-100: hsl(var(--hsl-neutral-100) / 1);
        --clr-neutral-200: hsl(var(--hsl-neutral-200) / 1);
        --clr-neutral-300: hsl(var(--hsl-neutral-300) / 1);
        --clr-neutral-400: hsl(var(--hsl-neutral-400) / 1);
        --clr-neutral-500: hsl(var(--hsl-neutral-500) / 1);

        --clr-accent-400: hsl(var(--hsl-accent-400) / 1);
    }

    :root {
        --size-100: 0.5rem;             /* 8px */
        --size-150: 0.625rem;           /* 10px */
        --size-200: 0.8125rem;          /* 13px */
        --size-250: 0.9375rem;          /* 15px */
        --size-300: 1rem;               /* 16px */
        --size-350: 1.125rem;           /* 18px */
        --size-400: 1.25rem;            /* 20px */
        --size-450: 1.375rem;           /* 22px */
        --size-500: 1.5rem;             /* 24px */
        --size-550: 1.625rem;           /* 26px */
        --size-600: 1.75rem;            /* 28px */
        --size-650: 1.875rem;           /* 30px */
        --size-700: 2rem;               /* 32px */
        --size-750: 2.25rem;            /* 36px */
        --size-800: 2.5rem;             /* 40px */
        --size-850: 3rem;               /* 48px */
        --size-900: 3.5rem;             /* 56px */
        --size-950: 4rem;               /* 64px */
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Space Mono', monospace;
        min-height: max(100vh, 56.25rem);
        background-color: var(--clr-neutral-500);
        overflow-x: hidden;

        color: var(--clr-neutral-100);
    }

    html {
        scroll-behavior: smooth;
    }

    input,
    button,
    select {
        font: inherit;
    }

    img,
    picture,
    figure {
        display: block;
        max-width: 100%;
    }
`;

export default GlobalStyle;

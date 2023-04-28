import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --hsl-primary-300: 212 100% 69%;
        --hsl-primary-400: 212 100% 50%;
        
        --hsl-secondary-300: 217 20% 51%;            
        --hsl-secondary-400: 217 35% 45%;            
        --hsl-secondary-500: 217 21% 21%;        
        
        --hsl-neutral-100: 0 0% 100%;            
        --hsl-neutral-200: 0 0% 99.6%;            
        --hsl-neutral-300: 227 100% 98%;            
        --hsl-neutral-400: 222 40% 70%;            
        --hsl-neutral-500: 222 41% 20%;            
        --hsl-neutral-600: 220 40% 13%;
        --hsl-neutral-700: 220 18% 16%;

        --hsl-accent-400: 0 91% 62%;
    }

    :root {        
        --clr-primary-300: hsl(var(--hsl-primary-300) / 1);
        --clr-primary-400: hsl(var(--hsl-primary-400) / 1);

        --clr-secondary-300: hsl(var(--hsl-secondary-300) / 1);
        --clr-secondary-400: hsl(var(--hsl-secondary-400) / 1);
        --clr-secondary-500: hsl(var(--hsl-secondary-500) / 1);

        --clr-neutral-100: hsl(var(--hsl-neutral-100) / 1);
        --clr-neutral-200: hsl(var(--hsl-neutral-200) / 1);
        --clr-neutral-300: hsl(var(--hsl-neutral-300) / 1);
        --clr-neutral-400: hsl(var(--hsl-neutral-400) / 1);
        --clr-neutral-500: hsl(var(--hsl-neutral-500) / 1);
        --clr-neutral-600: hsl(var(--hsl-neutral-600) / 1);
        --clr-neutral-700: hsl(var(--hsl-neutral-700) / 1);

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

    html[data-theme='dark'] {
        --clr-text: var(--clr-neutral-100);
        --clr-text-75: hsl(var(--hsl-neutral-100) / 0.75);
        --clr-text-secondary: var(--clr-neutral-100);
        --clr-title: var(--clr-neutral-100);
        --clr-body-bg: var(--clr-neutral-600);
        --clr-bg: var(--clr-neutral-500);
        --clr-theme-btn: var(--clr-neutral-100);
        --clr-theme-btn-hover: var(--clr-neutral-400);
        --shadow: 0 1rem 1.875rem -0.625rem hsl(var(--hsl-neutral-700) / 0.198567);
        --bg-animation: linear-gradient(
            90deg,
            var(--clr-bg) 0%,
            var(--clr-bg) 15%,
            hsl(var(--hsl-neutral-100) / 5%) 20%,
            var(--clr-bg) 25%
        );
    }

    html[data-theme='light'] {
        --clr-text: var(--clr-secondary-400);
        --clr-text-75: hsl(var(--hsl-secondary-400) / 0.75);
        --clr-text-secondary: var(--clr-secondary-300);
        --clr-title: var(--clr-secondary-500);
        --clr-body-bg: var(--clr-neutral-300);
        --clr-bg: var(--clr-neutral-200);
        --clr-theme-btn: var(--clr-secondary-300);
        --clr-theme-btn-hover: var(--clr-neutral-700);
        --shadow: 0 1rem 1.875rem -0.625rem hsl(var(--hsl-secondary-400) / 0.198567);
        --bg-animation: linear-gradient(
            90deg,
            var(--clr-bg) 0%,
            var(--clr-bg) 15%,
            hsl(var(--hsl-neutral-500) / 5%) 20%,
            var(--clr-bg) 25%
        );
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
        min-height: 100vh;
        overflow-x: hidden;

        background-color: var(--clr-body-bg);
        color: var(--clr-text);

        transition: background-color 0.25s, color 0.25s;

        padding-block: var(--size-700) 5rem;
        
        @media (min-width: 36em) {
            padding-block: 9rem 14.75rem;
        }
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

import { css } from '@linaria/core';
import config from '@app/config';

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
css`
  :global() {
    :root {
      --color-purple: #da68f5;
      --color-red: #f25f5b;
      --color-yellow: #f4ce4a;
      --color-green: #00f6d2;
      --color-blue: #0bccf7;
      --color-dark-blue: #042548;
      --color-white: #ffffff;
      --color-gray: #8196a4;
      --color-white: white;
      --color-violet: #c061e0;

      --color-popup-mainnet: #003f6f;
      --color-popup-testnet: #342e41;
      --color-popup-masternet: #323232;
      --color-popup-dappnet: #323232;
      --color-hover-mainnet: #114b77;
      --color-hover-testnet: #711a75;
      --color-hover-masternet: rgba(255, 255, 255, 0.05);
      --color-hover-dappnet: rgba(255, 255, 255, 0.05);
      --color-select: #184469;

      --color-disabled: #8da1ad;

      --color-bg-mainnet: var(--color-dark-blue);
      --color-bg-testnet: #1e172c;
      --color-bg-masternet: #171717;
      --color-bg-dappnet: #000a16;
      --color-gradient-start-mainnet: rgba(3, 91, 143, 0);
      --color-gradient-start-testnet: #1a132d;
      --color-gradient-start-masternet: #171717;
      --color-gradient-start-dappnet: #000a16;
      --color-gradient-finish-mainnet: #035b8f;
      --color-gradient-finish-testnet: #4c3677;
      --color-gradient-finish-masternet: #393939;
      --color-gradient-finish-dappnet: #001f45;
    }

    @font-face {
      font-family: 'ProximaNova';
      src: url('/assets/fonts/ProximaNova-Regular.ttf');
      font-weight: 400;
      font-style: normal;
    }

    @font-face {
      font-family: 'ProximaNova';
      src: url('/assets/fonts/ProximaNova-RegularIt.ttf');
      font-weight: 400;
      font-style: italic;
    }

    @font-face {
      font-family: 'ProximaNova';
      src: url('/assets/fonts/ProximaNova-Semibold.ttf');
      font-weight: 600;
      font-style: normal;
    }

    @font-face {
      font-family: 'ProximaNova';
      src: url('/assets/fonts/ProximaNova-Bold.ttf');
      font-weight: 700;
      font-style: normal;
    }

    @font-face {
      font-family: 'SFProDisplay';
      src: url('/assets/fonts/SFProDisplay-Regular.ttf');
      font-weight: 400;
      font-style: normal;
    }

    @font-face {
      font-family: 'SFProDisplay';
      src: url('/assets/fonts/SFProDisplay-RegularItalic.ttf');
      font-weight: 400;
      font-style: italic;
    }

    @font-face {
      font-family: 'SFProDisplay';
      src: url('/assets/fonts/SFUIDisplay-Medium.otf');
      font-weight: 600;
      font-style: normal;
    }

    @font-face {
      font-family: 'SFProDisplay';
      src: url('/assets/fonts/SFProDisplay-Bold.ttf');
      font-weight: 700;
      font-style: normal;
    }

    * {
      box-sizing: border-box;
      outline: none;
    }

    html,
    body {
      margin: 0;
      padding: 0;
    }

    html {
      width: 375px;
      height: 600px;
    }

    html * {
      font-family: 'ProximaNova', sans-serif;
    }

    body {
      background-color: ${`var(--color-bg-${config.theme})`};
      font-size: 14px;
      color: white;
    }

    p {
      margin: 0;
      margin-bottom: 30px;
    }

    ul,
    ol {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  }
`;

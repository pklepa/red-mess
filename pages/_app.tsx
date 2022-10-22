import { brand } from '@helpers/brand';
import fonts from '@helpers/fonts';
import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    ${fonts.inter.base};

    background-color: ${brand.black};
    color: ${brand.white};
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;


import '../styles/globals.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import { appWithTranslation } from 'next-i18next'
import { Provider } from 'react-redux';

import type { AppProps } from 'next/app'
import { store } from '@/store/store';

function App({ Component, pageProps }: AppProps) {
  return (  
    <Provider store={store}>
      <Component {...pageProps} />
      </Provider>  
  );
}

export default appWithTranslation(App)

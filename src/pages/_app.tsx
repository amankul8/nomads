
import '../styles/globals.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { wrapper } from '@/store/store';
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import { fetchCountries } from '@/store/models/countries';
import { fetchActivities } from '@/store/models/activities';
import { fetchDestinations } from '@/store/models/destinations';
import { fetchTourTypes } from '@/store/models/tour_types';
import { fetchRegions } from '@/store/models/regions';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import { fetchStations } from '@/store/models/stations';
import { fetchTours } from '@/store/models/tours';
import { fetchAccommodations } from '@/store/models/accommodations';

function App({ Component, pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  useEffect(() => {
    store.dispatch(fetchTourTypes());
    store.dispatch(fetchRegions());
    store.dispatch(fetchCountries());
    store.dispatch(fetchActivities());
    store.dispatch(fetchStations());
    store.dispatch(fetchDestinations());
    store.dispatch(fetchTours());
    store.dispatch(fetchAccommodations());
  }, [store]);

  return (
    <Provider store={store}>
      <DefaultSeo {...SEO} />
      <Component {...props.pageProps} />
    </Provider>
  );
}

export default appWithTranslation(App);

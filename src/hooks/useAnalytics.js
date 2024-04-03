import useChrome from '@redhat-cloud-services/frontend-components/useChrome';

// the chrome hook assumes we're in a prod env because local development points
// to prod.foo.redhat.com and uses the wrong write key when initializing segment.
// to avoid this we can set chrome:analytics:dev to true in local storage
// to initialize segment with the correct write key and test events in dev

// one caveat to note is we cant prevent sending the initial page/group/identity events
// to the wrong segment environment when segment is initialized before the key is set

function useAnalytics() {
  const { analytics } = useChrome();

  function analyticsTrack(event) {
    const isProdEnv = process.env.NODE_ENV === 'production';
    const isDevEnv = process.env.NODE_ENV === 'development';
    const analyticsDevKeySet =
      localStorage.getItem('chrome:analytics:dev') === 'true';

    console.log('process.env', process.env.NODE_ENV);

    if (process.env.NODE_ENV === 'production') {
      console.log('will get removed if not "production"');
    }

    if (process.env.NODE_ENV === 'development') {
      console.log('will get removed if not "development"');
    }

    if (process.env.NODE_ENV) {
      console.log('will get removed if not set to any value');
    }

    if (isProdEnv || (isDevEnv && analyticsDevKeySet)) {
      analytics.track(event);
    }
  }

  return {
    analyticsTrack,
  };
}

export default useAnalytics;

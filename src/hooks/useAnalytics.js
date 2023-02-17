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

    if (isProdEnv || (isDevEnv && analyticsDevKeySet)) {
      analytics.track(event);
    }
  }

  return {
    analyticsTrack,
  };
}

export default useAnalytics;

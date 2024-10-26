import { useEffect, useState } from 'react';

import { usePreservationStore } from '../stores';

export const usePreservationStoreHydration = () => {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    const unsubFinishHydration = usePreservationStore.persist.onFinishHydration(
      () => setHydrated(true),
    );
    setHydrated(usePreservationStore.persist.hasHydrated());
    return () => {
      unsubFinishHydration();
    };
  }, []);

  return hydrated;
};

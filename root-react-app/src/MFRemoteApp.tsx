import { useRef, useEffect, useState } from 'react'

interface MFRemoteAppProps {
    rootCounter: number;
}

function MFRemoteApp({ rootCounter }: MFRemoteAppProps) {
  const vueMFRef = useRef<HTMLDivElement>(null);
  const [vueMFStore, setVueMFStore] = useState<MFRemoteAppProps>();
  const [mfeError, setMfeError] = useState<string>();

  useEffect(() => {
    if (vueMFRef.current) {
        // TODO: Fix TypeScript
        import('remoteVueApp/AppWrapper').then(({ default: AppWrapper }) => {
            setVueMFStore(AppWrapper(vueMFRef.current, { rootCounter }) as MFRemoteAppProps);
        }).catch((err) => {
            console.error(err);
            setMfeError('Failed to load Vue MFE');
        });
    }
  }, []);

  useEffect(() => {
    if (vueMFStore) {
        vueMFStore.rootCounter = rootCounter;
    }
  }, [rootCounter]);

  if (mfeError) {
    return <div>{mfeError}</div>;
  }

  return (
    <div id="vue-mf-app" ref={vueMFRef}></div>
  )
}

export default MFRemoteApp

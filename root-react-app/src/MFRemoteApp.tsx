import { useRef, useEffect, useState } from 'react'

import AppWrapper from 'remoteVueApp/AppWrapper'

interface MFRemoteAppProps {
    rootCounter: number;
}

function MFRemoteApp({ rootCounter }: MFRemoteAppProps) {
  const vueMFRef = useRef<HTMLDivElement>(null);
  const [vueMFStore, setVueMFStore] = useState<MFRemoteAppProps>();

  useEffect(() => {
    if (vueMFRef.current) {
      console.log('Ref: ', vueMFRef.current);
      setVueMFStore(AppWrapper(vueMFRef.current, { rootCounter }) as MFRemoteAppProps);
    }
  }, []);

  useEffect(() => {
    if (vueMFStore) {
        vueMFStore.rootCounter = rootCounter;
    }
  }, [rootCounter]);


  return (
    <div id="vue-mf-app" ref={vueMFRef}></div>
  )
}

export default MFRemoteApp

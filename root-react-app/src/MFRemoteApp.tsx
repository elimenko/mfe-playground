import { useRef, useEffect } from 'react'

import AppWrapper from 'remoteVueApp/AppWrapper'

interface MFRemoteAppProps {
    rootCounter: number;
}

function MFRemoteApp({ rootCounter }: MFRemoteAppProps) {
  const vueMFRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (vueMFRef.current) {
      console.log('Ref: ', vueMFRef.current);
      AppWrapper(vueMFRef.current, { rootCounter });
    }
  }, [rootCounter]);

  return (
    <div id="vue-mf-app" ref={vueMFRef}></div>
  )
}

export default MFRemoteApp

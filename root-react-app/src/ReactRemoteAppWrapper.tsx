import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
const ReactApp = React.lazy(() => import("remoteReactApp/App"));

interface ReactRemoteAppWrapperProps {
  rootCounter?: number;
}

export default function ReactRemoteAppWrapper(props?: ReactRemoteAppWrapperProps) {
  return (
    <div>
      <ErrorBoundary fallback={<span>Failed to load React MFE</span>}>
        <Suspense fallback={<span>Loading React MFE</span>}>
          <ReactApp rootCounter={props?.rootCounter}/>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

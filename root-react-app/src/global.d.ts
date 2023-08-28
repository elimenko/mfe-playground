declare module "remoteReactApp/App" {
    interface AppProps {
        rootCounter?: number;
    }
    export default function App(props?: AppProps): JSX.Element;
}

declare module "remoteVueApp/AppWrapper" {
    interface AppProps {
        rootCounter?: number;
    }

    export default function AppWrapper(ref: HTMLElement | null, props?: AppProps): AppProps;
}

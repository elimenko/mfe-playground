# MFE Playground

This repository serves as a testing playground for working with Micro Frontend (MFE) applications. It contains one host application and two remote applications, configured with different technologies.

## Applications

The playground consists of the following applications:

1. **root-react-app**: This is the host application built with React. It is responsible for loading and rendering the remote applications.

2. **vue-remote-iframe-app**: This is a remote application built with Vue. It is served inside an iframe in the host application.

3. **vue-remote-mf-app**: This is another remote application built with Vue. This application uses Vite Module Federation for serving and integrating into the host application.

## Getting Started

To get started, you need to clone the repository, install the dependencies, and run the applications:

```bash
# Navigate to the root-react-app directory, install dependencies, and start the application
cd root-react-app
npm install
npm run dev

# Open another terminal window, navigate to the vue-remote-iframe-app directory, install dependencies, and start the application
cd vue-remote-iframe-app
npm install
npm run dev

# Open yet another terminal window, navigate to the vue-remote-mf-app directory, install dependencies, and start the application
# Only the Host side supports dev mode, the Remote side requires the RemoteEntry.js package to be generated using vite build. This is because Vite Dev mode is Bundleless and you can use vite build --watch to achieve a hot update effect. Read more here: https://github.com/originjs/vite-plugin-federation#vite-dev-mode
cd vue-remote-mf-app
npm install
npm run build
npm run preview
```

Now, you should have all three applications running. Open your browser and navigate to `localhost:3000` (or wherever your React app is being served) to see the applications in action.

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ChakraProvider,ColorModeProvider,extendTheme} from '@chakra-ui/react'
import '@fontsource/oxanium'
import { ApolloClient,InMemoryCache,ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
})

const theme = extendTheme({
  fonts: {
    heading: `'Oxanium', sans-serif`,
    body: `'Oxanium', sans-serif`
  }
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider options={{initialColorMode: 'dark',useSystemColorMode: false}}/>
    <App />
    </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>
);

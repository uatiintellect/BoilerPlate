import * as React from 'react';
import { AppRegistry } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import App from './src/App';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
    ...DefaultTheme.colors,
    primary: 'green',
    accent: 'brown',
    }
  };
export default function Main() {
  return (
    <PaperProvider theme ={theme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent('MaterialProduct', () => Main);
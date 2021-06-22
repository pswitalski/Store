import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';

import Header from 'components/Header/Header';
import Nav from 'components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme} >
        <GlobalStyle />
        <Header />
        <Nav />
      </ThemeProvider>
    </div>
  );
}

export default App;
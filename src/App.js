import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';

import Header from 'components/Header/Header';
import Nav from 'components/Nav/Nav';

import { getCategoriesFromApi } from 'helpers/getCategoriesFromApi';
import { useDispatch } from 'react-redux';
import { addCategories } from 'features/categories/categoriesSlice';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const categories = await getCategoriesFromApi();
      dispatch(addCategories(categories));
    }
    fetchData();

  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme} >
          <GlobalStyle />
          <Header />
          <Nav />
          <p>lorem</p>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
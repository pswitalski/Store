import React, { useEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';

import Header from 'components/Header/Header';
import Nav from 'components/Nav/Nav';
import Home from 'pages/Home';

import { getCategoriesFromApi } from 'helpers/getCategoriesFromApi';
import { useDispatch } from 'react-redux';
import { addCategories } from 'features/categories/categoriesSlice';

function App() {

  const dispatch = useDispatch();

  const fetched = useRef({
    fetched: false
  })

  useEffect(() => {
    const fetchData = async () => {
      const categories = await getCategoriesFromApi();
      dispatch(addCategories(categories));
      fetched.current = true;
    }

    if (!fetched.current.fetched) {
      fetchData();
    }

  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme} >
          <GlobalStyle />
          <Header />
          <Nav />

          <Switch>
            <Route exact path="/" >
              <Home />
            </Route>
          </Switch>

        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
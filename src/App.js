import React, { useEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';

import Header from 'components/Header/Header';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';
import LoginModal from 'components/LoginModal/LoginModal';
import UserProfile from 'components/UserProfile/UserProfile';
import CurrencyModal from 'components/CurrencyModal/CurrencyModal';
import ShopingCartModal from 'components/ShoppingCart/ShoppingCartModal';
import SearchModal from 'components/SearchModal/SearchModal';
import AddedToCartModal from 'components/AddedToCartModal/AddedToCartModal';

import Home from 'pages/Home';
import Category from 'pages/Category';
import ProductPage from 'pages/ProductPage';
import Page404 from 'pages/Page404';
import Basket from 'pages/Basket';

import { getCategoriesFromApi } from 'helpers/getCategoriesFromApi';
import { useDispatch, useSelector } from 'react-redux';
import { addCategories } from 'features/categories/categoriesSlice';
import { GetUserFromApi } from 'helpers/getUserFromApi';
import { addExampleUser } from 'features/exampleUser/exampleUserSlice';
import { toggleIsUserLogIn } from 'features/currentUser/currentUserSlice';
import { sumBasketValue, changeCurrencySymbol } from 'features/basket/basketSlice';

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

  const loginModalOpen = useSelector(state => state.loginModalOpen);

  const fetchExampleUser = async () => {
    const userID = await Math.floor(Math.random() * 10) + 1;
    const user = await GetUserFromApi(userID);
    dispatch(addExampleUser(user));
  }

  useEffect(() => {
    fetchExampleUser()
  }, []);

  useEffect(() => {
    const checkIsUserLogIn = () => {
      const localStorageToken = window.localStorage.getItem('token');
      if (localStorageToken !== null) {
        dispatch(toggleIsUserLogIn(true));
      } else {
        dispatch(toggleIsUserLogIn(false))
      }
    };

    checkIsUserLogIn();
    window.addEventListener('storage', checkIsUserLogIn);

    return () => {
      window.removeEventListener('storage', checkIsUserLogIn);
    }

  });

  const isUserLogIn = useSelector(state => state.currentUser);
  const isCurrencyModalOpen = useSelector(state => state.currency.currencyModalOpen);
  const isShoppingCartOpen = useSelector(state => state.basket.shoppingCartOpen);
  const isSearchModalOpen = useSelector(state => state.search.searchModalOpen);
  const isAddedToCartModalOpen = useSelector(state => state.addedToCart.modalOpen);

  const basket = useSelector(state => state.basket);
  const currency = useSelector(state => state.currency.currentCurrency);

  useEffect(() => {
    dispatch(sumBasketValue());
    dispatch(changeCurrencySymbol(currency));
  }, [basket, currency, dispatch])

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme} >
          <GlobalStyle />
          <Header />
          <Nav />

          {loginModalOpen.loginModalOpen ? <LoginModal /> : null}
          {isUserLogIn.userProfileModalOpen ? <UserProfile /> : null}
          {isCurrencyModalOpen ? <CurrencyModal /> : null}
          {isShoppingCartOpen ? <ShopingCartModal /> : null}
          {isSearchModalOpen ? <SearchModal /> : null}
          {isAddedToCartModalOpen ? <AddedToCartModal /> : null}

          <Switch>
            <Route exact path="/" >
              <Home />
            </Route>

            <Route path="/category/:category" >
              <Category />
            </Route>

            <Route path="/product/:id" >
              <ProductPage />
            </Route>

            <Route path="/basket" >
              <Basket />
            </Route>

            <Route>
              <Page404 />
            </Route>

          </Switch>

          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
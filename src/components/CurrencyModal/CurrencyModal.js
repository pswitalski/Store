import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { toggleCurrencyModal, switchCurrency, addExchangeRate } from 'features/currency/currencySlice';

import { StyledModal } from 'assets/styles/Modal.styles';
import { StyledFieldset, StyledInput, StyledLabel, StyledForm, StyledH2 } from './CurrencyModal.styles';

import ModalHeader from 'components/ModalHeader/ModalHeader';

import { getExchangesFromApi } from 'helpers/getExchangeRatesFromApi';

const CurrencyModal = () => {

    const dispatch = useDispatch();

    const currentCurrency = useSelector(state => state.currency.currentCurrency);

    const closeMenuHandler = () => {
        dispatch(toggleCurrencyModal({type: 'CLOSE'}));
    }

    const changeCurrencyHandler = async (e) => {
        const currency = e.target.value;
        dispatch(switchCurrency(currency));

        if (currency === 'usd') {
            dispatch(addExchangeRate({}))
            return;
        };

        const exchangeRate = await getExchangesFromApi(currency);
        dispatch(addExchangeRate(exchangeRate));
    }

    return(
        <StyledModal>
            <ModalHeader text="Currency" close={closeMenuHandler} />
                <StyledForm onChange={changeCurrencyHandler} >
                    <StyledH2>currency</StyledH2>
                    <StyledFieldset >
                        <StyledLabel htmlFor="usd" >
                            <StyledInput type="radio" id="usd" name="currency" value="usd" defaultChecked={currentCurrency === 'usd' ? true: false} />
                            <span>USD (US Dolar)</span>
                        </StyledLabel>

                        <StyledLabel htmlFor="pln" >
                            <StyledInput type="radio" id="pln" name="currency" value="pln" defaultChecked={currentCurrency === 'pln' ? true: false} />
                            <span>PLN (Polish Zloty)</span>
                        </StyledLabel>

                        <StyledLabel htmlFor="eur" >
                            <StyledInput type="radio" id="eur" name="currency" value="eur" defaultChecked={currentCurrency === 'eur' ? true: false} />
                            <span>EUR (Euro)</span>
                        </StyledLabel>

                        <StyledLabel htmlFor="gbp" >
                            <StyledInput type="radio" id="gbp" name="currency" value="gbp" defaultChecked={currentCurrency === 'gbp' ? true: false} />
                            <span>GBP (British pound sterling)</span>
                        </StyledLabel>
                    </StyledFieldset>
                </StyledForm>
        </StyledModal>
    )
}

export default CurrencyModal;
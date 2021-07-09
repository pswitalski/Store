import { useDispatch } from 'react-redux';
import { closeCurrencyModal } from 'features/currency/currencySlice';
import { closeShoppingCartModal } from 'features/basket/basketSlice';
import { closeLoginModal } from 'features/loginModalOpen/loginModalSlice';
import { closeSearchModalOpen } from 'features/search/searchSlice';

export const useCloseModals = () => {

    const dispatch = useDispatch();

    const closeAllModals = () => {
        dispatch(closeCurrencyModal());
        dispatch(closeLoginModal());
        dispatch(closeSearchModalOpen());
        dispatch(closeShoppingCartModal());
    }

    return closeAllModals;
}
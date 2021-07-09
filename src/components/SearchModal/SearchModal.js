import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { closeSearchModalOpen } from 'features/search/searchSlice';
import { addElectronics, addJewelery, addMensClothing, addWomensClothing } from 'features/items/itemsSlice';

import ModalHeader from 'components/ModalHeader/ModalHeader';
import BasketItem from 'components/BasketItem/BasketItem';

import { StyledModal } from 'assets/styles/Modal.styles';
import { StyledResultsContainer, StyledForm, StyledInput, StyledSelect, StyledEmptyMessage } from './SearchModal.styles';

import { getItemsFromCategory } from 'helpers/getItemsFromCategory';

const SearchModal = () => {

    const dispatch = useDispatch();

    const closeModalHandler = () => {
        dispatch(closeSearchModalOpen())
    }

    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState('all');
    const [searchResults, setSearchResults] = useState([]);

    const items = useSelector(state => state.items.items);

    useEffect(() => {
        if (items.electronics.length === 0) {
            const fetchElectronics = async () => {
                const response = await getItemsFromCategory('electronics');
                dispatch(addElectronics(response))
            }
            const fetchJewelery = async () => {
                const response = await getItemsFromCategory('jewelery');
                dispatch(addJewelery(response))
            }
            const fetchMensClothing = async () => {
                const response = await getItemsFromCategory("men's clothing");
                dispatch(addMensClothing(response))
            }
            const fetchWomensClothing = async () => {
                const response = await getItemsFromCategory("women's clothing");
                dispatch(addWomensClothing(response))
            }

            fetchElectronics();
            fetchJewelery();
            fetchMensClothing();
            fetchWomensClothing();
        }
    }, [])

    const handleInputChange = (e) => {
        e.preventDefault();
        setInputValue(e.target.value);
    }

    const handleSelectChange = (e) => {
        setSelectValue(e.target.value);
        setInputValue('');
    }

    const handleBlockSubmit = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        let result = [];

        switch(selectValue) {
            case 'jewelery':
                result = items.jewelery;
                break;
            case 'electronics':
                result = items.electronics;
                break;
            case 'mensClothing':
                result = items.mensClothing;
                break;
            case 'womensClothing':
                result = items.womensClothing;
                break;
            default:
                result = [...items.jewelery, ...items.electronics, ...items.mensClothing, ...items.womensClothing];
                break;
        }

        const filteredResult = result.filter(item =>{
            if (item.title.toLowerCase().includes(inputValue.toLowerCase())) return true;
        })


        setSearchResults(filteredResult);
    }, [selectValue, inputValue, items])

    const generateResults = () => {
        const items = searchResults.map(item => <BasketItem key={item.id} product={item} noControls />);
        return items;
    }


    return(
        <StyledModal>
            <ModalHeader text="search" close={closeModalHandler} />
            <StyledForm onSubmit={handleBlockSubmit} >
                <StyledSelect value={selectValue} onChange={handleSelectChange} >
                    <option value="all" >All Categories</option>
                    <option value="electronics" >Electronics</option>
                    <option value="jewelery" >Jewelery</option>
                    <option value="mensClothing" >Men's Clothing</option>
                    <option value="womensClothing" >Women's Clothing</option>
                </StyledSelect>
                <StyledInput placeholder="What are you looking for?" value={inputValue} onChange={handleInputChange} />
            </StyledForm>
            <StyledResultsContainer>
                {searchResults.length === 0 ? <StyledEmptyMessage>Nothing has been found</StyledEmptyMessage> : null}
                {generateResults()}
            </StyledResultsContainer>
        </StyledModal>
    )
}

export default SearchModal;
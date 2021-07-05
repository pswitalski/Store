import React from 'react';

import { StyledModal } from 'assets/styles/Modal.styles';
import { StyledFieldset, StyledInput, StyledLabel, StyledForm, StyledH2 } from './CurrencyModal.styles';

import ModalHeader from 'components/ModalHeader/ModalHeader';

const CurrencyModal = () => {
    return(
        <StyledModal>
            <ModalHeader text="Currency" />
                <StyledForm>
                    <StyledH2>currency</StyledH2>
                    <StyledFieldset>
                        <StyledLabel htmlFor="usd" >
                            <StyledInput type="radio" id="usd" name="currency" value="usd" defaultChecked />
                            USD (US Dolar)
                        </StyledLabel>

                        <StyledLabel htmlFor="pln" >
                            <StyledInput type="radio" id="pln" name="currency" value="pln" />
                            PLN (Polish Zloty)
                        </StyledLabel>

                        <StyledLabel htmlFor="eur" >
                            <StyledInput type="radio" id="eur" name="currency" value="eur" />
                            EUR (Euro)
                        </StyledLabel>

                        <StyledLabel htmlFor="gbp" >
                            <StyledInput type="radio" id="gbp" name="currency" value="gbp" />
                            GBP (British pound sterling)
                        </StyledLabel>
                    </StyledFieldset>
                </StyledForm>
        </StyledModal>
    )
}

export default CurrencyModal;
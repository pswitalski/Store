import styled, {keyframes} from "styled-components";

export const StyledNewsletterSection = styled.section`
    height: 580px;
    width: 100%;
    background: linear-gradient(180deg, #F3F2F2 0%, #DCDBDB 100%);
    color: ${props => props.theme.colors.dark};
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    position: relative;
    overflow: hidden;
`;

export const StyledForm = styled.form`
    background-color: ${props => props.theme.colors.white};
    height: 461px;
    width: 532px;
    border-radius: 4px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const StyledH3 = styled.h3`
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.06em;
    opacity: 0.4;
`;

export const StyledP = styled.p`
    font-weight: 600;
    font-size: 26px;
    line-height: 36px;
    letter-spacing: 0.06em;
    text-align: center;
    margin-top: 16px;
`;

export const StyledSpan = styled.span`
    color: ${props => props.theme.colors.sale};
`;

export const StyledInput = styled.input`
    width: 80%;
    max-width: 340px;
    height: 64px;
    margin-top: 32px;
    background-color: ${props => props.theme.colors.grWhite};
    border: none;
    text-align: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    outline: none;

    &::placeholder {
        opacity: 0.4;
    }
`;

export const StyledButton = styled.button`
    width: 80%;
    max-width: 340px;
    height: 64px;
    margin-top: 24px;
    text-transform: uppercase;
    border: none;
    background-color: ${props => props.theme.colors.dark};
    color: rgba(255, 255, 255, 0.9);
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0.06em;

    &:disabled {
        opacity: 0.8;
    }
`;

export const StyledMessage = styled.p`
    margin: 10px;
    visibility: hidden;
    text-align: center;

    &.active {
        visibility: visible;
    }
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg)
    }
    to {
        transform: rotate(-360deg)
    }
`;

export const StyledLoading = styled.img`
    margin-top: 5px;
    height: 20px;
    animation: ${rotate} 1s linear infinite;
    position: absolute;
    bottom: 20px;
`;

export const StyledGirl = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-120%, -48%);
    height: 100%;

    @media (max-width: 800px) {
        display: none;
    }
`;

export const StyledGuy = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(70%, -50%);
    height: 90%;

    @media (max-width: 800px) {
        display: none;
    }
`;
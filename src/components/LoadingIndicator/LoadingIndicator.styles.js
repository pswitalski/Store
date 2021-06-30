import styled, {keyframes} from "styled-components";

const scaleDown = keyframes`
    0% {
        transform: scale(1);
    }

    50% {
        tranform: scale(0.5);
    }

    51% {
        transform: scale(0.51) rotate(0);
    }

    60% {
        transform: scale(0.6) rotate(90deg);
    }

    100% {
        transform: scale(1) rotate(90deg);
    }
`;

const scaleUp = keyframes`
    0% {
        transform: rotate(45deg) scale(1);
    }

    50% {
        transform: rotate(45deg) scale(2);
    }

    51% {
        transform: rotate(45deg) scale(2);
    }

    100% {
        tranform: rotate(45deg) scale(1);
    }
`;

export const StyledLoadingIndicator = styled.div`
    width: 100%;
    height: 60px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledContainer = styled.div`
    transform: rotate(45deg);
    width: 20px;
    height: 20px;
    animation: ${scaleUp} 1s linear infinite;
    display: flex;
    flex-wrap: wrap;
`;

export const StyledBoxTop = styled.div`
    background-color: ${props => props.theme.colors.dark};
    width: 50%;
    height: 50%;
    animation: ${scaleDown} 1s linear infinite;
`;

export const StyledBoxRight = styled.div`
    background-color: ${props => props.theme.colors.dark};
    width: 50%;
    height: 50%;
    animation: ${scaleDown} 1s linear infinite;
`;

export const StyledBoxBottom = styled.div`
    background-color: ${props => props.theme.colors.dark};
    width: 50%;
    height: 50%;
    animation: ${scaleDown} 1s linear infinite;
`;

export const StyledBoxLeft = styled.div`
    background-color: ${props => props.theme.colors.dark};
    width: 50%;
    height: 50%;
    animation: ${scaleDown} 1s linear infinite;
`;
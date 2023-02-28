import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100vw;
    min-height: 100vh;

    gap: 20px;

    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.secondary};

    button {
        height: 50px;
        border: none;
        border-radius: 8px;
        padding: 10px;

        background-color: ${(props) => props.theme.secondary};
        color: ${(props) => props.theme.primary};

        &:hover {
            cursor: pointer;
        }
    }
`

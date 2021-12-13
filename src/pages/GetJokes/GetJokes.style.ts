import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonsContainer = styled.div`
    max-width: 960px;
    display: flex;
    justify-content: center;
    gap: 36px;
    margin: auto;
`

export const SLink = styled(Link)`
    width: 160px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 5px;
    background: #EA2027;
    user-select: none;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    color: #FFFFFF;
    text-decoration: none;
`

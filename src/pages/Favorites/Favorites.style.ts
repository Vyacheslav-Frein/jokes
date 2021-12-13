import { Link } from "react-router-dom";
import styled from "styled-components";

export const SContainer = styled.div`
    max-width: 960px;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
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

export const SButtonContainer = styled.div`
    width: 340px;
    display: flex;
    gap: 20px;
    margin: 20px auto 20px auto;
`
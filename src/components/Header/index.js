import React from "react";
import { WalletData } from './wallet-data'
import styled from 'styled-components';
import YOURLOGO from '../../assets/yourlogo.png'

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  height: 3rem;

  & h2 {
    align
  }
`;

const HeaderTitle = styled.a`
  display: flex;
  text-decoration: none;
  font-size: var(--lg);
  color: var(--font-color);
  align-items: center;

  & img {
    object-fit: cover;
    width: 50px;
    margin: 1rem auto;
  }
`;



function Header() {
  const link = "/";

  return(
    <HeaderContainer>
        <HeaderTitle href={link}>
            <img src={YOURLOGO} alt="Your logo"/>
        </HeaderTitle>
        {/* <HeaderSubtitle>Rinkeby Only</HeaderSubtitle> */}
        <WalletData/>
    </HeaderContainer>
  );

}

export { Header }
import React from "react";
import { Footer } from "./footer"
import { Header } from "./Header"
import { MainCard } from "./MainCard";
import styled from 'styled-components';
import {addPolygonNetwork} from '../utils/addNetwork'

const HelpLink = styled.a`
  color: var(--action-color);
  width: 100%;
  display: flex;
  justify-content: center;
  text-decoration: none;
  margin-top: 8px;
  font-size: var(--sm);

  &:hover {
    cursor: pointer;
  }
`;

function MainLayout() {

  return(
    <div className="Main">
      <Header/>
      <MainCard/>
      <Footer/>
      <HelpLink onClick={addPolygonNetwork}>Add Polygon Network</HelpLink>
      <HelpLink className="tutorial-link" href="https://google.com/" target="_blank" rel="noreferrer">How to donate</HelpLink>
    </div>
  );
}

export { MainLayout }
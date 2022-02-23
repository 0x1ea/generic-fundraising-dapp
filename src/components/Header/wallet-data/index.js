import React from "react";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { connector } from "../../../config/web3";
import { useCallback, useEffect } from "react";
import styled from 'styled-components';

const ConnectButton = styled.button`
  font-weight: 600;
  display: flex;
  justify-content: center;
  border: none;
  background-color: var(--secondary-color);
  color: var(--font-color);
  padding: 16px;
  margin: 0 auto;
  cursor: pointer;
  border-radius: 1.4rem;
  font-size: 0.8rem;
  align-self: center;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
              0 2px 2px hsl(0deg 0% 0% / 0.075),
              0 4px 4px hsl(0deg 0% 0% / 0.075),
              0 8px 8px hsl(0deg 0% 0% / 0.075),
              0 16px 16px hsl(0deg 0% 0% / 0.075);

  &:hover {
    opacity: 83%;
  }
`;


function WalletData() {

  const {active, activate, deactivate, error} = useWeb3React();
  const isUnsupportedChain = error instanceof UnsupportedChainIdError;

  const connect = useCallback(() => {
    activate(connector);
    localStorage.setItem("previouslyConnected", "true");
  }, [activate]);

  const  disconnect = () => {
    deactivate();
    localStorage.removeItem("previouslyConnected")
  }

  useEffect(() => {
    if (localStorage.getItem("previouslyConnected") === "true") connect();
  }, [connect]);

  return(
    <div>
        <ConnectButton
          onClick={!active ? connect : disconnect}
          disabled={isUnsupportedChain}
        >
          {
            active ? "Disconnect" : (
              isUnsupportedChain ? "Invalid Chain" : "Connect"
            )
          }
        </ConnectButton>
    </div>
  );
}

export { WalletData }
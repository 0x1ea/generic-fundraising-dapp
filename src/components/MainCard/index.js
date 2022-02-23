import React from "react";
import { SelectToken} from "./SelectToken"
import { InputAmount } from "./InputAmount";
import { useData } from "../../utils/useData"
import { MainButton } from "./MainButton"
import { MainContainer } from "./StyledMainCard";
import { InfoCard } from "./StyledMainCard";

function MainCard() {

  const {
    disabled, 
    setDisabled,
    tokenId, 
    setTokenId,
    tokenAddress, 
    setTokenAddress,
    balance, 
    setBalance,
    amount, 
    setAmount,
    allowance, 
    setAllowance,
    tkn,
    setToken,
  } = useData();
  


  return (
      <MainContainer>
        <InfoCard>
          <p className="card-text">Select token:</p>

          <SelectToken
              setTokenAddress={setTokenAddress}
              setTokenId={setTokenId}
              setDisabled={setDisabled}
              setBalance={setBalance}
              setAllowance={setAllowance}
              setToken={setToken}
              tkn={tkn}
              tokenId={tokenId}
          />

          <InputAmount
            disabled={disabled}
            balance={balance}
            setAmount={setAmount}
            amount={amount}
            setDisabled={setDisabled}
            tkn={tkn}
          />

          <MainButton
            amount={amount}
            balance={balance}
            disabled={disabled}
            allowance={allowance}
            tokenAddress={tokenAddress}
            tokenId={tokenId}
          />

        </InfoCard>
      </MainContainer>        
  )
}

export { MainCard }
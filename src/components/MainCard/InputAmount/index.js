import React from "react";
import { useWeb3React } from "@web3-react/core";
import { StyledInputAmount } from "./StyledInputAmount";
import { BalanceCointainer } from "./StyledInputAmount";
export function InputAmount(
  {
    disabled,
    balance,
    setAmount,
    setDisabled,
    tkn,
  }
) {

  const {active} = useWeb3React();

  return (
    <>
      <BalanceCointainer
        className="card-text text-balance"
        disabled={active? disabled : true}
      >
        <p>Your balance: </p>
        <span>{active ? `${balance} ${tkn}` : ""}</span>
      </BalanceCointainer>

      <StyledInputAmount className="input-amount">
        <p 
          className="card-text card-text-amount"
          disabled={active ? disabled : true}
        >
          Amount:
        </p>
        <input  
          className="basic-input" 
          placeholder="0"
          disabled={active ? disabled : true}
          onChange={event => {
              setAmount(event.target.value);
              (event.target.value === "0") && setDisabled(true)
          }}
        />
      </StyledInputAmount>
    </>
  )
}
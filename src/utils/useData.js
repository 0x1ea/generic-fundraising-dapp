import React from "react";

export function useData() {

  const [disabled, setDisabled] = React.useState(true);
  const [tokenId, setTokenId] = React.useState("");
  const [tokenAddress, setTokenAddress] = React.useState("");
  const [balance, setBalance] = React.useState("0");
  const [amount, setAmount] = React.useState("");
  const [allowance, setAllowance] = React.useState("0");
  const [tkn, setToken] = React.useState("");

  return (
    {
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
    }
  )
}

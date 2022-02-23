import React from "react";
import USDT from "../../../assets/tether.svg"
import USDC from "../../../assets/usdc.svg"
import DAI from "../../../assets/dai.svg"
import { useWeb3React } from "@web3-react/core";
import { TokenAbi } from "../../../config/artifacts/Token"
import { GetAllowance } from "../../../utils/GetAllowance";
import { SelectTokenContainer } from "./StyledToken";
import { TokenButton } from "./StyledToken";


export function SelectToken(
  {
    setTokenAddress,
    setTokenId,
    setDisabled,
    setBalance,
    setAllowance,
    setToken,
    tkn,
    tokenId,
  }
) {

  const { account, active, library, chainId} = useWeb3React();


  const getTokenBalance = (id, addr, token = "") => {

    const tokenContract = new library.eth.Contract(TokenAbi, addr);
    setTokenAddress(addr);
    setTokenId(id);
    
    setTimeout(() => {
      tokenContract.methods
      .balanceOf(account)
      .call()
      .then((bal) => {
        bal = library.utils.fromWei(bal, 'ether')
        setDisabled(false);
        setBalance(parseFloat(bal).toFixed(2));
        const allow = GetAllowance(addr, account, library, chainId);
        setAllowance(allow);
        setToken(token);
      });
    }, 360);
  }
  

  return (
    <>
      <SelectTokenContainer>
        <TokenButton tkn={[tkn, "USDT"]}
          disabled={!active? true : false}
          onClick={event => {
            getTokenBalance("0", "0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735", "USDT")
          }}
        >
          <img src={USDT} alt="USDT Logo" disabled={true}/>
          <p>USDT</p>
        </TokenButton>

        <TokenButton tkn={[tkn, "USDC"]}
          disabled={!active? true : false}
          onClick={event => {
            getTokenBalance("1", "0x6A9865aDE2B6207dAAC49f8bCba9705dEB0B0e6D", "USDC")
          }}
          >
            <img src={USDC} alt="USDC Logo"/>
            <p>USDC</p>
        </TokenButton>

        <TokenButton tkn={[tkn, "DAI"]}
          disabled={!active? true : false}
          onClick={event => {
            getTokenBalance("1", "0x6A9865aDE2B6207dAAC49f8bCba9705dEB0B0e6D", "DAI")
          }}
          >
            <img src={DAI} alt="DAI Logo"/>
            <p>DAI</p>
        </TokenButton>
      </SelectTokenContainer>


    </>
        
  );
}
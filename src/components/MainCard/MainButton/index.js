import React from "react";
import { useWeb3React } from "@web3-react/core";
import { TokenAbi } from "../../../config/artifacts/Token"
import { useFundraising } from "../../../utils/useFundraising";
import { FundProject } from "../../../utils/FundProject";
import { ApproveToken } from "../../../utils/ApproveToken";
import { StyledMainButton } from "./StyledMainButton";
import { MainButtonContainer } from "./StyledMainButton";
export function MainButton(
  {
    amount,
    balance,
    disabled,
    allowance,
    tokenAddress,
    tokenId,
  }
) {

  const {active, library, account} = useWeb3React();
  const Fundraising = useFundraising();

  return (
    <>
      <MainButtonContainer>
          <StyledMainButton
            id="fund-button"
            disabled={
              (active && (parseFloat(amount) <= balance) && (amount !== ""))
                ? disabled : true
            }
            onClick={
              ((allowance < amount) || (allowance === "0"))
              ?
                () => ApproveToken(library, TokenAbi, tokenAddress, account)
              :
                () => FundProject(tokenId, tokenAddress, amount, Fundraising, account)
            }
          >
            {(parseFloat(amount) > balance) ? 
                "Insufficient balance"
              :
                (
                  ((allowance < amount) || (allowance === "0"))?
                      "Approve"
                    :
                      "Fund"
                )
            }
          </StyledMainButton>
      </MainButtonContainer>
    </>
  )
}
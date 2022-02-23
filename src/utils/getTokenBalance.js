
import { TokenAbi } from "../config/artifacts/Token";
import { GetAllowance } from "./getAllowance";

export const GetTokenBalance = (account, id, addr, library, chainId) => {

  const tokenContract = new library.eth.Contract(TokenAbi, addr);
  // setTokenAddress(addr);
  // setTokenId(id);
  
    setTimeout(() => {
      tokenContract.methods
        .balanceOf(account)
        .call()
        .then((bal) => {
          bal = library.utils.fromWei(bal, 'ether')
          // setDisabled(false);
          // setBalance(parseFloat(bal).toFixed(2) );
          // getAllowance(addr);
          const allowance =  GetAllowance(addr, account, library, chainId)
          bal = parseFloat(bal).toFixed(2)
          const res = {balance: bal, tokenAddress: addr, tokenId: id, allowance: allowance};
          console.log(res)
          return res
        });
    }, 360);

}
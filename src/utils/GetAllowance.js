import { TokenAbi } from "../config/artifacts/Token";
import { FundraisingArtifacts } from "../config/artifacts/Fundraising";

export const GetAllowance = (addr, account, library, chainId) => {
  const tokenContract = new library.eth.Contract(TokenAbi, addr);
  const fundraising_address = FundraisingArtifacts.address[chainId];

  tokenContract.methods
    .allowance(account, fundraising_address)
    .call()
    .then((res) => {
      res = library.utils.fromWei(res, 'ether')
      return res;
    });
}
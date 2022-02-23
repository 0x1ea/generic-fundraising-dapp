export const ApproveToken = (library, TokenAbi, tokenAddress, account) => {
  const tokenContract = new library.eth.Contract(TokenAbi, tokenAddress);
  const fundraising_address = "0xcACf72D113CB01cd7E4ab5d7957fA08aE0BdAe2A"

  let button = document.getElementById("fund-button")
  tokenContract.methods
    .approve(fundraising_address, '10000000000000000000000000000')
    .send({from: account})
    .once('sending', () => {
      button.innerText = `awating approval...`
      button.style.opacity = "38%"
    })
    .once('transactionHash', () => {
      button.innerText = `awaiting confirmation...`
      button.style.opacity = "38%"
    })
    .on('error', () => {
      button.innerText = `something were wrong...`
      button.style.opacity = "100%"
    })
    .then((txHash) => {
      console.log(txHash);
      button.style.opacity = "100%"
      button.innerText = `Transaction successful!`
    })
}
export function FundProject (tokenId, tokenAddress, amount, Fundraising, account) {

  let button = document.getElementById("fund-button")
  Fundraising.methods
    .fundProject(tokenId, tokenAddress, `${amount}000000000000000000`)
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
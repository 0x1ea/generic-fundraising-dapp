export const addPolygonNetwork = () => {
  window.ethereum.request({
    method: 'wallet_addEthereumChain',
    params: [
      {
        chainId: "0x89",
        chainName: "Polygon Mainnet",
        rpcUrls: ["https://polygon-rpc.com/"],
        nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18
        },
        blockExplorerUrls: ["https://polygonscan.com/"]
      }
    ],
  });
}
import { useMemo } from 'react';
import { useWeb3React } from '@web3-react/core';
import { FundraisingArtifacts } from '../../config/artifacts/Fundraising';


const useFundraising = () => {

  const { active, library, chainId} = useWeb3React();
  
  const Fundraising = useMemo(
    () => {
      if (active) 
        return new library.eth.Contract(
          FundraisingArtifacts.abi,
          FundraisingArtifacts.address[chainId]
        )
    }
    , [active, chainId, library?.eth?.Contract] 
  );


  return Fundraising;
}

export { useFundraising };
import styled, { keyframes }from 'styled-components'

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const MainContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 21rem;
height: auto;
text-decoration: none;
border-radius: 24px;
animation-duration: 2s;
animation-name: ${fade};
color: var(--secondary-color);
background-color: var(--secondary-color);
margin: 2rem auto 0;
box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
            0 2px 2px hsl(0deg 0% 0% / 0.075),
            0 4px 4px hsl(0deg 0% 0% / 0.075),
            0 8px 8px hsl(0deg 0% 0% / 0.075),
            0 16px 16px hsl(0deg 0% 0% / 0.075);


`;

export const InfoCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  color: var(--font-color);
  font-size: var(--sm);
  padding: 10px 0px 0px 0px;
  margin: 0 auto;

  & h3 {
    margin: 0.5rem
  }

  & p.card-text {
    margin-left: 12px;
  }
`;

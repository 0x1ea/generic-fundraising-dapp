import styled from 'styled-components'

export const StyledInputAmount = styled.div`
  display: flex;
  align-items: baseline;
  background-color: var(--input-color);
  margin: 7px;
  border-radius: 16px;
  padding-right: 10px;

  &:hover {
    opacity: 87%;
    outline: 1px solid var(--font-color);
  }

  & p {
    opacity: 38%;
  }

  & input {
    height: 1.5rem;
    width: 100%;
    margin: 0.1rem;
    border: none;
    background-color: var(--secondary-color);
    font-size: var(--sm);
    color: var(--font-color);
    text-align: end;
    margin-left: 0.5rem;
    margin-right: 8px;
    background-color: var(--input-color);
    font-size: var(--md);
  }

  & input:active, & input:focus {
    outline: none;
  }

  & input[disabled] {
    opacity: 38%;
  }
`;

export const BalanceCointainer = styled.div`
margin-left: 8px;
display: flex;
flex-direction: row;
align-items: center;
opacity: 38%;


&:hover {
  opacity: 38%;
}

& span {
  margin-left: 0.5rem;
}

&[disabled] {
  opacity: 38%;
}

& p {
  margin-left: 4px
}

`;
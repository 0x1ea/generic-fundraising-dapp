import styled from 'styled-components';

export const SelectTokenContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const TokenButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 4px;
  background-color: ${props => (
    (props.tkn[0] === props.tkn[1])
      ? "var(--action-color);"
      : "var(--secondary-color);"
  )}
  cursor: pointer;
  border: 1px solid var(--font-color);
  width: 29%;
  border-radius: 20px;
  margin: 4px;

  & p {
    color: var(--font-color);
    font-weight: 500;
    margin: 0;
    margin-top: 4px;
  }

  & img {
    width: 30px;
    height: 30px;
    border-radius: 20px;
  }

  &[disabled] {
    opacity: 38%;
    cursor: auto;
  }

  &:focus {
    background-color: var(--action-color);
  }

  &:hover {
    cursor: pointer;
    opacity: 87%;
    background-color: var(--action-color);
  }
  `;


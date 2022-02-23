import styled from 'styled-components'

export const StyledMainButton = styled.button`
  border-radius: 24px;
  font-size: var(--md);
  font-weight: 600;
  color: var(--font-color);
  padding: 1.2rem;
  height: auto;
  width: 100%;
  margin: 10px 7px 7px 7px;
  cursor: pointer;
  border: 1px solid var(--action-color);
  background-color: var(--action-color);

  &:hover {
    opacity: 87%;
  }

  &[disabled] {
    opacity: 38%;
    cursor: auto;
  }
`;

export const MainButtonContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
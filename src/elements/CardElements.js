import styled from "styled-components"

export const CardWrapper = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center; 
  border-radius: 10px;
  box-shadow: ${props => props.theme.shadows.shadow2};
`

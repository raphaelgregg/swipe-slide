import styled from 'styled-components'

export const SwipeSlideContainer = styled.div`
  max-width: 1120px;
  width: 100%;
  background-color: grey;
  padding: 40px 0;
  `;

export const SwipeSlideContent = styled.div`
  margin: 0 40px;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    background: none;
    border: none;
    margin: 1.6rem 0 0;
  }
`;

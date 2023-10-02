import styled from 'styled-components'

// CARD_WRAPPER
export const CardWrapper = styled.div`
 margin: 0 15px;
`;

//CARD
export const CardContainer = styled.div`
  width: 320px;
  border-radius: 25px;
  background-color: #FFF;
`;

export const ImageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  position: relative;
  gap: 5px;
  padding: 25px 0;
`;
export const Overlay = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: #4070F4;
  border-radius: 25px 25px 0 25px;

  &::before, &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: -40px;
    height: 40px;
    width: 40px;
    background-color: #4070F4;
  
  }

  &::after {
    border-radius: 0 25px 0 0;
    background-color: #FFF;
  }
`;

export const CardImage = styled.div`
  position: relative;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background-color: #FFF;
  padding: 3px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid #4070F4;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 14px;
  
  h2 {
    font-size: 18px;
    font-weight: 500;
    color: #333;
  }

  p {
    font-size: 14px;
    color: #707070;
    text-align: center;
  }

  button {
    border: none;
    font-size: 16px;
    color: #FFF;
    padding: 8px 16px;
    background-color: #4070F4;
    border-radius: 6px;
    margin: 14px;
    
    transition: .3s ease;
    
    &:hover {
      background-color: #26D5F2;
    }
  }
`


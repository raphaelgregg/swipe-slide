import { useRef, useState } from 'react';
import { Card } from '../Card';
import {ButtonContainer, SwipeSlideContainer, SwipeSlideContent} from './styles'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai';

export function SwipeSlide() {
  const [data, setData] = useState([]);
  const swipe = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    // console.log(swipe.current.offsetWidth);
    swipe.current.scrollLeft -= swipe.current.offsetWidth
  }

  const handleRightClick = (e) => {
    e.preventDefault();
    // console.log(swipe.current.offsetWidth);
    swipe.current.scrollLeft += swipe.current.offsetWidth
  }

  return(
    <SwipeSlideContainer>
      <SwipeSlideContent ref={swipe}>
        <Card />
        <Card />
        <Card />
        <Card />
     
      </SwipeSlideContent>

      <ButtonContainer>
        <button onClick={handleLeftClick}>
          <AiOutlineLeft 
          size={38}
          style={{color:'#4070F4'}}
          />
        </button>
        <button onClick={handleRightClick}>
          <AiOutlineRight 
          size={38}
          style={{color:'#4070F4'}}
          />
        </button>
      </ButtonContainer>
    </SwipeSlideContainer>
  );
}
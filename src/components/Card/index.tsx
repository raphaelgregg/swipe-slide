import {
  CardWrapper, 
  CardContainer, 
  CardImage, 
  ImageContent, 
  Overlay, 
  CardContent
} from './styles'

export function Card() {
  return(
    <CardWrapper>
      <CardContainer>
        <ImageContent>
          <Overlay />

          <CardImage>
            <img src="https://github.com/raphaelgregg.png" alt="Avatar_Github" />
          </CardImage>
        </ImageContent>

        <CardContent>
          <h2>Raphael Gregg</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi voluptates fugit tempora eaque placeat quam, tempore voluptatibus architecto modi labore vero doloremque natus aspernatur voluptate, vitae, assumenda beatae aut. Assumenda.</p>

          <button>View More</button>
        </CardContent>
      </CardContainer>
    </CardWrapper>
  );
}
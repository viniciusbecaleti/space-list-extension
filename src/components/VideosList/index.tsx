import { Title } from "../Title";
import { VideoItem } from "../VideoItem";
import { Container, ListContainer } from "./styles";

export function VideosList() {
  return (
    <Container>
      <header>
        <Title>Video List</Title>
      </header>
      <ListContainer>
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
      </ListContainer>
    </Container>
  )
}
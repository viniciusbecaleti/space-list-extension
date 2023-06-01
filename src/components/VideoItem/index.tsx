import { Button, Container, Details, Thumb } from "./styles";
import { BsFillPlayFill } from 'react-icons/bs'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FaTrashAlt } from 'react-icons/fa'
import { RiAddCircleLine } from 'react-icons/ri'

interface VideoItemProps {
  addMode?: boolean
}

export function VideoItem({ addMode = false }: VideoItemProps ) {
  return (
    <Container>
      <Thumb imgUrl="https://i3.ytimg.com/vi/_hsxUdS0Y0I/maxresdefault.jpg" />
      <Details>
        <strong title="F1 23 - CONFERINDO A PILOTAGEM NA CHUVA PESADA! (4K - 60FPS - PT-BR)">F1 23 - CONFERINDO A PILOTAGEM NA CHUVA PESADA! (4K - 60FPS - PT-BR)</strong>
        <div>
          <div>
            {addMode ? (
              <Button type="submit">
                <RiAddCircleLine />
                Add to list
              </Button>
            ) : (
              <>
                <Button type="submit">
                  <BsFillPlayFill />
                  Play
                </Button>
                <FaTrashAlt size={12} />
              </>
            )}
          </div>
          <span>
            <AiOutlineClockCircle />
            15:46
          </span>
        </div>
      </Details>
    </Container>
  )
}
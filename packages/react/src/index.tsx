import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  borderRadius: '$sm',
  height: '$4',
})

export function App() {
  return <Button>testing</Button>
}

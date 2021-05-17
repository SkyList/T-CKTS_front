import { MainLayout } from '../Layout/MainLayout'
import { withLayout } from '../Layout/withLayout'
import { Container } from '../styles/Pages/Home'

function Home() {
  return (
    <Container>
      <h1>BASE PROJECT</h1>
    </Container>
  )
}

export default withLayout(MainLayout)(Home)

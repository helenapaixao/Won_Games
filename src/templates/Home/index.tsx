import { Container } from 'components/Container'
import Heading from 'components/Heading'
import Footer from 'components/Footer'
import Menu from 'components/Menu'

const Home = () => (
  <section>
    <Container>
      <Menu />
    </Container>
    <Container>
      <Heading lineLeft lineColor="secondary" color="black">
        News
      </Heading>
    </Container>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Most Popular
      </Heading>
    </Container>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Upcomming
      </Heading>
    </Container>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Free Games
      </Heading>
    </Container>
    <Container>
      <Footer />
    </Container>
  </section>
)

export default Home

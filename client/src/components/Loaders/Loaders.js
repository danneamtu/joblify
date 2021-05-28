import { JobLoaderContainer, Star, Header, Footer, Container, Logo, Job, Tag, Title, SubTitle } from './styled'

export const TheJobLoader = () => {
  return (
    <JobLoaderContainer>
      <Header>
        <Logo />
        <Container>
          <Title />
          <SubTitle />
        </Container>
        <Star />
      </Header>
      <Footer>
        <Tag width={80} />
        <Tag width={60} />
      </Footer>
    </JobLoaderContainer>
  )
}

export const JobLoader = ({ repeat }) => {
  return Array.apply(null, Array(repeat)).map((i) => <TheJobLoader />)
}

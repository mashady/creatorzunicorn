import {
  Container,
  Heading,
  Box,
  SimpleGrid,
  Image,
  LinkOverlay
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'

const Repos = () => (
  <Layout title="Repos">
    <Container>
      <Heading mb="2" as="h3">
        repos
      </Heading>
      <SimpleGrid columns={[1, 2]} gap={12}>
        <Box cursor="pointer" w="100%" position="relative" className="postBox">
          <LinkOverlay href={`/repos/eemily`}>
            <Image
              src="/images/eemily-project/eemily-mock.png"
              alt="none"
              className="grid-item-thumbnail"
              placeholder="blur"
              loading="lazy"
              mb=".5rem"
            />
            eemily
            <ArrowForwardIcon
              className="arrowIcon"
              position="absolute"
              right={0}
              marginTop="0.3rem"
              marginRight="0.3rem"
            />
          </LinkOverlay>
        </Box>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Repos

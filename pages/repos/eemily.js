import {
  Container,
  Badge,
  Link,
  Heading,
  Image,
  Box,
  Text
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'

const Work = () => (
  <Layout title="eemily">
    <Container>
      <Box>
        <Image
          src="/images/eemily-project/eemily-mock.png"
          alt="a"
          loading="lazy"
          objectFit="cover"
          borderRadius="lg"
          mt="15"
        />
      </Box>
      <Heading mt="5" as="h5">
        Eemily
      </Heading>
      <Paragraph mt="10">
        One page template and business website for servers and internet
        solutions.
      </Paragraph>
      <Text mt="5">
        <Badge mr="2" fontSize="0.8em" colorScheme="green">
          technologies
        </Badge>
        html5, css3, javascript and bootstrap
      </Text>
      <Text>
        <Badge mr="2" fontSize="0.8em" colorScheme="orange">
          links
        </Badge>
        <Link
          textDecoration="underline"
          color="red.400"
          href="https://github.com/mashady/eemily"
          fontStyle="italic"
        >
          https://github.com/mashady/eemily
        </Link>
      </Text>
      <Box>
        <Image
          src="/images/eemily-project/emily-top-part.jpg"
          alt="projct screen 1"
          loading="lazy"
          objectFit="cover"
          borderRadius="lg"
          mt="15"
        />
      </Box>
      <Box>
        <Image
          src="/images/eemily-project/emily-middle-part.jpg"
          alt="projct screen 2"
          loading="lazy"
          objectFit="cover"
          borderRadius="lg"
          mt="15"
        />
      </Box>
    </Container>
  </Layout>
)

export default Work

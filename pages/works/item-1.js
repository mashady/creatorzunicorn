import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center,
  Image,
  Box,
  Text,
  LinkOverlay
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'

import { ExternalLinkIcon } from '@chakra-ui/icons'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="item-1">
    <Container>
      <Box>
        <Image
          src="/angel_pic/introBG.JPGg"
          alt="intro background"
          loading="lazy"
          objectFit="cover"
          borderRadius="lg"
          mt="15"
        />
      </Box>
      <Heading mt="5" as="h5">
        title
      </Heading>
      <Paragraph mt="10">
        mashady is a full-stack web developer, but not just a developer, an
        artist who draw a painting, spaceman who swin into the hall. that is
        what the code meant to me. Fall in love with technologies and smart
        things ❤
      </Paragraph>
      <Text mt="5">
        <Badge mr="2" fontSize="0.8em" colorScheme="green">
          technologies
        </Badge>
        reactjs, html5
      </Text>
      <Text>
        <Badge mr="2" fontSize="0.8em" colorScheme="orange">
          links
        </Badge>
        <Link
          textDecoration="underline"
          color="red.400"
          href="https://github.com/mashady/creatorzunicorn"
          fontStyle="italic"
        >
          https://github.com/mashady/creatorzunicorn
        </Link>
      </Text>
      <Box>
        <Image
          src="/angel_pic/introBG.JPGg"
          alt="projct screen 1"
          loading="lazy"
          objectFit="cover"
          borderRadius="lg"
          mt="15"
        />
      </Box>
      <Box>
        <Image
          src="/angel_pic/introBG.JPGg"
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

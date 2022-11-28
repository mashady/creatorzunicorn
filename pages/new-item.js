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
    Image
  } from '@chakra-ui/react'
  import Layout from '../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import P from '../components/paragraph'

  const Work = () => (
    <Layout padding="1.3rem" title="item-1">
        <Heading  ml="3rem" mt="2rem" mb="1rem" as="h4">
            Add New Item
        </Heading>
    </Layout>
  )

  export default Work
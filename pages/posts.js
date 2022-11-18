import {
    Link,
    Container,
    Heading,
    Box,
    SimpleGrid,
    Button,
    List,
    ListItem,
    useColorModeValue,
    chakra,
    Image,
    LinkOverlay
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Posts = () => (
    <Layout title="Posts">
        <Container>
            <Heading as="h3">
                Posts
            </Heading>
            <SimpleGrid columns={[1, 2]} gap={12}>
                <Box cursor="pointer" w="100%" position="relative" className='postBox'>
                            <LinkOverlay href={`/works/`}>
                                <Image 
                                    src="/angel_pic/fingers.jpg"
                                    alt="none"
                                    className="grid-item-thumbnail"
                                    placeholder="blur"
                                    loading="lazy"
                                    mb=".5rem"
                                />
                                title of the project

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

export default Posts
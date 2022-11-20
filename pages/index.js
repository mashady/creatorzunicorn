// this our projectzhomepage 
import NextLink from 'next/link'
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
import { ChevronRightIcon } from '@chakra-ui/icons'
import { ArrowForwardIcon } from '@chakra-ui/icons'

import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import {GridItem} from '../components/grid-item'
import thumbWork from '../public/angel_pic/fingers.jpg'

const Home = () =>(
    <Layout>
        <Container>
            <Box>
                <Image 
                    src="/angel_pic/introBG.JPGg"
                    alt="intro background"
                    loading="lazy"
                    objectFit='cover'
                    borderRadius='lg'
                    mt='10'
                />
            </Box>
            <Box
                borderRadius="lg"
                mb={6}
                mt={6}
                p={3}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                css={{ backdropFilter: 'blur(10px)' }}
            >
                work so hard that people think aliens did it.
            </Box>
            <Box display={{ md: 'flex' }} mb={6} mt={6}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        🔥 Mashady
                    </Heading>
                    <p>Digital Creator </p>
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading  as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    mashady is a full-stack web developer, but not just a developer, an artist who draw a painting, spaceman who swin into the hall. that is what the code meant to me. Fall in love with technologies and smart things ❤             
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works" passHref scroll={false}>
                        <Button variant="sction-buton" color="var(--chakra-colors-orange-200)"  rightIcon={<ArrowForwardIcon />} colorScheme="orange">
                        My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    About
                </Heading>
                <Paragraph>
                    I graduated from school of the law since 2021, iam non computer scince graduated but it does not need a faculty to fall in love with computers.
                    its more than faculty time relationship. my first language is arabic where i porn in ksa, my english is the second then french. 
                </Paragraph>
            </Section>
            <Section title="feature-work" delay={0.3}>
                <Heading mb=".2rem" as="h3" variant="sction-heading">
                    Feature work
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
                                fit='cover'
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
            </Section>
            <Section delay={0.4}>
                <Heading>
                    feature post
                </Heading>    
                <SimpleGrid column={1}>
                    <Box cursor="pointer">
                        <Image
                            src="/angel_pic/post-bg.jpg"
                            alt="postCover"
                            className="postCover"
                            placeholder="blur"
                            loading="lazy"
                            mt="1rem"
                            mb="0.3rem"
                            borderRadius="12px"
                        />
                        <p className="boxTitle">title of the post</p>
                    </Box>
                </SimpleGrid>
            </Section> 
        </Container>
    </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'


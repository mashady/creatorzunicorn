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
    chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Layout from '../components/layouts/article'
//import Section from '../components/section'
import Image from 'next/image'
const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
  })

const Home = () =>(
    <Layout>
        <Container>
            <Box>
                hi abu
            </Box>
        </Container>
    </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'


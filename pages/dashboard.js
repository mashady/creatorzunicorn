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
    LinkOverlay,
    Tabs, TabList, TabPanels, Tab, TabPanel, Icon
} from '@chakra-ui/react'
import { ArrowForwardIcon, AddIcon, EditIcon } from '@chakra-ui/icons'
import { WorkGridItem } from '../components/grid-item'
import InitialFocus from '../components/modal'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Dashboard = () => (
    <Layout padding="1.3rem" title="Dashboard">
            <Heading ml="3rem" mt="2rem" mb="1rem">
                Dashboard
            </Heading>
            

            <Tabs isFitted isLazy ml="3rem">
                <TabList>
                    <Tab  _selected={{ color: 'var(--chakra-colors-orange-200)', borderColor: 'var(--chakra-colors-orange-200)' }}>Posts</Tab>
                    <Tab  _selected={{ color: 'var(--chakra-colors-orange-200)', borderColor: 'var(--chakra-colors-orange-200)' }}>Work Items</Tab>
                    <Tab  _selected={{ color: 'var(--chakra-colors-orange-200)', borderColor: 'var(--chakra-colors-orange-200)' }}>General Settings</Tab>
                </TabList>
                
                <TabPanels>
                    <TabPanel padding="0">
                    <InitialFocus></InitialFocus>    
                        <SimpleGrid columns={[1, 2, 3]} gap={12}>
                            <Box cursor="pointer" w="100%" position="relative" className='postBox'>
                                <LinkOverlay href={`/works/`}>
                                        <Image 
                                            src="/angel_pic/fingers.jpg"
                                            alt="none"
                                            className="grid-item-thumbnail"
                                            placeholder="blur"
                                            loading="lazy"
                                            mb=".5rem"
                                            fit="cover"
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
                                        fit="cover"
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
                                        fit="cover"
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

                    </TabPanel>
                    <TabPanel padding="0">
                    <Button 
            leftIcon={<AddIcon />}
            mb="1rem" 
            mt="1rem" 
            padding="1rem 1.5rem"
        >   
                    <LinkOverlay href={`/new-item/`}>New Item</LinkOverlay>

        </Button>  
                    <SimpleGrid columns={[1, 2, 3]} gap={12}>
                            <Box cursor="pointer" w="100%" position="relative" className='postBox'>
                                <LinkOverlay href={`/works/`}>
                                    <Image 
                                        src="/angel_pic/fingers.jpg"
                                        alt="none"
                                        className="grid-item-thumbnail"
                                        placeholder="blur"
                                        loading="lazy"
                                        mb=".5rem"
                                        fit="cover"
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
                                        fit="cover"
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
                                        fit="cover"
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
                    </TabPanel>
                    <TabPanel padding="0">
                        settings here
                    </TabPanel>
                </TabPanels>
            </Tabs>
    </Layout>
)   

export default Dashboard 
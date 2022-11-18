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
    Tabs, TabList, TabPanels, Tab, TabPanel
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Dashboard = () => (
    <Layout title="Dashboard">
        <Container>
            <Heading>
                Dashboard
            </Heading>

            

            <Tabs>
                <TabList>
                    <Tab>Posts</Tab>
                    <Tab>Work Items</Tab>
                    <Tab>General Settings</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <p>Post One</p>
                        <p>Post Two</p>
                        <p>Post Three</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Item One</p>
                        <p>Item Two</p>
                        <p>Item Three</p>
                    </TabPanel>
                    <TabPanel>
                        settings here
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    </Layout>
)   

export default Dashboard 
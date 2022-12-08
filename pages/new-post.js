import { Heading, FormLabel, Input, Textarea, Button } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { useState } from 'react'

function Work() {
  const [firstName, setFirstName] = useState('')
  const handleInputSubmit = e => {
    setFirstName(e.target.value)
    console.log('abusamir submit ' + firstName)
    e.preventDefault()
  }
  return (
    <>
      <Layout padding="1.3rem" title="item-1">
        <Heading ml="3rem" mt="2rem" mb="1rem" as="h4">
          Add New Post
        </Heading>
        <form onSubmit={handleInputSubmit}>
          <FormLabel>title</FormLabel>
          <Input
            onChange={e => this.setState({ firstName: e.target.value })}
            type="title"
          />
          <Textarea
            placeholder="Here is a sample placeholder"
            size="md"
            mt="1rem"
          />
          <Button type="submit" value="Submit" mt="1rem">
            Submit
          </Button>
        </form>
      </Layout>
    </>
  )
}

export default Work

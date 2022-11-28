import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Form,
  LinkOverlay,
  Image,
  GridItem,
  Grid,
  SimpleGrid,
  Textarea
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import * as React from 'react'
import { ArrowForwardIcon, AddIcon, EditIcon } from '@chakra-ui/icons'
import { useState } from 'react';

function InitialFocus() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button 
            leftIcon={<AddIcon />}
            mb="1rem" 
            mt="1rem" 
            padding="1rem 1.5rem"
            onClick={onOpen}
        >   
            New Post
        </Button>
        
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          size="xxl"
          
        >
          <ModalOverlay />
          <ModalContent width="75%" height="80%" backgroundColor="#202023">
            <SimpleGrid h="100%" columns={[1, 2]} gap={6}>
              
              <GridItem>
              <form>
              <ModalHeader>Write your post</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <Input placeholder='Post Title' focusBorderColor='orange.200' size="lg" variant='flushed' ref={initialRef}  />
                </FormControl>
    
                <FormControl mt={7}>
                  <Textarea h="10rem" placeholder="Post Letter" resize="none" focusBorderColor='orange.200' size="lg" variant='flushed' />
                </FormControl>
                
              </ModalBody>
              <ModalFooter>
                
                <Button backgroundColor=""  mr={3}>
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </form>
              </GridItem>
              <GridItem h="100%">
              <Image 
              src="/angel_pic/fingers.jpg"
              alt="none"
                                        className=""
                                        placeholder="blur"
                                        loading="lazy"
                                        mb=".5rem"
                                        fit="cover"
                                        h="100%"
                                        borderRadius="0.3rem"
                                    />
              </GridItem>
            </SimpleGrid>
          
            
          </ModalContent>
        </Modal>
      </>
    )
  }

  
  export default InitialFocus
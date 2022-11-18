import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%"  textAlign="center">
    <LinkBox 
      cursor="pointer"
      h={240}
      >
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        
      </LinkOverlay>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/works/${id}`} passHref scroll={false}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          // we will edit all the styles here.
          className="grid-item-thumbnail"
          placeholder="blur"
          
        />
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={
      `
      .grid-item-thumbnail {
        border-radius: 12px;
        height:240px!important;
        -webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
      }
      .grid-item-thumbnail .arrowIcon{
        -webkit-transition: .3s ease-in-out;
        transition: .3s ease-in-out;
      }
      .grid-item-thumbnail:hover .arrowIcon{
        color:orange;
      }
      .my-overlay{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: .5s ease;
        background-color: none;
        border-radius: 12px;
        text-align:center;
        display: flex;
        justify-content: center;
        align-items: center;
        -webkit-transition: .3s ease-in-out;
        transition: .3s ease-in-out;

      }
      .postBox:hover{
        //opacity:0.5;
        //width:120%!important;
      }
      .postBox:hover .grid-item-thumbnail{
        opacity:0.5;
      }
      .postBox:hover .arrowIcon{
       
        
      }
      .postBox:hover .my-overlay{
        opacity:1;
        -webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
      }
      
      .postCover{

      }
      .postCover:hover{
        opacity:0.5;
      }
      .sidenav{
        color:red;
        height: 100%; /* 100% Full-height */
        z-index: 1; /* Stay on top */
        top: 0; /* Stay at the top */
        left: 0;
        background-color: #111!important; /* Black*/
        overflow-x: hidden; /* Disable horizontal scroll */
        padding-top: 60px; /* Place content 60px from the top */
        transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
      }
    `
      }
  />
)

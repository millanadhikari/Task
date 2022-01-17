import React from 'react'
import { Box, Flex, Image, Spacer, Text, IconButton, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react'
import { ArrowLeftIcon, SettingsIcon, Search2Icon, DragHandleIcon } from '@chakra-ui/icons'
import { theme } from '../theme'
import SidebarMenu from './Menu/SidebarMenu'
import SpaceAccordion from './Sidebar_Accordion/SpaceAccordion'


const Sidebar = () => {
    return (
        <Box w="300px" boxShadow='xs' h="100vh" borderColor="red">
            <Flex p={5} alignItems="center">
                <Flex alignItems="center">
                    <Image src="https://app-cdn.clickup.com/assets/images/brand/clickup-symbol_color.svg" w={5} h={5} mr="2" />
                    <Text fontWeight="bold" fontSize="1.3rem">CrmUp</Text>
                </Flex>
                <Spacer />
                <Flex alignItems="center">

                    <IconButton
                        backgroundColor="white" aria-label='Search database' textAlign="center"
                        icon={<SettingsIcon w={4} h={4} cursor="pointer" color="#7b68ee" />} />
                    <Spacer mr="1" />
                    <IconButton
                        backgroundColor="white" aria-label='Search database' textAlign="center"
                        icon={<ArrowLeftIcon w={3} h={3} cursor="pointer" color="#7b68ee" />} />
                </Flex>
            </Flex>
            <Flex px={5}>
                <InputGroup w="80%" size="sm" >
                    <InputLeftAddon children={<Search2Icon />} />
                    <Input placeholder='Search' variant="filled" focusBorderColor='gray.100' />
                </InputGroup>
                <Spacer />
                <IconButton
                    backgroundColor="gray.100" aria-label='Search database' textAlign="center" size="sm" focusBorderColor='gray.100'
                    icon={<DragHandleIcon w={3} h={3} cursor="pointer" color="#7b68ee" size="sm" />} />
            </Flex>
            <SidebarMenu />
            <Box mt="30rem">
            <SpaceAccordion/>

            </Box>
        </Box>
    )
}

export default Sidebar;
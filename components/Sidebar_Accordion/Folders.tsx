import { AddIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Collapse, Flex, Spacer, Text, Tooltip } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiFillFolder } from 'react-icons/ai'
import { FiMoreHorizontal } from 'react-icons/fi'
import File from './File'

import { Folder } from './spaceMode'

interface Props {
    folder: Folder,
    showMenu: boolean,
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const Folders = ({ folder, showMenu, setShowMenu }: Props) => {
    const [showFiles, setShowFiles] = useState<boolean>(false)
    return (
        <Box>
        <Box display='flex' alignItems="center" color="gray.500" pl={10} pr={4} cursor="pointer" fontSize="sm"
            _hover={{ backgroundColor: 'gray.100' }} py={1}
            onClick={()=>setShowFiles(!showFiles)}>
            <ChevronRightIcon mr={2} />
            <AiFillFolder />
            <Text ml={1}>{folder._name}</Text>
            <Spacer />
            {showMenu &&
                <Flex onMouseEnter={() => setShowMenu(true)}>
                    <Tooltip label={'Folder Settings'} placement='top'>
                        <span> <FiMoreHorizontal />
                        </span>
                    </Tooltip>
                    <Tooltip label='Create List or Doc' placement='top'>
                        <AddIcon ml={3} fontSize='xs' />
                    </Tooltip>
                </Flex>}
                </Box>
                <Collapse in={showFiles} animateOpacity>
                    <File/>

                </Collapse>

        </Box>
    )
}

export default Folders

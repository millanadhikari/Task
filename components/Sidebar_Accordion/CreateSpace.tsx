import {
  AtSignIcon,
  MoonIcon,
  SunIcon,
  TriangleUpIcon,
  UpDownIcon,
  ViewIcon,
  ViewOffIcon,
  WarningTwoIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Text,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Heading,
  Image,
  Input,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  createSpace: boolean;
  setCreateSpace: React.Dispatch<React.SetStateAction<boolean>>;
  spaceInput: string;
  setSpaceInput: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: () => void;
  spaceColor: string;
  setSpaceColor: React.Dispatch<React.SetStateAction<string>>;
  icon:  React.ReactElement | undefined
  setIcon: React.Dispatch<React.SetStateAction<React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined>>
}

const colorOptions = [
  { id: 7, color: "gray" },
  { id: 1, color: "red" },
  { id: 2, color: "blue" },
  { id: 3, color: "green" },
  { id: 4, color: "orange" },
  { id: 5, color: "black" },
  { id: 6, color: "brown" },
];

const iconOptions = [
  { id: 7, icon: <SunIcon /> },
  { id: 1, icon: <WarningTwoIcon /> },
  { id: 2, icon: <MoonIcon /> },
  { id: 3, icon: <UpDownIcon /> },
  { id: 4, icon: <TriangleUpIcon /> },
  { id: 5, icon: <ViewOffIcon /> },
  { id: 6, icon: <AtSignIcon /> },
];

const CreateSpace = ({
  createSpace,
  setCreateSpace,
  spaceInput,
  setSpaceInput,
  handleAdd,
  spaceColor,
  setSpaceColor,
  icon,
  setIcon,
}: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        isOpen={createSpace}
        onClose={() => !createSpace}
        size="2xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton
            onClick={() => setCreateSpace(!createSpace)}
            _focus={{ border: "none" }}
          />

          <ModalBody py={6} mt={20}>
            <Image src="/space.svg" h={24} mx="auto" />
            <Heading
              textAlign="center"
              fontSize="2xl"
              fontWeight="semibold"
              my={6}
            >
              Create new Space
            </Heading>
          </ModalBody>
          <Box backgroundColor="gray.100" w="100%" px={46} py={4}>
            <Text fontSize="sm" fontWeight="semibold" ml={4}>
              Space name
            </Text>
            <Spacer my={2} />
            <Input
              value={spaceInput}
              onChange={(e) => setSpaceInput(e.target.value)}
              placeholder="Enter Space name"
              s
              border="none"
              rounded="none"
              _focus={{ border: "none" }}
            />
            <hr></hr>
          </Box>
          <Flex mb={20} mt={4} px={16} flexDirection="column">
            <Flex alignItems="center">
              <Text mr={3}>Theme Color :</Text>
              {colorOptions.map((color) => (
                <Box
                  mx={2}
                  w={4}
                  h={4}
                  p={2}
                  backgroundColor={color.color}
                  cursor="pointer"
                  onClick={() => setSpaceColor(color.color)}
                  boxShadow={`${color.color === spaceColor && "outline"}`}
                ></Box>
              ))}
            </Flex>
            <Spacer my={2} />
            <Flex alignItems="center">
              <Text mr={4}>Avataar Icon : </Text>
              {iconOptions.map((icon) => (
                <Box px={2} onClick={()=> setIcon(icon.icon)}>
                {icon.icon}
                </Box>
              ))}
            </Flex>
          </Flex>

          <ModalFooter>
            <Button
              backgroundColor="purple.500"
              mr={3}
              color="white"
              onClick={() => (
                handleAdd(), setCreateSpace(!createSpace), setSpaceInput("")
              )}
              disabled={!spaceInput}
              _hover={{ backgroundColor: "purple.400" }}
              _focus={{ border: "none" }}
              isLoading={isLoading}
            >
              Save
            </Button>
            <Button onClick={() => setCreateSpace(!createSpace)}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateSpace;

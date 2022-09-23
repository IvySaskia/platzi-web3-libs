import { useColorModeValue } from "@chakra-ui/react";
import CustomLink from "../components/CustomLink";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Image,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import WalletData from '../layout/WalletData';
import platziLogo from '../static/platzi.svg';

const Links = [
  {
    name: "Home",
    to: "/",
  }
];
 
const NavLink = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
    mx="auto"
    maxW={"7xl"}
    width="100%"
    bg={useColorModeValue("white", "gray.800")}
    px={4}
  >
    <Flex
      bg={useColorModeValue("white", "gray.800")}
      color={useColorModeValue("gray.600", "white")}
      minH={"60px"}
      py={{ base: 2 }}
      px={{ base: 4 }}
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.900")}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <IconButton
        size={"md"}
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        aria-label={"Open Menu"}
        display={{ md: "none" }}
        onClick={isOpen ? onClose : onOpen}
      />
      <HStack spacing={8} alignItems={"center"}>
        <Flex alignItems="center">
          <Image src={platziLogo} width="80px" />
          <Heading size="md" color="green" mt={0.2} ml={1}>
            Challenge
          </Heading>
        </Flex>
        <HStack
          as={"nav"}
          spacing={4}
          display={{ base: "none", md: "flex" }}
        >
          {Links.map(({ name, to }) => (
            <CustomLink key={name} to={to}>
              {name}
            </CustomLink>
          ))}
        </HStack>
      </HStack>
      <WalletData />
    </Flex>

    {isOpen ? (
      <Box pb={4} display={{ md: "none" }}>
        <Stack as={"nav"} spacing={4}>
          {Links.map(({ name, to }) => (
            <CustomLink key={name} to={to}>
              {name}
            </CustomLink>
          ))}
        </Stack>
      </Box>
    ) : null}
  </Box>
  );
};

export default NavLink;

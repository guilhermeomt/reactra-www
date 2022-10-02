import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import Image from "next/image";
import { GithubLogo } from "phosphor-react";
import { ReactNode } from "react";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithLogoLeft() {
  return (
    <Box
      mt={8}
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Image
          src="/images/reactra-text.svg"
          width={114}
          height={68}
          alt="Reactra"
        />
        <Stack spacing={"2"}>
          <Text textAlign={"center"}>Released under the MIT License</Text>
          <Text textAlign={"center"}>
            Built with{" "}
            <Link
              textUnderlineOffset={2}
              sx={{
                textDecoration: "underline",
              }}
              href="https://chakra-ui.com/"
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              Chakra UI
            </Link>
          </Text>
          <Text textAlign={"center"}>
            Illustrations from{" "}
            <Link
              textUnderlineOffset={2}
              sx={{
                textDecoration: "underline",
              }}
              href="https://undraw.co/"
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              Undraw
            </Link>
          </Text>
        </Stack>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"GitHub"} href="#">
            <a
              href="https://github.com/reactra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubLogo />
            </a>
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}

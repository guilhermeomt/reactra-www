import {
  Box,
  Button,
  Text,
  Image,
  Container,
  Flex,
  Heading,
  Stack,
} from "@chakra-ui/react";

export default function CallToActionWithImage() {
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.200",
                zIndex: -1,
              }}
            >
              Write clean code,
            </Text>
            <br />
            <Text as={"span"} color={"brand.200"}>
              and be successful!
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            <Text
              fontWeight={"black"}
              display={"inline-block"}
              color="accent.100"
            >
              React
              <Text
                fontWeight={"black"}
                display={"inline-block"}
                color="brand.200 "
              >
                ra
              </Text>
            </Text>{" "}
            is an opinionated open-source UI framework that helps you build
            React apps with speed and using the best practices. It's a great
            choice for React developers who want to build performant and
            accessible web apps.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              variant={"solid"}
              colorScheme={"blue"}
            >
              Get started
            </Button>
            <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6}>
              How It Works
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"xl"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={"/images/programmer.svg"}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}

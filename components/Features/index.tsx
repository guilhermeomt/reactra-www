import { ReactElement } from "react";
import Image from "next/image";
import { Box, SimpleGrid, Text, Stack, Flex, Icon } from "@chakra-ui/react";
import { Brain, CheckCircle, Smiley } from "phosphor-react";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
        mx={"32px"}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
        <Feature
          icon={<Brain size={24} color="#b34c66" />}
          title={"Object-oriented and functional approach"}
          text={
            "An object-oriented and functional approach to building UI makes it easy to reuse components and build complex UIs."
          }
        />
        <Feature
          icon={<CheckCircle size={24} color="#7c9e1f" />}
          title={"Best practices"}
          text={
            "The main goal of Reactra is to allow developers to write clean code, using principles like SOLID, DRY, and KISS."
          }
        />
        <Feature
          icon={<Smiley size={24} color="#c98917" />}
          title={"Easy to use"}
          text={
            "Reactra is opinionated and comes with a set of features like a CLI for project scaffold."
          }
        />
        <Feature
          icon={
            <Image
              src="images/typescript.svg"
              width={24}
              height={24}
              alt="TypeScript"
            />
          }
          title={"TypeScript Support"}
          text={"Reactra comes with TypeScript support out of the box."}
        />
      </SimpleGrid>
    </Box>
  );
}

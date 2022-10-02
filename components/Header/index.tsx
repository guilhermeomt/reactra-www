import { Box, Button, Heading, HStack, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import {
  DiscordLogo,
  GithubLogo,
  MagnifyingGlass,
  Moon,
  Sun,
} from "phosphor-react";

function Header() {
  const { colorMode, setColorMode } = useColorMode();
  return (
    <Box
      as="header"
      display={"flex"}
      alignItems="center"
      justifyContent="space-between"
    >
      <div className="brand">
        <Link href="/">
          <a href="#">
            <Image
              src="/images/reactra.svg"
              width={320}
              height={80}
              alt="Reactra"
            />
          </a>
        </Link>
      </div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <HStack>
          <Button disabled>
            <Link href="/guide">Guide</Link>
          </Button>
          <Button disabled>
            <Link href="/docs">Docs</Link>
          </Button>
          <Button>
            <a
              href="https://github.com/reactra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubLogo size={24} />
            </a>
          </Button>
          <Button>
            <a
              href="https://discord.gg/yRCcQmC45h"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DiscordLogo size={24} />
            </a>
          </Button>
          <Button disabled>
            <a href="#">
              <MagnifyingGlass size={24} />
            </a>
          </Button>
          {colorMode === "light" ? (
            <Button onClick={() => setColorMode("dark")}>
              <Moon size={24} />
            </Button>
          ) : (
            <Button onClick={() => setColorMode("light")}>
              <Sun size={24} />
            </Button>
          )}
        </HStack>
      </Box>
    </Box>
  );
}

export { Header };

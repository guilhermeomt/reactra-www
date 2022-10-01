import { Box, Heading } from "@chakra-ui/react";
import Footer from "../Footer";
import { Header } from "../Header";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <Box px={32} py={8}>
      <Header />
      <main>{children}</main>
      <Footer />
    </Box>
  );
}

export { Layout };

import { Box, Heading, useColorModeValue, Flex } from "@chakra-ui/react";
import React, { useState } from "react";

interface EmbedProps {
  src: string;
  title: string;
}

const ExcelEmbedTemplate: React.FC<EmbedProps> = ({ src, title }) => {
  const [isFullScreen] = useState(false);

  const topBarColor = useColorModeValue("#202123", "#2b2b2b"); // Set the color for both light and dark modes

  return (
    <Box mt={4} position="relative">
      <Flex direction="column">
        <Flex
          align="center"
          justify="space-between"
          bg={topBarColor}
          color="white"
          p={2}
          borderTopRadius="md"
          position="sticky"
          top="0"
          zIndex="sticky"
        >
          <Heading as="h2" size="md">
            {title}
          </Heading>
        </Flex>
        <Box
          height={isFullScreen ? "calc(100vh - 38px)" : "450px"}
          overflowY="scroll"
          overflowX="hidden"
          borderBottomRadius="md"
        >
          <iframe
            title={title}
            width="100%"
            height="100%"
            src={src}
            allowFullScreen={true}
            style={{ border: "none" }}
          ></iframe>
        </Box>
      </Flex>
    </Box>
  );
};

export default ExcelEmbedTemplate;

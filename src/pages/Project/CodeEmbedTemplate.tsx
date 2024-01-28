import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import darcula from 'react-syntax-highlighter/dist/esm/styles/prism/darcula';
import { FaExpand, FaCompress } from 'react-icons/fa';

interface CodeEmbedProps {
  title: string;
  code: string;
}

const CodeEmbedTemplate: React.FC<CodeEmbedProps> = ({ title, code }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const customStyle = {
    fontSize: '.8rem'
  };

  return (
    <Box mt={4} mx="auto" position="relative">
      <Flex direction="column">
        <Flex
          align="center"
          justify="space-between"
          bg="#2b2b2b"
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
          <Button
            onClick={toggleFullScreen}
            colorScheme="blue"
            size="xs"
            leftIcon={isFullScreen ? <FaCompress /> : <FaExpand />}
            aria-label={isFullScreen ? "Collapse" : "Expand"}
          >
            {isFullScreen ? "Collapse" : "Expand"}
          </Button>
        </Flex>
        <Box
          height={isFullScreen ? "calc(100vh - 38px)" : "450px"}
          overflowY="scroll"
          overflowX="hidden"
          borderBottomRadius="md"
        >
          <SyntaxHighlighter language="python" style={darcula} className="custom-syntax-highlighter" customStyle={customStyle}>
            {code}
          </SyntaxHighlighter>
        </Box>
      </Flex>
    </Box>
  );
};

export default CodeEmbedTemplate;

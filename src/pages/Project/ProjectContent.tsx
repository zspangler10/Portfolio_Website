import { useEffect, useState } from "react";
import {
    Box,
    Container,
    Heading,
    Stack,
    Text,
    Image,
    useColorModeValue,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink
} from "@chakra-ui/react";

import { ProjectT } from '../../data/types';
import MarkdownRender from "./MarkdownRender";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Blockquote from "./Blockquote";
import PowerBIEmbedTemplate from './PowerBIEmbedTemplate';
import ExcelEmbedTemplate from './ExcelEmbedTemplate';
import CodeEmbedTemplate from './CodeEmbedTemplate';

interface ProjectContentProps {
    projectData: ProjectT;
}

const ProjectContent = (props: ProjectContentProps) => {
    const projectData = props.projectData;
    const [markdown, setMarkdown] = useState<string>('');

    useEffect(() => {
        import(`../../data/projectWriteups/${projectData['id']}.md`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setMarkdown(res))
                    .catch(err => console.log(err));
            })
            .catch(err => {});
    }, [projectData]);

    return (
        <>
            <Box
                h={'275px'}
                w={'100vw'}
                bg={'gray.100'}
                mt={-6}
                mb={6}
                pos={'relative'}>
                <Image
                        src={projectData['imageSrc']}
                        height={'275px'}
                        width={'100%'}
                        fit={'cover'}
                        backgroundPosition={'30px top'}
                        style={{filter: 'blur(2px)'}}
                />
            </Box>
            <Container pt={0} minH={'100vh'} maxWidth={'800px'}>
                <Stack>
                    <Breadcrumb
                        spacing='8px'
                        mb={8}
                        separator={<ChevronRightIcon color='gray.500' />}
                    >
                        <BreadcrumbItem>
                            <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink href='#/projects'>Projects</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href={`#/projects/${projectData['id']}`}>
                                {projectData['name']}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>

                    <Text
                        color={'blue.200'}
                        textTransform={'uppercase'}
                        fontWeight={800}
                        fontSize={'sm'}
                        letterSpacing={1.1}
                    >
                        {projectData['type']}
                    </Text>
                    <Heading
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={32}
                        fontFamily={'body'}
                        fontWeight={800}
                    >
                        {projectData['name']}
                    </Heading>
                    <Box mt={1}>
                        <Blockquote mt={1}>
                            {projectData['description']}
                        </Blockquote>
                    </Box>
                    <Box mt={1}>
                        <PowerBIEmbedTemplate
                            title={projectData['powerbititle']}
                            src={projectData['powerbisrc']}
                        />
                    </Box>
                    <Box mt={1}>
                        <ExcelEmbedTemplate
                            title={projectData['exceltitle']}
                            src={projectData['excelsrc']}
                        />
                    </Box>
                    <Box mt={1}>
                        <CodeEmbedTemplate
                            title={projectData['codetitle']}
                            code={projectData['code']}
                        />
                    </Box>
                    <Box mt={1}>
                        <MarkdownRender markdown={markdown} />
                    </Box>
                </Stack>
            </Container>
        </>
    );
}

export default ProjectContent;